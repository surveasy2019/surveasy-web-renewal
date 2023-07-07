<template>
  <div class="knowhow-list-container">
    <div class="knowhow-title">서베이지의 서베이 꿀팁</div>
    <div class="knowhow-row">
        <router-link :to="`/knowhowcontent/${1}`"><img src="@/assets/knowhow/one/main-1.png" class="thumb-img" width="200"></router-link>
        <router-link :to="`/knowhowcontent/${2}`"><img src="@/assets/knowhow/one/surveytips2thumbnail.png" class="thumb-img" width="200"></router-link>
    </div>
    <div class="knowhow-row">
        <router-link :to="`/knowhowcontent/${3}`"><img src="@/assets/knowhow/one/surveytips3thumbnail.png" class="thumb-img" width="200"></router-link>
        <router-link :to="`/knowhowcontent/${4}`"><img src="@/assets/knowhow/one/surveytips4thumbnail.png" class="thumb-img" width="200"></router-link>
    </div>
    <div class="knowhow-row">
        <router-link :to="`/knowhowcontent/${5}`"><img src="@/assets/knowhow/one/surveytips5thumbnail.png" class="thumb-img" width="200"></router-link>
        <router-link :to="`/knowhowcontent/${6}`"><img src="@/assets/knowhow/one/surveytips6thumbnail.png" class="thumb-img" width="200"></router-link>
    </div>
    <div class="knowhow-row">
        <router-link :to="`/knowhowcontent/${7}`"><img src="@/assets/knowhow/one/surveytips7thumbnail.png" class="thumb-img" width="200"></router-link>
        <router-link :to="`/knowhowcontent/${8}`"><img src="@/assets/knowhow/one/surveytips8thumbnail.png" class="thumb-img" width="200"></router-link>
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
    margin-top: 30px;
}
.knowhow-row img{
    margin-right: 40px;
    margin-left: 40px;
}

</style>