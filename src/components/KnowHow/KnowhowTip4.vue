<template>

<div id="knowhow-item-container">
  <div class="knowhow-contents">
    <div class="knowhow-title">
      <p class="black-light">서베이지의 EASY한 서베이 꿀팁 #4</p>
      <p class="green">설문 배포 시 유용한 꿀팁 4가지</p>
    </div>
    <div class="knowhow-content">
      <p><img class="img1" src="@/assets/knowhow/one/surveytips4thumbnail.png" width="300"></p>
      <p class="black-bold-">설문을 다 만들었다면 이제 응답을 얻기 위해 설문을 배포해야 합니다.<br>설문 배포를 진행하기 전, 알아두면 좋을 꿀팁들을 소개합니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">1. 설문 미리보기</p>
      <p class="black-light">네이버폼, 구글폼 모두 설문 미리보기를 할 수 있습니다. 미리보기 기능으로 배포 전에 설문에 문제는 없는지, 페이지가 잘 넘어가는지, 오타는 없는지 확인해 주세요!</p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips4image(1).png" width="400"></p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips4image(2).png" width="400"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">2. 링크 단축</p>
      <p class="black-light">설문을 공유할 때 링크가 긴 것보다는 짧고 간략하면 더 깔끔해 보이기 때문에, 설문 참여자에게 좋은 인상을 남길 수 있습니다. 네이버폼은 자동으로 링크가 단축되어 있지만, 구글폼에서는 직접 설정해야 합니다. ‘보내기’에서 두 번째 아이콘을 클릭한 후, ‘URL 단축’을 설정해 짧아진 링크를 단축해 보세요.</p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips4image(3).png" width="400"></p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips4image(4).png" width="400"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">3. 설문 홍보글</p>
      <p class="black-light">설문 홍보글에는 간략하고 명확하게 어떤 주제와 목적으로 설문을 진행하는지, 예상 소요 시간은 대략 어느 정도인지, 설문 참여 리워드가 있는지 등을 포함해 주는 것이 좋습니다. 제목을 쓰고 설문 정보를 문단별로 나누어 작성하여 가독성을 높여보세요. 이모티콘을 사용하는 것도 이목을 끄는 하나의 방법입니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">4. 설문 대상 확인</p>
      <p class="black-light">홍보글도 준비되었다면 다시 한 번 설문 대상을 확인해야 합니다. 설문 대상이 누구인지에 따라 배포해야 하는 곳이 달라지기 때문입니다. 원하는 대상으로부터 양질의 설문 응답을 얻고 싶다면, 무작정 배포하는 것보다 타겟층이 많이 모여있는 플랫폼에 배포하는 것이 좋습니다.</p>
      <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
        <p class="black-bold-">여러 군데에 설문 배포하는 것이 번거롭다면,  <br>
        서베이지의 설문 응답 서비스를 이용해 보세요.<br>
        200명이 넘는 패널들이 설문에 참여할 준비가 되어있습니다.<br><br>
        <router-link to="/service"><span id="click-go">이용하러 가기</span></router-link></p>
    </div>
  </div>
</div>

</template>
 
<script>
export default {
  methods: {
   
  }
}
</script>

<style>
#knowhow-item-container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 60px;
    text-align: center;
}

#knowhow-item-container .knowhow-title p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #0AAB00;
    margin-top: 6px;
    text-decoration: none;
}

#knowhow-item-container .knowhow-title .black-light {
    font-size: 1rem;
    font-weight: 300;
    color: black;
    padding-left: 10%;
    text-align: left;
    margin-bottom: 0;
    line-height: 30px;
}

#knowhow-item-container .img1 {
    margin-top: 50px;
}

#knowhow-item-container .img {
    margin-top: 30px;
    padding-left: 0 !important;
}

.knowhow-content {
    margin-bottom: 120px;
    padding-right: 10%;
    padding-left: 10%;
}

.knowhow-content .black-light {
    font-weight: 300;
    text-align: left;
    font-size: 1rem;
    line-height: 30px;

}

.knowhow-content .black-bold {
    font-weight: 700;
    font-size: 1.1rem;
    text-align: left;
    
}

.knowhow-content .img2 {
    margin-top: 100px;
    padding-left: 0 !important;
    margin-bottom: 20px;
}

.knowhow-content .black-bold- {
    font-size: 1rem;
    color: gray;
    font-weight: 400;
    line-height: 30px;
    text-decoration: none !important;
}
#click-go{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #0AAB00;
  text-decoration: none
}

.green {
    padding-left: 10%;
    text-align: left;
}</style>