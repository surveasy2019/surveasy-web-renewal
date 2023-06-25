<template>
  <div class="home-statics-container">
    HomeStatics

    <div class="home-statics-item-container">
      <div>설문수</div>
      <div>패널수</div>
      <div>만족도</div>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-statics-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  background-color: rgb(200, 253, 160);
  margin-top: 5px;
}
.home-statics-item-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>