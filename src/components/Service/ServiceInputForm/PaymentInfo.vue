<template>
    <div class="pay-info-container">
        <div class="input-title">결제 방법</div>
        <div class="option-border"></div>
        <div class="pay-info-title">입금 계좌<br>
            카카오뱅크 3333-11-5235460 (송다예)</div>
        <input class="info-input" v-model="this.accountName" type="text" placeholder="입금자명" required>
        <div><button class="pay-btn" @click="uploadSurvey">결제하기</button></div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'
export default {
    data(){
        return{
            accountName : ''
        }
    },
    methods:{
        async uploadSurvey() {
            const obj = store.state.surveyOption
            
            if(obj.title == '' || obj.institute == '' || obj.link == '' || this.accountName == ''){
                alert("필수 항목을 모두 입력해주세요.")
            } else if (!this.$store.state.isLoggedIn) {
                alert("로그인이 필요합니다.")
            } else {
                store.commit('saveAccountName', {
                    accountName: this.accountName
                })
                try {
                    const response = await axios.post(
                        'https://gosurveasy.co.kr/survey',
                        {
                            headCount: obj.headCount,
                            spendTime: obj.spendTime,
                            dueDate: new Date(store.state.surveyOption.endDate + "T" + store.state.surveyOption.endTime),
                            targetGender: obj.targetGender,
                            targetAgeList: obj.targetAge,
                            language: obj.language,
                            identity: obj.identity,
                            title: obj.title,
                            targetInput: obj.targetInput,
                            institute: obj.institute,
                            link: obj.link,
                            notice: obj.notice,
                            accountName: obj.accountName,
                            price: obj.price,
                            priceDiscounted: obj.priceDiscounted,
                            pointAdd: 100,
                            email: this.$store.state.currentUser.email,
                            username: this.$store.state.currentUser.name
                            /*
                            english: obj.english,
                            accountName: obj.accountName,
                            dueDate: new Date(store.state.surveyOption.endDate + "T" + store.state.surveyOption.endTime),
                            institute: obj.institute,
                            link: obj.link,
                            notice: obj.notice,
                            pointAdd: 100,
                            price: obj.price,
                            priceDiscounted: obj.priceDiscounted,
                            priceIdentity: obj.priceIdentity,
                            headCount: obj.headCount,
                            spendTime: obj.spendTime,
                            tarInput: obj.tarInput,
                            tarAge: obj.tarAge,
                            tarGender: obj.tarGender,
                            title: obj.title,
                            email: this.$store.state.currentUser.email,
                            username: this.$store.state.currentUser.name
                            */
                        }
                    )
                    this.$router.push("/service/paydone")
                    console.log(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
        },
    
    }
}
</script>

<style>
.pay-info-container {
    display: flex;
    flex-direction: column;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 30px;
    padding: 20px;
    padding-left: 30px;
    background-color: #fafafa;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.pay-info-container .info-input {
    margin-top: 10px;
    width: 85%;
    height: 40px;
    padding-left: 7px;
    color: #a0a0a0;
    background-color: white;
    border: solid 1px #dadada;
    border-radius: 5px;
}

.pay-info-title{
    text-align: left;
    font-size: 1rem;
    color: black;
    font-weight: 600;
    margin-top: 15px;
}
.pay-btn {
  width: 80%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #0CAE02;
  margin-top: 15px;
  background-color: #ffffff;
  border: 1px solid #0CAE02;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}

.pay-btn:hover {
  color: white;
  background: #0AAB00;
}

</style>