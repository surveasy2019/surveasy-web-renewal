<template>
  <div class="join-container">
    <JoinInputVue />
  </div>
</template>

<script>
import JoinInputVue from '@/components/Join/Join/JoinInput.vue'

export default {
  name: 'Join',
  components: {
    JoinInputVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>