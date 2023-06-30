<template>
  <div class="join-done-notice-container">
    <img src="@/assets/check.png" width="70">

    <div class="join-done-notice-text-container">
      <div>Survey를 Easy하게,
      <br>Surveasy의 회원이 되신 것을 환영합니다!</div>
    </div>

    <div class="join-done-notice-button-container">
      <button id="btn-login">로그인 하러가기</button>
      <button id="btn-home">서베이지 둘러보기</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.join-done-notice-text-container {
  padding: 20px 0 30px 0;
  line-height: 1.7rem;
  font-size: 17px;
  font-weight: bold;
}
.join-done-notice-button-container {
  display: flex;
  flex-direction: column;
}
.join-done-notice-button-container button {
  width: 300px;
  height: 40px;
  margin: 5px auto;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}
#btn-login {
  background-color: white;
  color: #0AAC00;
  border: solid 1px #0AAC00;
}
#btn-home {
  background-color: #0AAC00;
  color: white;
}
</style>