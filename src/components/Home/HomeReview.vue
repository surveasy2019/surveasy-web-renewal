<template>
  <div class="home-review-container">
    HomeReview

    <div class="home-review-item-container">
      <div>리뷰 1</div>
      <div>리뷰 2</div>
      <div>리뷰 3</div>
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
  background-color: rgb(200, 253, 160);
  margin-top: 5px;
}
.home-review-item-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>