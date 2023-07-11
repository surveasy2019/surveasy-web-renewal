<template>
  <div class="mypage-review-container">
    <h1>마이페이지</h1>
    <MyPageNavigatorVue />
    <MyPageReviewListVue />
  </div>
</template>

<script>
import MyPageNavigatorVue from '@/components/MyPage/MyPageNavigator.vue'
import MyPageReviewListVue from '@/components/MyPage/MyPageReview/MyPageReviewList.vue'

export default {
  name: 'MyPageReview',
  components: {
    MyPageNavigatorVue,
    MyPageReviewListVue
  }
}
</script>

<style>
.mypage-review-container {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}
</style>