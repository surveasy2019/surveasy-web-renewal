<template>
  <div class="home-service-container">
    HomeService

    <div class="home-service-item-container">
      <div>설문</div>
      <div>인터뷰이</div>
      <div>베타테스터</div>
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
  background-color: rgb(200, 253, 160);
  margin-top: 5px;
}
.home-service-item-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>