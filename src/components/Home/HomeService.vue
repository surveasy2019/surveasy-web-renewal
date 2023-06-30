<template>
  <div class="home-service-container">
    <div class="home-title">
      서비스 바로가기
    </div>
    <div class="home-service-item-container">
      <router-link to="/service"><div class="circle-container">
        <img src="@/assets/home/content01.png" class="circle-image" />
      </div></router-link>
      <div class="circle-container">
          <img src="@/assets/home/content02.png" class="circle-image" />
        </div>
        <a href="https://surveasy.oopy.io/betaservice"><div class="circle-container">
          <img src="@/assets/home/content03.png" class="circle-image" />
        </div></a>
    </div>
    <div class="home-service-item-container">
      <div class="item-title">설문</div>
      <div class="item-title">인터뷰이</div>
      <div class="item-title">베타테스터</div>
    </div>
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-service-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  background-color: white;
  margin-top: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #000000;
}
.home-service-item-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.home-title{
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  margin-left: 15px;
}

.item-title{
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
}
.circle-container {
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 50%;
  background-color: #78C391;
  overflow: hidden;
}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>