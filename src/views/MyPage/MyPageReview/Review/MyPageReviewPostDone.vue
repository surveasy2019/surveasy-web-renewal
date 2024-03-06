<template>
  <div class="mypage-review-post-done">
    <MyPageReviewDoneNoticeVue />
  </div>
</template>

<script>
import MyPageReviewDoneNoticeVue from '@/components/MyPage/MyPageReview/Review/MyPageReviewDoneNotice.vue'

export default {
  name: 'MyPageReviewPostDone',
  components: {
    MyPageReviewDoneNoticeVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>