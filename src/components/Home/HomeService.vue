<template>
  <div class="home-service-container">
    <div class="home-title">
      서베이지가 도와드릴게요
    </div>
    <div class="home-service-item-container">
      <div class="home-content">
        <img src="@/assets/home/survey.png" width="30" class="item-img">
        <div class="item-title">설문 응답 수집</div>
        <div class="item-content">한 번에, 손쉽게 설문 응답을 모아보세요.<br>설문 링크만 올리면 서베이지의 패널이
          <br>빠르게 설문에 응답해드립니다.</div>
        <div class="content-btn-container">
          <router-link to="/service" class="item-btn">이용하러가기</router-link>
        </div>
      </div>
      <div class="home-content">
        <img src="@/assets/home/survey.png" width="30" class="item-img">
        <div class="item-title">인터뷰이 모집</div>
        <div class="item-content">인터뷰를 해야할 땐, 인터뷰이 모집 서비스를<br>이용해 보세요. 원하는 인터뷰이를, 원하는
          <br>일정에 맞게 구해드립니다.</div>
        <div class="content-btn-container">
          <button class="item-btn">이용하러가기</button>
        </div>
      </div>
      <div class="home-content">
        <img src="@/assets/home/beta.png" width="20" height="30" class="item-img">
        <div class="item-title">베타테스터 모집</div>
        <div class="item-content">앱이나 웹사이트 출시를 앞두고 계신가요?<br>정식 출시에 앞서, 베타테스터를 모집해
          <br>오류는 없는지 미리 확인해보세요!</div>
        <div class="content-btn-container">
          <a href="https://surveasy.oopy.io/betaservice" class="item-btn" target="blank">이용하러가기</a>
        </div>
      </div>
      
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
  padding-left: 10px;
  padding-right: 10px;
  height: 240px;
}
.home-service-container .home-title{
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  margin-left: 15px;
}

.home-service-container .item-title{
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  padding-left: 13px;
  padding-right: 13px;
}
.home-service-container .item-content{
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  font-size: 10px;
  margin-top: 14px;
  padding-left: 13px;
  padding-right: 13px;
  line-height: 16px;
}
.home-content{
  display: flex;
  flex-direction: column;
  border: solid 1px #0AAB00;
  width: 30%;
  border-radius: 10px;
}
.content-btn-container{
  display: flex;
  justify-content: right;
  padding-right: 13px;
}
.item-btn{
  margin-top: 20%;
  width: 60%;
  padding: 5px 10px;
  color:#0CAE02;
  background-color: #ffffff;
  border: 1px solid #0CAE02;
  border-radius: 8px;
  font-size: 0.7rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: none;
}

.item-btn:hover{
  color: white;
  background: #0AAB00;
}

.item-img{
  margin: 15px;
}

</style>