<template>
<div id="app">
  <div class="main-container">
    <HeaderVue />
    <NavBarVue />
    <router-view/>
    <FooterVue />
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

export default {
  name: 'App',
  components: {
    HeaderVue,
    NavBarVue,
    FooterVue
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
</style>
