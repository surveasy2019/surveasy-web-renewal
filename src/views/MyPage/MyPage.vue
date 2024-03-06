<template>
  <div class="mypage-container">
    <h1>마이페이지</h1>
    <MyPageDashboardVue />
    <MyPageNavigatorVue />
  </div>
</template>

<script>
import MyPageDashboardVue from '@/components/MyPage/MyPageDashboard.vue'
import MyPageNavigatorVue from '@/components/MyPage/MyPageNavigator.vue'

export default {
  name: 'MyPage',
  components: {
    MyPageDashboardVue,
    MyPageNavigatorVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>
.mypage-container {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 30px;
}
</style>