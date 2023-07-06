<template>

<div id="knowhow-item-container">
  <div class="knowhow-contents">
    <div class="knowhow-title">
      <p class="black-light">서베이지의 EASY한 서베이 꿀팁 #1</p>
      <p class="green">설문조사 제작할 때 고려해야 할 6가지 요소</p>
    </div>
    <div class="knowhow-content">
      <p><img class="img1" src="@/assets/knowhow/one/main-1.png" width="300"></p>
      <p class="black-bold-">설문을 만들기 전에, 혹은 만들고나서 <br>한 번쯤 점검해보면 좋을 6가지 요소를 소개해드립니다. <br> 소개해드리는 6가지 요소를 잘 고려해서 만들었는지 확인해보세요.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">1. 설문에 대한 소개, 설명은 간결하게!</p>
      <p class="black-light">너무 구체적인 내용을 담거나 설문의 방향성을 드러내지 않도록 주의해야 합니다. 해당 설명으로 인해 응답자의 관점이 바뀌어, 솔직한 답변을 얻을 수 없게 됩니다.</p>
        <p><img class="img" src="@/assets/knowhow/one/1-1.png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">2. 첫 문항은 간단한 문항을 배치!</p>
      <p class="black-light">처음부터 어려운 문항을 배치하는 것은 설문 응답자의 응답 의지를 저하시킬 수 있습니다. 따라서 첫 질문으로는 간단하고 심플한 질문을 배치하는 것을 추천드립니다. 주로 응답자의 나이 및 직업을 물어보는 인적 정보를 파악하는 질문들이 많습니다.</p>
        <p><img class="img" src="@/assets/knowhow/one/1-2.png" width="500"></p>
        
    </div>
    <div class="knowhow-content">
      <p class="black-bold">3. 비슷한 질문끼리 그룹핑 하기</p>
      <p class="black-light">비슷한 질문들끼리 그룹화 혹은 섹션을 나누면 응답자가 설문을 이해하고 질문을 파악하는 데 도움이 됩니다.</p>
        <p><img class="img" src="@/assets/knowhow/one/1-3.png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">4. 설문은 짧게, 필요한 질문만!</p>
      <p class="black-light">응답자들은 지나치게 긴 설문조사에 금방 지루해질 수 있습니다. 최소한의 질문을 사용해 최대한 많은 정보를 얻으려고 노력하면 응답자들도, 여러분들도 만족스러운 결과를 얻을 수 있겠죠?</p>
        <p><img class="img" src="@/assets/knowhow/one/1-4.png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">5. 알아듣기 쉽고 명확한 질문!</p>
      <p class="black-light">알지 못하는 표현이나 이해하기 어려운 질문이 있으면 참여자들은 설문을 쉽게 포기할 수 있습니다. 이탈자를 막기 위해서는, 설명이 필요한 단어에 대해 꼭! 설명을 해주고 이해를 돕기 위한 사진도 추가해 주면 좋습니다.</p>
      <p><img class="img" src="@/assets/knowhow/one/1-5.png" width="500"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">6. Yes or No 질문은 NO!</p>
      <p class="black-light">예/아니오 질문은 최대한 피하는 게 좋습니다.</p>
        <p><img class="img" src="@/assets/knowhow/one/1-6(1).png" width="500"></p>
      <p class="black-light">예/아니오 질문을 피할 때는 리커트 척도(Likert Scale)를 이용하는 것을 추천드립니다. 이 척도는 의견과 인식을 측정하는 가장 신뢰성 있는 방법 중 하나이기도 합니다.</p>
        <p><img class="img" src="@/assets/knowhow/one/1-6(2).png"></p>
        <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
        <p class="black-bold-">명확하고 꼼꼼한 설문 설계는 유의미한 응답을 수집할 수 있게끔 합니다. <br>
        6가지 요소를 잘 고려해서 질 높은 설문을 만들어보세요!<br></p>
 
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
  #knowhow-item-container{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 60px;
    text-align: center;
  }

  #knowhow-item-container .knowhow-title p{
   font-size: 1.2rem;
   font-weight: 500;
   color: #0AAB00;
   margin-top: 6px;
  }
  #knowhow-item-container .knowhow-title .black-light{
    font-size: 1rem;    
    font-weight: 300;
    color:black;
    padding-left: 10%;
    text-align: left;
    margin-bottom: 0;
  }
  #knowhow-item-container .img1{
    margin-top: 50px;
  }
  #knowhow-item-container .img{
    margin-top:30px;
    padding-left: 0 !important;
  }
  .knowhow-content {
    margin-bottom: 120px;
    padding-right: 10%;
    padding-left: 10%;
  }
  .knowhow-content .black-light{
    font-weight: 300;
    text-align: left;
    font-size: 1rem;
  }
  .knowhow-content .black-bold{
    font-weight: 700;
    font-size: 1.1rem;
    text-align: left;
  }
  .knowhow-content .img2{
    margin-top:100px;
    padding-left: 0 !important;
    margin-bottom: 20px;
  }
  .black-bold-{
    font-size: 1rem;
    color: gray;
    font-weight: 400;
  }
 .green{
    padding-left: 10%;
    text-align: left;
  }
 
</style>