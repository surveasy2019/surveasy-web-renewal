<template>
  <div class="bottom-bar-container">
    <router-link to="/" class="bar-item-container" @click="changeTab('home')" :class="{ 'active': activeTab === 'home' }">
      <div class="ii"><img class="bar-img" src="@/assets/barIcon/home_icon.png" alt="home"></div>
      <div>홈</div>
    </router-link>
    <router-link to="/service" class="bar-item-container" @click="changeTab('service')" :class="{ 'active': activeTab === 'service' }">
      <div><img class="bar-img" src="@/assets/barIcon/service_icon.png" alt="service"></div>
      <div>서비스</div>
    </router-link>
    <router-link to="/list" class="bar-item-container" @click="changeTab('list')" :class="{ 'active': activeTab === 'list' }">
      <div><img class="bar-img" src="@/assets/barIcon/list_icon.png" alt="list"></div>
      <div>리스트</div>
    </router-link>
    <router-link to="/knowhow" class="bar-item-container" @click="changeTab('knowhow')" :class="{ 'active': activeTab === 'knowhow' }">
      <div><img class="bar-img" src="@/assets/barIcon/knowhow_icon.png" alt="knowhow"></div>
      <div>리서치노하우</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'home' // 초기 탭 설정
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab; // 클릭된 탭으로 변경
    }
  }
}
</script>

<style>
.bottom-bar-container .bar-item-container.active {
  background-color: gray; /* 활성화된 탭의 배경색을 회색으로 설정 */
}
.bottom-bar-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1); 
}
.bar-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

.bar-img {
  width: 24px;
  height: 24px;
}
/*
.active {
  color: #0AAB00; 
}




*/
</style>