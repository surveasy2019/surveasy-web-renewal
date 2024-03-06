<template>
  <div class="findpw-container">
    <FindPwInputVue />
  </div>
</template>

<script>
import FindPwInputVue from '@/components/Login/FindPwInput.vue'

export default {
  name: 'FindPw',
  components: {
    FindPwInputVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>