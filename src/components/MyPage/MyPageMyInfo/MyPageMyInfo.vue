<template>
  <div class="mypage-myinfo-container">
    <div class="mypage-myinfo-title-container">
      <div>나의 정보</div>
    </div>

    <div class="mypage-myinfo-main-container">
      <div id="mypage-myinfo-title-green">회원 정보</div>
      <div class="mypage-myinfo-main-row">
        <div class="mypage-myinfo-option">이메일</div>
        <div class="mypage-myinfo-value">{{this.$store.state.currentUser.email}}</div>
      </div>
      <div class="mypage-myinfo-main-row">
        <div class="mypage-myinfo-option">이름</div>
        <div class="mypage-myinfo-value">{{this.$store.state.currentUser.name}}</div>
      </div>
      <div class="mypage-myinfo-main-row">
        <div class="mypage-myinfo-option">휴대폰 번호</div>
        <div class="mypage-myinfo-value">{{this.$store.state.currentUser.phoneNumber}}</div>
      </div>
      <div class="mypage-myinfo-main-row">
        <div class="mypage-myinfo-option">생년월일</div>
        <div class="mypage-myinfo-value">{{this.$store.state.currentUser.birth}}</div>
      </div>
      <div class="mypage-myinfo-main-row">
        <div class="mypage-myinfo-option">할인 대상</div>
        <div class="mypage-myinfo-value">{{this.$store.state.currentUser.identity}}</div>
      </div>

      <div class="mypage-myinfo-main-line-container"><div class="mypage-myinfo-main-line"></div></div>

      <div class="mypage-myinfo-notice-container">
        <span class="mypage-myinfo-notice">* 회원 정보 수정을 원하실 경우</span>
        <span class="mypage-myinfo-notice" id="green">서베이지 카카오톡 채널</span>
        <span class="mypage-myinfo-notice">로 문의 바랍니다.</span>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
}
</script>

<style>
.mypage-myinfo-container {
  width: 100%;
  justify-content: center;
}
.mypage-myinfo-title-container {
  display: flex;
  padding: 0 40px 10px 50px;
  color: #0AAB00;
  font-size: 20px;
  font-weight: bold;
}
.mypage-myinfo-main-container {
  width: 72%;
  margin: auto;
  padding: 50px 50px 20px;
  border: solid 1px #0AAC00;
  border-radius: 5px;
}
.mypage-myinfo-main-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
}
.mypage-myinfo-main-line-container {
  display: flex;
  justify-content: center;
  height: 1px;
}
.mypage-myinfo-main-line {
  width: 100%;
  height: 1px;
  background-color: rgb(222, 222, 222);
}
.mypage-myinfo-option {
  color: #757272;
  font-size: 17px;
}
.mypage-myinfo-value {
  color: #757272;
  font-size: 17px;
  font-weight: lighter;
}
.mypage-myinfo-notice-container {
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 20px auto;
}
.mypage-myinfo-notice {
  margin-bottom: 5px;
  color: #757272;
  font-size: 12px;
}
#mypage-myinfo-title-green {
  color: #0AAC00;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 40px;
}
#green {
  color: #0AAC00;
}
</style>