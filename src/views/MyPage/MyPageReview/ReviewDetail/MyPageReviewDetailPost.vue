<template>
  <div>
    <MyPageReviewDetailInputVue />
  </div>
</template>

<script>
import MyPageReviewDetailInputVue from '@/components/MyPage/MyPageReview/ReviewDetail/MyPageReviewDetailInput.vue'

export default {
  name: 'MyPageReviewPost',
  components: {
    MyPageReviewDetailInputVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>