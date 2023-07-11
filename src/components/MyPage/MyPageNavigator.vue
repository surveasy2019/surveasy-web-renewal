<template>
  <div class="mypage-navigator-container">
    <div class="mypage-navigator-button-container">
      <router-link to="/mypage/order" class="mypage-navigator-button-container-item"><div>주문내역</div></router-link>
      <router-link to="/mypage/review" class="mypage-navigator-button-container-item"><div>리뷰 작성</div></router-link>
      <!-- <router-link to="/mypage/point"><div class="mypage-navigator-button-container-item">적립금</div></router-link> -->
      <router-link to="/mypage/myinfo" class="mypage-navigator-button-container-item"><div>나의 정보</div></router-link>

      <div class="mypage-navigator-button-logout">
        <span @click="showLogoutModal()">로그아웃 〉</span>
        <MyPageLogoutModalVue :logoutModal="logoutModal" @closeLogout="closeLogoutModal()"></MyPageLogoutModalVue>
      </div>      
    </div>
    
  </div>
</template>

<script>
import MyPageLogoutModalVue from './MyPageLogoutModal.vue'

export default {
  name: 'MyPageNavigator',
  components: {
    MyPageLogoutModalVue
  },

  data() {
    return {
      logoutModal: false
    }
  },

  methods: {
    showLogoutModal() {
      this.logoutModal = true
    },

    closeLogoutModal() {
      this.logoutModal = false
    }
  }
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
.mypage-navigator-button-container-item {
  width: 100%;
  height: 70px;
  margin: 10px auto;
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
  width: 100%;
  height: 30px;
  margin-top: 8px;
  padding-right: 10px;
  color: #919191;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.mypage-navigator-button-logout:hover {
  color:#0CAE02;
}
</style>