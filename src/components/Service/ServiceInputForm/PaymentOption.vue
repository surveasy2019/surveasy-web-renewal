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
            <div class="pay-option-title">적립금</div>
            <div class="pay-option-row">
                <input class="pay-option-input" v-model="this.payPoint" type="text" placeholder="사용하려는 적립금 액수를 입력해주세요.">
                <div><button @click="usePayPoint" class="pay-option-btn">적립금 적용하기</button></div>
            </div>
            <div class="pay-option-warn">보유 적립금 000원</div>
            <div class="pay-option-warn">*적립금은 주문 금액의 최대 10%까지 사용 가능합니다.</div>
      
        </div>
    
    
    </div>
</template>

<script>
export default {
  data(){
    return{
      coupon : '',
      payPoint : 0
    }
  },

  methods : {
    checkCoupon(){
      console.log(this.coupon, "유효한 쿠폰인지 확인하기")
    },

    usePayPoint(){
      console.log(this.payPoint, "적립금 적용하고 보유 적립금 지우기")
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
</style>