<template>
  <div class="mypage-navigator-container">
    <div class="mypage-navigator-button-container">
      <router-link to="/mypage/order" class="mypage-navigator-button-container-item"><div>주문내역</div></router-link>
      <router-link to="/mypage/review" class="mypage-navigator-button-container-item"><div>리뷰 작성</div></router-link>
      <!-- <router-link to="/mypage/point"><div class="mypage-navigator-button-container-item">적립금</div></router-link> -->
      <router-link to="/mypage/myinfo" class="mypage-navigator-button-container-item"><div>나의 정보</div></router-link>
      <a><div class="mypage-navigator-button-logout">로그아웃 〉</div></a>
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
  margin: 20px 0 20px 0;
}
.mypage-navigator-button-container a {
  width: 100%;
  margin: 10px auto;
}
.mypage-navigator-button-container-item {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #EFEFEF;
  color: #343434;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: solid 1px #e9e9e9;
  border-radius: 5px;
}
.mypage-navigator-button-logout {
  height: 30px;
  margin-top: 5px;
  padding-right: 10px;
  color: #919191;
  text-align: right;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;  
  cursor: pointer;
}
</style>