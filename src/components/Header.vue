<template>
  <div class="header-container">
    <div>
      <router-link to="/mypage">
        <img loading="prelaod" decoding="async" class="img-fluid" width="120" src="@/assets/logo.png" alt="surveasy">
      </router-link>
    </div>

    <div>
      <router-link to="/login" id="header-text" v-if="!this.$store.state.isLoggedIn">로그인 / 회원가입</router-link>
      <router-link to="/mypage" id="header-text" v-else>안녕하세요, {{this.$store.state.currentUser.name}}님!</router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HeaderContainer',

  data() {
    return {
      isLoggedIn: false
    }
  }
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