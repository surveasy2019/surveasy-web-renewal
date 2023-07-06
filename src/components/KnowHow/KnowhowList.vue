<template>
  <div class="knowhow-list-container">
    <div class="knowhow-title">서베이지의 서베이 꿀팁</div>
    <div class="knowhow-row">
        <router-link to="/knowhowcontent"><img src="@/assets/knowhow/one/main-1.png" class="thumb-img" width="200"></router-link>
        <img src="@/assets/knowhow/one/surveytips2thumbnail.png" class="thumb-img" width="200">
    </div>
    <div class="knowhow-row">
        <img src="@/assets/knowhow/one/surveytips3thumbnail.png" class="thumb-img" width="200">
        <img src="@/assets/knowhow/one/surveytips4thumbnail.png" class="thumb-img" width="200">
    </div>
    <div class="knowhow-row">
        <img src="@/assets/knowhow/one/surveytips5thumbnail.png" class="thumb-img" width="200">
        <img src="@/assets/knowhow/one/surveytips6thumbnail.png" class="thumb-img" width="200">
    </div>
    <div class="knowhow-row">
        <img src="@/assets/knowhow/one/surveytips7thumbnail.png" class="thumb-img" width="200">
        <img src="@/assets/knowhow/one/surveytips8thumbnail.png" class="thumb-img" width="200">
    </div>
  </div>
</template>

<script>


export default {
  name: 'KnowHowContainer',
  components: {
    
  }
}
</script>

<style>
.knowhow-list-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
}
.knowhow-title{
    color: #0CAE02;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 50px;
}
.knowhow-row{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.knowhow-row img{
    margin-right: 30px;
    margin-left: 30px;
}

</style>