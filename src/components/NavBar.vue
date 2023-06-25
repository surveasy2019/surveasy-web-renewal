<template>
  <div class="navbar-container">
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/service">설문 주문</router-link> 
      <router-link to="/list">설문 리스트</router-link> 
      <router-link to="/contact">문의</router-link> 
      <router-link to="/mypage">MY</router-link>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'NavBar'
}
</script>


<style>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #a4a4a4;
  text-decoration: none;
  margin: 10px;
}
nav a.router-link-exact-active {
  color: #000000;
  text-decoration: underline #0AAC00 2px;
}
.navbar-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}
</style>