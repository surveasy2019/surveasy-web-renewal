<template>
  <div class="mypage-withdraw-input-container">
    <div class="mypage-withdraw-input-top-container">
      <div class="mypage-withdraw-input-bold">고객님께서 회원탈퇴를 원하신다니 서베이지의 서비스가 부족하고 미흡했나 봅니다. <br>
        불편하셨던 점이나 불만사항을 알려주시면, 적극 반영하겠습니다.</div>
    </div>

    <div class="mypage-withdraw-input-notice-container">
      <span class="mypage-withdraw-input-bold">회원 탈퇴 전, 아래 사항을 숙지해주시기 바랍니다.</span> <br>
      <div class="mypage-withdraw-input-notice-list">
        1. 회원 탈퇴 시 쿠폰, 적립금, 회원 등급의 데이터는 삭제됩니다. <br>
        2. 회원 탈퇴 시 작성하신 후기 및 [설문 리스트] 페이지의 설문 데이터는 삭제되지 않습니다. <br>
        <span id="margin">삭제를 희망하시는 경우, 탈퇴 전 직접 삭제하셔야 합니다.</span> <br>
        3. 회원 탈퇴 후에는 해당 계정으로 로그인이 불가합니다.
      </div>
    </div>

    <div class="mypage-withdraw-input-option-container">
      <span class="mypage-withdraw-input-bold">무엇이 불편하셨나요?</span> <br>
      <div class="mypage-withdraw-input-option-list">
        <input type="checkbox"> 서비스 가격 및 옵션 불만<br>
        <input type="checkbox"> 고객 서비스 (상담, 환불 등) 불만<br>
        <input type="checkbox"> 방문 빈도가 낮음<br>
        <input type="checkbox"> 사이트 신뢰도 불만<br>
        <input type="checkbox"> 개인 정보 유출 우려
      </div>
      
    </div>

    <div class="mypage-withdraw-input-password-container">
      <span class="mypage-withdraw-input-bold">비밀번호</span> <br>
      <input type="password" >
    </div>

    <div class="mypage-withdraw-input-button-container">
      <router-link to="/"><button>탈퇴하기</button></router-link>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.mypage-withdraw-input-container {
  padding: 0 50px 0 50px;
  text-align: left;
}
.mypage-withdraw-input-bold {
  margin-bottom: 10px;
  color: rgb(53, 53, 53);
  font-size: 15.5px;
  font-weight: bold;
}
.mypage-withdraw-input-top-container {
  margin: 20px 0 20px 0;
}
.mypage-withdraw-input-notice-container {
  margin: 40px 0 30px 0;
  font-size: 14px;
}
.mypage-withdraw-input-notice-list {
  margin-top: 7px;
  line-height: 1.5rem;
  color: #979797;
}
#margin {
  margin-left: 17px;
}
.mypage-withdraw-input-option-container {
  margin: 40px 0 30px 0;
}
.mypage-withdraw-input-option-list {
  margin-top: 10px;
  font-size: 15px;
  color: #525252;
  line-height: 1.75rem;
}
.mypage-withdraw-input-password-container {
  margin: 40px 0 30px 0;
}
.mypage-withdraw-input-password-container input {
  width: 300px;
  height: 30px;
  margin: 10px 0 10px 0;
  background-color: rgb(241, 241, 241);
  border: none;
  border-radius: 5px;
  padding: 7px;
}
.mypage-withdraw-input-button-container {
  display: flex;
  justify-content: center;
  margin: 30px 0 50px 0;
}
.mypage-withdraw-input-button-container button {
  margin-top: 20px;
  border: 1px solid #0AAC00;
  border-radius: 24px;
  padding: 8px 27px;
  font-size: 1rem;
  color: #0AAC00;
  background-color: white;
  cursor: pointer;
}
</style>