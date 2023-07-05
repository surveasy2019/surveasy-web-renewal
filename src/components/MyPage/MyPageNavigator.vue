<template>
  <div class="mypage-navigator-container">
    <div class="mypage-navigator-button-container">
      <router-link to="/mypage/order"><div class="mypage-navigator-button-container-item">주문내역</div></router-link>
      <router-link to="/mypage/myinfo"><div class="mypage-navigator-button-container-item">리뷰 작성</div></router-link>
      <router-link to="/mypage/point"><div class="mypage-navigator-button-container-item">적립금</div></router-link>
      <router-link to="/mypage/myinfo"><div class="mypage-navigator-button-container-item">나의 정보</div></router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MyPageNavigator'
}
</script>

<style>
.mypage-navigator-container {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: auto;
}
.mypage-navigator-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 40px 0;
}
.mypage-navigator-button-container a {
  width: 100%;
  height: 70px;
  margin: 10px auto;
  background-color: #EFEFEF;
  color: #343434;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: solid 1px #e9e9e9;
  border-radius: 5px;
}
.mypage-navigator-button-container-item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>