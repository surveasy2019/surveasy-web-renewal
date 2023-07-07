<template>
  <div class="mypage-myinfo-marketing-container">
    <div class="mypage-myinfo-marketing-main-container">
      <div id="mypage-myinfo-marketing-title-green">이벤트 혜택 수신 설정 (마케팅 정보)</div>

      <div class="mypage-myinfo-marketing-notice-container">
        <span class="mypage-myinfo-marketing-notice">* 구매 정보, 회원 정보 수정, 공지, CS 알림은 수신설정에 상관없이 발송됩니다.</span>
      </div>
      
      <div class="mypage-myinfo-marketing-main-row">
        <input class="mypage-myinfo-marketing-check-input" type="checkbox">
        <label class="mypage-myinfo-marketing-check-label">SMS / 카카오톡</label>
      </div>
      <div class="mypage-myinfo-marketing-main-row">
        <input class="mypage-myinfo-marketing-check-input" type="checkbox">
        <label class="mypage-myinfo-marketing-check-label">이메일</label>
      </div>

      <div class="mypage-myinfo-marketing-button-container">
        <button class="mypage-myinfo-marketing-button">저장하기</button>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
}
</script>

<style>
.mypage-myinfo-marketing-container {
  width: 100%;
  justify-content: center;
}
.mypage-myinfo-marketing-notice-container {
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.mypage-myinfo-marketing-notice {
  margin-bottom: 50px;
  color: #757272;
  font-size: 12px;
}
#mypage-myinfo-marketing-title-green {
  color: #0AAC00;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
}
.mypage-myinfo-marketing-main-container {
  width: 72%;
  margin: auto;
  padding: 50px 50px 20px 50px;
  border: solid 1px #0AAC00;
  border-radius: 5px;
}
.mypage-myinfo-marketing-main-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
}
.mypage-myinfo-marketing-check-label {
  font-size: 16px;
  color: #757272;
  margin-left: 5px;
}
.mypage-myinfo-marketing-button-container {
  display: flex;
  justify-content: right;
  padding-bottom: 10px;
}
.mypage-myinfo-marketing-button {
  width: 100px;
  height: 30px;
  font-size: 14px;
  color: white;
  background-color: #0AAC00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>