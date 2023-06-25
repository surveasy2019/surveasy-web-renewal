<template>
  <div class="mypage-container">
    <MyPageDashboardVue />
    <router-link to="/mypage/order">주문내역</router-link>
    <router-link to="/mypage/myinfo">나의 정보</router-link>
  </div>
</template>

<script>
import MyPageDashboardVue from '@/components/MyPage/MyPageDashboard.vue'

export default {
  name: 'MyPage',
  components: {
    MyPageDashboardVue
  }
}
</script>

<style>
.mypage-container {
  display: flex;
  flex-direction: column;
}
.mypage-container a {
  color: #000000;
  text-decoration: none;
}
</style>