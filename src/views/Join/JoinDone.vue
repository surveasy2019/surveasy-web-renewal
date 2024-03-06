<template>
  <div class="join-done-container">
    <JoinDoneNoticeVue />
  </div>
</template>

<script>
import JoinDoneNoticeVue from '@/components/Join/JoinDone/JoinDoneNotice.vue'

export default {
  name: 'JoinDone',
  components: {
    JoinDoneNoticeVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>