<template>
<div id="knowhow-item-container">
  <div class="knowhow-contents">
    <div class="knowhow-title">
      <p class="black-light">서베이지의 EASY한 서베이 꿀팁 #7</p>
      <p class="green">설문조사 설명란에 꼭 포함해야 할 4가지</p>
    </div>
    <div class="knowhow-content">
      <p><img class="img1" src="@/assets/knowhow/one/surveytips7thumbnail.png" width="300"></p>
      <p class="black-bold-">설문지가 완성되었어도 배포하기 전 첫 화면에<br>본 조사에 대한 간단한 설명을 추가해 주는 것이 좋습니다.<br>설문조사 설명란에 어떤 내용을 포함하면 좋을지 알아보겠습니다.</p>
      <p><img class="img--" src="@/assets/knowhow/one/surveytips7image(1).png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">1. 설문 주제 및 목적</p>
      <p class="black-light">우선 설문의 주제가 가장 먼저 눈에 들어와야 합니다. 진행 중인 연구에 대한 목적도 추가하면 응답자의 신뢰를 높일 수 있습니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">2. 예상 소요 시간</p>
      <p class="black-light">설문에 응답하는데 예상되는 소요 시간도 설명란에 포함해 주는 것이 좋습니다. 예상 시간을 모른 채 설문에 참여하면 응답자가 중도 포기하는 경우가 있기 때문에 미리 설명란에 대략 어느 정도 소요될지 혹은 몇 문항으로 구성되어 있는지 적어주세요.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">3. 보상 여부</p>
      <p class="black-light">응답자에게 추첨을 통해 기프티콘 증정을 할 경우, 총 몇 명에게 어떤 기프티콘을 주는지 명시해 주면 더 많은 참여를 유도할 수 있습니다. 또한 기프티콘 지급을 위해 수집하는 전화번호 등의 개인 정보는 설문 종료 후 즉시 파기한다고 명시해, 신뢰도를 높일 수 있습니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">4. 문의 시 연락처</p>
      <p class="black-light">응답자가 설문에 응답하는 도중에 질문이나 문의 사항이 있을 경우에 대비해 연락처를 남겨두는 것을 추천드립니다. 응답자가 설문에 대해 추가적인 제안을 하거나 연구 참여 의사를 밝힐 수 있으니 이메일이나 전화번호를 남기는 것이 좋겠죠? 미처 발견하지 못한 설문의 오류를 발견하는 경우도 있습니다.</p>
      <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
        <p class="black-bold-">설명란에 설문을 어떻게 소개하고 작성하느냐에 따라<br>
           설문 참여율 및 응답의 질이 달라질 수 있습니다. <br>
        명확한 설문 설명란을 작성하고 더 효과적인 설문조사를 진행해 보세요!</p>
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

.black-bold- {
    font-size: 1rem;
    color: gray;
    font-weight: 400;
    line-height: 30px;

}

.green {
    padding-left: 10%;
    text-align: left;
}</style>