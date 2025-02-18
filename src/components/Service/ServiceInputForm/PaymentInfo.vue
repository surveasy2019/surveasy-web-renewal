<template>
    <div v-if="this.$store.state.isLoggedIn" class="pay-info-container">
      <div class="input-title">결제 방법</div>
        <div class="option-border"></div>
        <div class="pay-info-title">입금 계좌<br>
            토스뱅크 1001-7620-3024 (송*예)</div>
        <input class="info-input" v-model="this.accountName" type="text" placeholder="입금자명" required>
        <div class="icon-container">
        <div class="icon" @mouseover="showInfo" @mouseleave="hideInfo">
          <img src="@/assets/service/question.png" width="20" class="item-img">
        </div>
        <div v-if="isInfoVisible" class="info-box">
          카드 결제와 관련된 문의는 입금자명에 본인 성함 작성하여 '결제하기' 버튼 클릭 후 문의 채널로 문의 주세요!
        </div>
      </div>
        
    </div>
    <div><button class="pay-btn" @click="goPayment">결제하기</button></div>
</template>

<script>
import axios from 'axios'
import store from '@/store'
import { updateDoc, getDoc, doc, getFirestore } from 'firebase/firestore';
export default {
    data(){
      return{
        accountName : '',
      }
    },
    
    methods:{

        goPayment(){
            const obj = store.state.surveyOption
            if(obj.title == '' || obj.institute == '' || obj.link == ''){
              alert("필수 항목을 모두 입력해주세요.")
            } 
            // X
            else if(this.$store.state.isLoggedIn){
              console.log("test")
              this.fbService()
            }

            else if (localStorage.getItem("access_token") == null) {
              alert("로그인이 필요합니다.")
            } else {
              localStorage.setItem('surveyOption', JSON.stringify(obj))
              this.$router.push("/service/payment")
            }
        },

        async fbService(){
          const obj = store.state.surveyOption
          store.commit('saveAccountName', {
                    accountName: this.accountName
                })
                const pointAdd = Math.floor((obj.price - (obj.point + obj.coupon))*0.03)
                try {
                    await axios.post(
                        'https://gosurveasy.co.kr/survey',
                        {
                            headCount: obj.headCount,
                            spendTime: obj.spendTime,
                            dueDate: new Date(store.state.surveyOption.endDate + "T" + store.state.surveyOption.endTime + "Z"),
                            targetGender: obj.targetGender,
                            targetAgeList: obj.targetAge,
                            language: obj.language,
                            identity: obj.identity,
                            title: obj.title,
                            targetInput: obj.targetInput,
                            institute: obj.institute,
                            link: obj.link,
                            description: obj.description,
                            notice: obj.notice,
                            accountName: obj.accountName,
                            price: obj.price - (obj.point + obj.coupon),
                            priceDiscounted: obj.priceDiscounted,
                            pointAdd: pointAdd,
                            email: this.$store.state.currentUser.email,
                            username: this.$store.state.currentUser.name
                        }
                    )
                    this.$router.push("/service/payfdone")

                    const db = getFirestore()
                    const userEmail = this.$store.state.currentUser.email
                    const docSnap = await getDoc(doc(db, "userData", userEmail.toString()))
                    console.log(pointAdd)
                    console.log('pointAdd')

                    const botId = "5505316703:AAGLByXDGZ0pE4n4-sAtU1SZW8GNgMs6dtE";
                    // const chatId = "5620110827";
                    const chatIds = ["5620110827", "5792894818", "5551257956"]
                    const dueDateString = store.state.surveyOption.endDate + " " +store.state.surveyOption.endTime;
                    for (let i = 0; i < chatIds.length; i++) {
                                        try {
                        await axios.post(
                            `https://api.telegram.org/bot${botId}/sendMessage`,
                            {
                                chat_id: chatIds[i],
                                text: 
                                ` 설문 등록됨
제목 : ${obj.title},
마감기한 : ${dueDateString},
요구인원 : ${obj.headCount},
소요시간 : ${obj.spendTime},
타겟성별 : ${obj.targetGender},
링크 : ${obj.link},
                                `
                            }
                        
                        )
                    } catch (error) {
                    console.log(error)
                    console.log('에러났음')
                    }
                    }



                    if(docSnap.exists()){
                        const data = docSnap.data()
                        const now = data.point_current
                        const total = data.point_total
                        const docref = doc(db, "userData", userEmail.toString())
                        await updateDoc(docref, { 
                            point_current: (now - obj.point) + pointAdd,
                            point_total: total + pointAdd
                        })
                    }

                } catch (error) {
                    console.log(error)
                }
            }
        

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



.icon-container {
  position: relative; 
  align-self: flex-start; 
}

.icon {
  cursor: pointer;
}


.info-box {
  position: absolute;
  top: 100%;
  left: 0;
  width: 40vw; 
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  display: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
}

.icon:hover + .info-box {
  display: block;
}

</style>