<template>
    <div class="payment-option-container">
        <div class="input-title">쿠폰 / 적립금</div>
        <div class="option-border"></div>
        <div class="pay-option-block">
            <div class="pay-option-title">쿠폰 번호</div>
            <div class="pay-option-row">
                <input class="pay-option-input" v-model="this.coupon" type="text" placeholder="보유하신 쿠폰 번호를 입력해주세요.">
                <div><button @click="checkCoupon" class="pay-option-btn">쿠폰 적용하기</button></div>
            </div>
            <div class="pay-option-warn" id="warn" v-if="errorMsg">*유효하지 않은 쿠폰입니다.</div>
            <div class="pay-option-title">적립금</div>
            <div class="pay-option-row">
                <input class="pay-option-input" v-model="this.payPoint" type="number" placeholder="사용하려는 적립금 액수를 입력해주세요.">
                <div><button @click="usePayPoint" class="pay-option-btn">적립금 적용하기</button></div>
            </div>
            <div class="pay-option-warn">보유 적립금 {{ this.point }}원</div>
            <div class="pay-option-warn">*적립금은 결제 금액이 10,000원 이상일 때만 사용 가능하며, 주문 금액의 최대 10%까지 사용 가능합니다.</div>
      
        </div>
    
    
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'
import { getDoc, doc, getFirestore } from 'firebase/firestore';

export default {
  data(){
    return{
      coupon : '',
      payPoint : 0,
      percent : 0,
      errorMsg : false,
      point : 0,
    }
  },

  mounted(){
    this.reset()
    this.fetchUserData_point()
  },

  methods : {
    async checkCoupon(){
      try {
        const response = await axios.get(`https://gosurveasy.co.kr/coupon/${this.coupon}`)
        this.percent = response.data.discountPercent
        this.errorMsg = false
        store.commit('saveSurveyPriceOption', {
          coupon : store.state.surveyOption.price * this.percent * 0.01,
          point : this.payPoint
        })
      }catch(error){
        this.errorMsg = true
        store.commit('saveSurveyPriceOption', {
          coupon : 0,
          point : this.payPoint
        })
      }
      
    },

    async fetchUserData_point(){
      const db = getFirestore()
      const email = this.$store.state.currentUser.email
      const docSnap = await getDoc(doc(db, "userData", email.toString()))
      if(docSnap.exists()){
        const data = docSnap.data()
        this.point = data.point_current
      }else{
        console.log("no")
      }
    },

    reset(){
      store.commit('saveSurveyPriceOption', {
          coupon : 0,
          point : 0
        })
    },

    usePayPoint(){
      const price = store.state.surveyOption.price
      if(this.payPoint > price * 0.1 || price < 10000){
        alert("적립금은 결제 금액이 10,000원 이상일 때만 사용 가능하며, 결제 금액의 최대 10%까지 사용 가능합니다.")
      }else if(this.point < this.payPoint){
        alert("보유하신 적립금을 초과하여 입력하셨습니다.")
      }else{
        store.commit('saveSurveyPriceOption', {
          coupon : store.state.surveyOption.coupon,
          point : this.payPoint
        })
      }
      
    }
  }

}
</script>

<style>
.payment-option-container{
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px;
  padding: 20px;
  padding-left: 30px;
  background-color: #fafafa;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.pay-option-row{
    display: flex;
    flex-direction: row;
    justify-content: left;
}
.pay-option-block{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.payment-option-container .pay-option-input {
  margin-top: 5px;
  width: 70%;
  height: 40px;
  padding-left: 7px;
  color: #a0a0a0;
  background-color: white;
  border: solid 1px #dadada;
  border-radius: 5px;
}
.pay-option-warn{
  text-align: left;
  color: gray;
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: 10px;
}
.pay-option-title{
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
}
.pay-option-title{
  text-align: left;
  margin-right: 30px;
  color: gray;
  font-size: 0.9rem;
  font-weight: 500;
}
.pay-option-btn {
  padding: 10px 20px;
  color:#0CAE02;
  margin-left: 5px;
  margin-top: 9px;
  background-color: #ffffff;
  border: 1px solid #0CAE02;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.pay-option-btn:hover{
  color: white;
  background: #0AAB00;
}
#warn{
  color: rgb(206, 103, 103);
}
</style>