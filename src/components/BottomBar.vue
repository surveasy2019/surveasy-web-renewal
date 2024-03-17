<template>
  <div class="bottom-bar-container">
    <router-link to="/" class="bar-item-container" :class="{ 'active': activeTab === '' }">
      <div class="ii"><img class="bar-img" src="@/assets/barIcon/home_icon.png" alt="home"></div>
      <div class="item-text">홈</div>
    </router-link>
    <router-link to="/service" class="bar-item-container" :class="{ 'active': activeTab === 'service' }">
      <div><img class="bar-img" src="@/assets/barIcon/service_icon.png" alt="service"></div>
      <div class="item-text">서비스</div>
    </router-link>
    <router-link to="/list" class="bar-item-container" :class="{ 'active': activeTab === 'list' }">
      <div><img class="bar-img" src="@/assets/barIcon/list_icon.png" alt="list"></div>
      <div class="item-text">리스트</div>
    </router-link>
    <router-link to="/knowhow" class="bar-item-container" :class="{ 'active': activeTab === 'knowhow' }">
      <div><img class="bar-img" src="@/assets/barIcon/knowhow_icon.png" alt="knowhow"></div>
      <div class="item-text">리서치노하우</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: '' // 초기 탭 설정
    };
  },
  created() {
    // 초기화: 현재 경로에 따라 활성화된 메뉴 설정
    this.activeTab = this.$route.path.substring(1);
  },
  watch: {
    // 경로 변경 시 활성화된 메뉴 업데이트
    $route(to, from) {
      this.activeTab = to.path.substring(1);
    }
  }
}
</script>

<style>
.bottom-bar-container .bar-item-container.active {
  background-color: #bbd8b9; /* 활성화된 탭의 배경색을 회색으로 설정 */
}
.bottom-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1); 
}
.bar-item-container {
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column; /* 아이템을 세로로 배치하기 위해 */
  justify-content: center; /* 세로 가운데 정렬 */
  align-items: center;
  height: 100%;
}

.bar-img {
  width: 24px;
  height: 24px;
}

.item-text{
  color: black;
}
</style>