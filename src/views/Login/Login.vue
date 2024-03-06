<template>
  <div class="login-container">
    <LoginInputVue />
  </div>
</template>

<script>
import LoginInputVue from '@/components/Login/LoginInput.vue'

export default {
  name: 'Login',
  components: {
    LoginInputVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>