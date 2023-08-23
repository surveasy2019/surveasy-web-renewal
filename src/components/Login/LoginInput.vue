<template>
  <div class="login-input-container">
    <h2>로그인</h2>

    <div class="login-input-form-container">
      <input type="email" id="id" v-model="email" placeholder="이메일">
      <input type="password" id="pw" v-model="password" placeholder="비밀번호">
    </div>

    <div class="login-input-button-container">
      <button id="btn-login" @click="logIn">로그인하기</button>
      <router-link to="/join" id="btn-join-text"><button id="btn-join">회원가입하기</button></router-link>
    </div>

    <div class="login-input-findpw-container">
      <router-link to="/findpw">비밀번호 찾기</router-link>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      email:'',
      password:''
    }
  },

  methods: {
    logIn() {
      console.log("logIn")
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          console.log(user.email)
        })
    }
  }
}
</script>

<style>
.login-input-container {
  margin: auto;
}
.login-input-form-container {
  display: flex;
  flex-direction: column;
}
.login-input-form-container input {
  width: 250px;
  height: 30px;
  margin: 5px auto;
  padding-left: 7px;
  color: #727272;
  background-color: white;
  border: solid 1px #dadada;
  border-radius: 5px;
}
.login-input-form-container input:focus {
  color: #000000;
  outline: 1px solid #0AAC00;
}
.login-input-button-container {
  display: flex;
  flex-direction: column;
}
.login-input-button-container button {
  width: 260px;
  height: 32px;
  margin: 5px auto;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}
#btn-login {
  background-color: #0AAC00;
  color: white;
}
#btn-join {
  border: solid 1px #0AAC00;
}
#btn-join a {
  text-decoration: none;
  color: white;
}
.login-input-findpw-container a {
  font-size: 11px;
  color: #727272;
  text-decoration: none;
}
</style>