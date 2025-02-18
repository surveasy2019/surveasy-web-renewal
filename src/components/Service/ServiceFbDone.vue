<template>
  <div class="service-done-container-f">
    <div class="done-img-f">
      <img src="@/assets/check.png" alt="check" width="55">
    </div>
    <div class="done-bold-f" id="done-title-f">주문 완료되었습니다 !</div>
    <div class="done-content-f">안내된 계좌로 입금을 완료하셔야 서비스 이용이 가능합니다.<br>
    설문은 입금 확인과 빠른 검수 후 패널들에게 전달됩니다.</div>
    <div class="option-border-f"></div>
    <div class="done-block-f">
      <div class="done-bold-f" :style="{ flex: 1 }">총 결제금액</div>
      <div class="done-bold-f" :style="{ flex: 1.5 }">{{this.totalPrice}} 원</div>
    </div>
    <div class="option-border-f"></div>
    <div class="done-block-f">
      <div class="done-bold-f" :style="{ flex: 1 }">입금자</div>
      <div class="done-bold-f" :style="{ flex: 1.5 }">{{this.$store.state.surveyOption.accountName}}</div>
    </div>
    <div class="option-border-f"></div>
    <div class="done-block-f">
      <div class="done-bold-f" :style="{ flex: 1 }">계좌번호</div>
      <div class="done-bold-f" :style="{ flex: 1.5 }">토스뱅크 1001-7620-3024<br>
      (송다예)</div>
    </div>
    <div class="option-border-f"></div>
    <div class="done-content-f">설문조사의 진행 상황은 마이 페이지에서 확인하실 수 있습니다.<br>
    문의 사항은 카카오채널 @surveasy로 보내주세요.</div>
    <div>
      <router-link to="/mypage" class="pay-btn">마이페이지 가기</router-link>
      <!-- <button class="pay-btn">마이페이지 가기</button> -->
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return{
      totalPrice : store.state.surveyOption.price - (store.state.surveyOption.coupon + store.state.surveyOption.point),
      accountName : store.state.surveyOption.accountName
    }
  },
}
</script>

<style>
.service-done-container-f {
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px;
}
.service-done-container-f .option-border-f {
  width: 70%;
  margin: auto;
}
.done-block-f{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 20%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.done-content-f {
  margin: auto;
  color: gray;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 25px;
  margin-top: 25px;
}
.done-bold-f{
  text-align: left;
  font-size: 1.1rem;
  color: black;
  font-weight: 600;
}
#done-title-f{
  text-align: center !important;
  margin-top: 20px;
}
.pay-btn{
  margin-top: 10%;
  width: 60%;
  padding: 10px 12px;
  color:#0AAB00;
  background-color: #ffffff;
  border: 1px solid #0AAB00;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: none;
}

.pay-btn:hover{
  color: white;
  background: #0AAB00;
}
</style>