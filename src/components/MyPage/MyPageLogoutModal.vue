<template>
  <div v-if="logoutModal==true" class="mypage-logout-modal">
    <div class="mypage-logout-container">
      <div class="mypage-logout-text-container">
        <p class="mypage-logout-text">로그아웃 하시겠습니까?</p>
      </div>

      <div class="mypage-logout-button-container">
        <button class="mypage-logout-button" id="no" @click="$emit('closeLogout')">취소</button>
        <button class="mypage-logout-button" id="yes" @click="logout()"><router-link to="/">로그아웃</router-link></button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoutModal: {
      typeof: Boolean,
      require: true,
      default: false
    },
  },
  methods: {
    logout() {
      console.log('closeLogoutModal')
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
.mypage-logout-modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.524);
  display: table;
  transition: opacity .3s ease;
}
.mypage-logout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Noto Sans KR', sans-serif;
  width: 420px;
  height: 240px;
  margin: 420px auto;
  background-color: rgb(255, 255, 255);
  border: 1.5px solid #ededed;
  border-radius: 20px;
  box-shadow: 1px 2px 3px rgba(56, 56, 56, 0.43);
  transition: all .3s ease;
  z-index: 999;
}
.mypage-logout-text {
  text-align: center;
  font-size: 25px;
  font-weight: lighter;
  color: #585858;
}
.mypage-logout-button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 25px;
}
.mypage-logout-button {
  width: 130px;
  height: 30px;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.mypage-logout-button:hover {
  font-weight: bold;
  font-size: 1rem;
}
.mypage-logout-button a {
  text-decoration: none;
  color:#0CAE02;
}
#yes {
  color:#0CAE02;
  background-color: #FFFFFF;
  border: 1.5px solid #0CAE02;
}
#no {
  color:#b0b0b0;
  background-color: #FFFFFF;
  border: 1.5px solid #b0b0b0;
}
</style>