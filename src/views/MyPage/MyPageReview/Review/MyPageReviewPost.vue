<template>
  <div>
    <MyPageReviewInputVue />
  </div>
</template>

<script>
import MyPageReviewInputVue from '@/components/MyPage/MyPageReview/Review/MyPageReviewInput.vue'

export default {
  name: 'MyPageReviewPost',
  components: {
    MyPageReviewInputVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>