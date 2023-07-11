<template>
  <div class="home-statics-container">
    <div class="home-title">
      숫자로 보는 서베이지
    </div>

    <div class="home-statics-item-container">
      <div class="statics-item">
        <span class="title-bold">000개</span>
        <span class="title-mid">설문수</span>
      </div>
      <div class="statics-item">
        <span class="title-bold">000명</span>
        <span class="title-mid">패널수</span>
      </div>
      <div class="statics-item">
        <span class="title-bold">000점</span>
        <span class="title-mid">만족도</span>
      </div>
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
  margin-top: 35px;
}
.home-statics-item-container {
  background-color: #78C391;
  display: flex;
  height: 150px;
  flex-direction: row;
  justify-content: space-around;
}
.home-statics-item-container .statics-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-statics-container .home-title{
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
  text-align: left;
  margin-left: 15px;
}
</style>