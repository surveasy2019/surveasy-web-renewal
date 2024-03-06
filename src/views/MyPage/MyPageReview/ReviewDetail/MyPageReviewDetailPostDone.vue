<template>
  <div class="mypage-review-detail-post-done">
    <MyPageReviewDetailDoneNoticeVue />
  </div>
</template>

<script>
import MyPageReviewDetailDoneNoticeVue from '@/components/MyPage/MyPageReview/ReviewDetail/MyPageReviewDetailDoneNotice.vue'

export default {
  name: 'MyPageReviewPostDone',
  components: {
    MyPageReviewDetailDoneNoticeVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>