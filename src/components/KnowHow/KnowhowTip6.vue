<template>
<div id="knowhow-item-container">
  <div class="knowhow-contents">
    <div class="knowhow-title">
      <p class="black-light">서베이지의 EASY한 서베이 꿀팁 #6</p>
      <p class="green">설문조사 데이터 분석&그래프 만들기(feat. 구글폼)</p>
    </div>
    <div class="knowhow-content">
      <p><img class="img1" src="@/assets/knowhow/one/surveytips6thumbnail.png" width="300"></p>
      <p class="black-bold-">설문조사 응답 수집 후에는 데이터를 정리하고 분석하는 과정을 거쳐야 합니다.<br>특히 구글폼을 활용하면, 손쉽게 데이터를 정리 및 분석하고 그래프로 만들 수 있습니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">응답 그래프 만들기</p>
      <p class="black-light">구글폼은 응답을 실시간으로 그래프화해서 보여주고 있습니다. 복수선택이 불가한 객관식 항목은 원그래프로, 복수선택이 가능한 객관식 항목은 가로 막대그래프로, 선형 배율 문항은 세로 막대그래프로 정리됩니다. 복사 버튼을 누르면 해당 그래프의 이미지가 복사되니, 자료에 바로 넣어 사용해 보세요.</p>
      <p><img class="img" src="@/assets/knowhow/one/image.png" width="400"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">일부 응답 그래프 만들기</p>
      <p class="black-light">전체 응답이 아닌, 일부의 응답만 골라 그래프를 만드는 것도 가능합니다. 응답 화면에서 우측 상단의 ‘구글 시트’ 아이콘을 클릭해 데이터를 스프레드시트 형식으로 모아보기를 설정합니다. 만들어진 구글 시트 파일에서 원하는 데이터를 선택한 후, ‘삽입’→’차트’를 클릭하면 선택한 데이터에 대해서만 그래프를 만들 수 있습니다.</p>
      <p><img class="img" src="@/assets/knowhow/one/image(1).png" width="300"></p>
      
    </div>
    <div class="knowhow-content">
      <p class="black-bold">스프레드시트에 메모 작성하기</p>
      <p class="black-light">만들어진 구글폼 스프레드시트에서 메모를 작성해야 할 때, 설문조사 자체에 영향을 주지 않으면서 열과 행을 추가할 수 있습니다. 원하는 열/행 위치에 마우스 오른쪽 클릭을 하고 열/행을 추가하면 메모할 수 있는 란이 생깁니다. 여기에 추가된 내용은 설문 자체에 반영이 되지 않으므로 자유로운 수정이 가능합니다.</p>
      <p><img class="img" src="@/assets/knowhow/one/surveytips6image(4).png" width="400"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">특정 조건에 맞는 응답만 추출하기</p>
      <p class="black-light">특정 조건을 걸어 해당하는 응답의 개수만 구하고 싶을 때, 한 문항에서 특정 응답을 한 응답자가 다른 문항에서 어떤 응답을 했는지 추출하고 싶을 때, 혹은 답변의 일부만 추출하고 싶을 때는 구글 시트에서 함수를 활용하면 됩니다. 각각 =COUNTIF, =VLOOKUP/HLOOKUP, =MID/LEFT/RIGHT 함수를 구글 시트에서 사용하면 됩니다. 함수의 자세한 사용법은 (링크)를 참고해 주세요. 구글 시트에서도 다양한 엑셀 함수를 응용한다면 더 효율적이고 유의미한 데이터 분석을 할 수 있습니다.</p>
      <!-- <p><img class="img" src="@/assets/knowhow/surveytips6image(5).png" width="800"></p> -->
      <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
        <p class="black-bold-">구글폼을 통해 설문 응답을 모두 모았다면, <br>
        알려드린 방법으로 데이터를 분석하고 그래프로 만들어보세요!</p>
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