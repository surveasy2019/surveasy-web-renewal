<template>
  <div class="service-detail-container">
    <div class="simple-detail-container">
      <div class="home-title">서비스 상세페이지</div>
      <div class="home-title" @click="open">펼쳐보기</div>
    </div>
    <div class="full-detail-container" v-if="this.show == true">
      <img src="@/assets/service/service_detail.png" alt="detail">
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  },
  methods :{
    open(){
      this.show = !this.show
    }
  }
}
</script>

<style>
.service-detail-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  margin-top: 5px;
  
}
.simple-detail-container{
  background-color: #a5aba3;
  display: flex;
  height: 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
.full-detail-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: space-around;
}
.home-title{
  margin: 0;
}
</style>