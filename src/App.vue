<template>
<div id="app">
  <div class="main-container">
    <HeaderVue />
    <router-view/>
    <FooterVue />
    <span class="bottom-bar-container"><BottomBarVue/></span>
    
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
  color: #000000;
}
.main-container {
  width: 30%;
  margin: auto;
  border: solid 1px #dadada;
}

.main-container .bottom-bar-container {
    z-index: 9999;
}
</style>
