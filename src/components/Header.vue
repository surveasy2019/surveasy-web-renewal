<template>
  <div class="header-container">
    <div>
      <router-link to="/">
        <img loading="prelaod" decoding="async" class="img-fluid" width="120" src="@/assets/logo.png" alt="surveasy">
      </router-link>
    </div>

    <div>
      <span id="header-text">안녕하세요 OO님</span>
    </div>
    

    <!-- <router-link to="/login">로그인</router-link>
    <router-link to="/register">회원가입</router-link>
    <router-link to="/logout">로그아웃</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'HeaderContainer'
}
</script>

<style>
.header-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}
.header-container a {
  color: #000000;
  text-decoration: none;
}
#header-text {
  color: #0AAC00;
}
</style>