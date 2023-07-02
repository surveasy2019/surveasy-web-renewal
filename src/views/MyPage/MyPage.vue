<template>
  <div class="mypage-container">
    <MyPageDashboardVue />
    <div class="mypage-button-container">
      <router-link to="/mypage/order"><div class="mypage-button-container-item">주문내역</div></router-link>
      <router-link to="/mypage/myinfo"><div class="mypage-button-container-item">적립금</div></router-link>
      <router-link to="/mypage/myinfo"><div class="mypage-button-container-item">나의 정보</div></router-link>
    </div>
    
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
  padding: 50px;
}
.mypage-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 40px 0;
}
.mypage-button-container a {
  width: 100%;
  height: 60px;
  margin: 10px auto;
  background-color: #f2f2f2;
  color: #5a5a5a;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  border: solid 1px #e9e9e9;
  border-radius: 5px;
}
.mypage-button-container-item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>