<template>
  <div class="home-review-container">
    <div class="home-title">
        이미 많은 분들이 이용 중이에요
    </div>
    <div class="home-review-item-container">
      <div class="review-item">
        리뷰 1
      </div>
      <div class="review-item">
        리뷰 2
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home-review-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  margin-top: 5px;
  margin-bottom: 30px;
}
.home-review-item-container {
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
.review-item{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid 1px black;
  width: 40%;
  height: 50px;
}
</style>