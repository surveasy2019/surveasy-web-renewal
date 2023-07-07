<template>

<div id="knowhow-item-container">
  <div class="knowhow-contents">
    <div class="knowhow-title">
      <p class="black-light">서베이지의 EASY한 서베이 꿀팁 #3</p>
      <p class="green">무료 온라인 설문 툴 비교: 구글폼 VS 네이버폼</p>
    </div>
    <div class="knowhow-content">
      <p><img class="img1" src="@/assets/knowhow/one/surveytips3thumbnail.png" width="300"></p>
      <p class="black-bold-">설문지를 제작할 수 있는 무료 온라인 툴 구글폼과 네이버폼에 대해 소개해 드립니다. <br> 각각의 장점을 비교해보시고 본인에게 맞는 툴을 선택해 보세요.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">구글폼 장점 #1. 편리한 공동 작업</p>
      <p class="black-light">구글폼은 구글 서비스이기에 공동 작업하기 매우 편리합니다. 다른 사람의 구글 메일을 추가해서 바로 공동 작업이 가능합니다. 이미 공유하고 있는 구글 드라이브가 있다면, 해당 드라이브 내에서도 제작할 수 있습니다.</p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips3image(1).png" width="250"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">구글폼 장점 #2. 자동 스프레드시트 연결</p>
      <p class="black-light">구글폼은 응답이 자동으로 구글 스프레드 시트에 정리된다는 장점을 갖고 있습니다. 구글폼 내 초록색 아이콘을 클릭하면 응답과 연결된 시트를 바로 만들 수 있습니다. 시트 내에서 필요한 응답을 필터링하고 편집해 보세요.</p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips3image(2).png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">구글폼 장점 #3. 퀴즈로 만들기</p>
      <p class="black-light">설정에서 ‘퀴즈로 만들기’를 누르면 설문을 퀴즈 형식으로도 만들 수 있습니다. 또한 응답자는 퀴즈(응답)를 제출하면 바로 채점 결과를 확인할 수 있습니다. 상세 설정을 통해 응답자가 틀린 문제, 정답, 점수까지 확인할 수 있게끔 별도 설정이 가능합니다.</p>
        <p><img class="img" src="@/assets/knowhow/one/surveytips3image(3).png" width="500"></p>
        <p><img class="img" src="@/assets/knowhow/one/surveytips3image(4).png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">네이버폼 장점 #1. 다양한 템플릿</p>
      <p class="black-light">네이버 오피스에서는 서술형 설문, 선호도형 설문, 표형 설문, 퀴즈, 문의 접수 등 무려 29개에 해당하는 네이버폼 템플릿을 무료로 제공하고 있습니다. 설문을 어떻게 만들지 막막할 때 참고하면 유용합니다.</p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips3image(5).png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">네이버폼 장점 #2. 메일 알림 기능</p>
      <p class="black-light">네이버폼에는 메일 알림 기능이 있습니다. 실시간으로 설문 응답을 한 결과가 메일로 전송됩니다. 따라서 새 응답이 있는지 계속해서 확인을 할 필요가 없습니다. 설정 방법은 [응답 설정]에서 [응답 제출 시 메일 받기]를 선택하면 됩니다.</p>
        <p><img class="img" src="@/assets/knowhow/one/surveytips3image(6).png" width="400"></p>

        <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
        <p class="black-bold-">구글폼과 네이버폼 모두 가장 많이 사용되는 설문 제작 툴입니다.  <br>
        자신에게 맞는 툴을 선택해서 완성도 높은 설문지를 만들어보세요. <br>
        설문지 제작이 완료되면, 서베이지의 설문 응답 서비스로<br>손쉽게 응답을 수집해 보는 건 어떨까요?</p>
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