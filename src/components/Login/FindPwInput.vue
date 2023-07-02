<template>
  <div class="findpw-input-container">
    <img src="@/assets/check.png" width="70">
    <h2>비밀번호 재설정</h2>

    <div class="findpw-input-notice-container">
      서베이지에 가입한 이메일을 입력해주시면<br>비밀번호 재설정 메일을 보내드립니다.
    </div>

    <div class="findpw-input-form-container">
      <input type="email" id="id" v-model="email" placeholder="이메일">
    </div>

    <div class="findpw-input-button-container">
      <button id="btn-findpw">비밀번호 재설정하기</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.findpw-input-container{
  margin: auto;
  padding: 60px;
}
.findpw-input-notice-container {
  color: #000000;
  font-size: 17px;
  font-weight: lighter;
}
.findpw-input-form-container input {
  width: 250px;
  height: 30px;
  margin: 20px auto;
  padding-left: 7px;
  color: #727272;
  background-color: white;
  border: solid 1px #dadada;
  border-radius: 5px;
}
.findpw-input-form-container input:focus {
  color: #000000;
  outline: 1px solid #0AAC00;
}
#btn-findpw {
  width: 260px;
  height: 32px;
  margin: 5px auto;
  background-color: #0AAC00;
  color: white;
  border: solid 1px #0AAC00;
  border-radius: 7px;
  cursor: pointer;
}
</style>