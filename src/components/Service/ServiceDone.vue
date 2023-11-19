<template>
  <div class="service-done-container">
    <div class="done-img">
      <img src="@/assets/check.png" alt="check" width="55">
    </div>
    <div class="done-bold" id="done-title">주문 완료되었습니다 !</div>
    <div class="done-content">안내된 계좌로 입금을 완료하셔야 서비스 이용이 가능합니다.<br>
    설문은 입금 확인과 빠른 검수 후 패널들에게 전달됩니다.</div>
    <div class="option-border"></div>
    <div class="done-block">
      <div class="done-bold" :style="{ flex: 1 }">총 결제금액</div>
      <div class="done-bold" :style="{ flex: 1.5 }">{{this.totalPrice}} 원</div>
    </div>
    <div class="option-border"></div>
    <div class="done-block">
      <div class="done-bold" :style="{ flex: 1 }">입금자</div>
      <div class="done-bold" :style="{ flex: 1.5 }">{{this.$store.state.surveyOption.accountName}}</div>
    </div>
    <div class="option-border"></div>
    <div class="done-block">
      <div class="done-bold" :style="{ flex: 1 }">계좌번호</div>
      <div class="done-bold" :style="{ flex: 1.5 }">카카오뱅크 3333-11-5235460<br>
      (송다예)</div>
    </div>
    <div class="option-border"></div>
    <div class="done-content">설문조사의 진행 상황은 마이 페이지에서 확인하실 수 있습니다.<br>
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
      orderPrice : store.state.surveyOption.price,
      discount : 0,
      totalPrice : store.state.surveyOption.price,
      accountName : store.state.surveyOption.accountName
    }
  },
}
</script>

<style>
.service-done-container {
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px;
}
.service-done-container .option-border {
  width: 70%;
  margin: auto;
}
.done-block{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 20%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.done-content {
  margin: auto;
  color: gray;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 25px;
  margin-top: 25px;
}
.done-bold{
  text-align: left;
  font-size: 1.1rem;
  color: black;
  font-weight: 600;
}
#done-title{
  text-align: center !important;
  margin-top: 20px;
}

</style>