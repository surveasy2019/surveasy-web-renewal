<template>
<div id="app">
  <div class="main-container">
    <HeaderVue />
    <router-view/>
    <FooterVue class="footer" />
  </div>
  <div class="bottom-bar-container">
    <BottomBarVue />
  </div>
    
  
</div>
</template>


<script> 
/* eslint-disable */
import { initializeApp } from "firebase/app"
import firebaseConfig from "./config/firebaseConfig"
import NavBarVue from './components/NavBar.vue'
import FooterVue from './components/Footer.vue'
import HeaderVue from './components/Header.vue'
import BottomBarVue from './components/BottomBar.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    NavBarVue,
    FooterVue,
    BottomBarVue
  },
  
  data() {
    return {
      
    }
  },

  mounted() {
    const firebaseApp = initializeApp(firebaseConfig)
  }
}

</script>


<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  height: 100vh;
  color: #000000;
}
.main-container {
  position: relative;
  width: 510px;
  min-height: 100vh; /* 컨테이너를 화면 높이에 맞게 설정 */
  margin: 0 auto;
  border: solid 1px #dadada;
  padding-bottom: 40px; /* bottom-bar-container 높이만큼 여백 추가 */
  box-sizing: border-box; /* padding이 너비에 포함되도록 설정 */
}
.bottom-bar-container {
  position: fixed;
  width: 510px;
  height: 40px; /* 탭바 높이 조정 가능 */
  bottom: 0;
  background-color: #ccc; /* 원하는 색상으로 변경 */
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
}
</style>
