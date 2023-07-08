<template>
  <div class="option-info-container">
    <div class="input-title">옵션정보</div>
    <div class="option-border"></div>
    <div class="option-row">
      <div :style="{ flex: 1 }">
        <div class="info-title">요구 응답수</div>
        <div class="info-content">50명</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">소요시간</div>
        <div class="info-content">1-2분</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">마감기간 지정</div>
        <div class="info-content">00-00 00:00</div>
      </div>  
    </div>
    <div class="option-row">
      <div :style="{ flex: 1 }">
        <div class="info-title">설문 대상</div>
        <div class="info-content">없음</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">영어설문 여부</div>
        <div class="info-content">선택 안함</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">대학(원)생 할인</div>
        <div class="info-content">대학생</div>
      </div>  
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.option-info-container{
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px;
  padding: 20px;
  padding-left: 30px;
  background-color: #fafafa;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.option-row{
  display: flex;
  margin-top: 20px;
}
.input-title{
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
}
.info-title{
  text-align: left;
  margin-right: 30px;
  color: gray;
  font-size: 0.9rem;
  font-weight: 500;
}
.info-content{
  text-align: left;
  margin-right: 30px;
  margin-top: 10px;
  font-size: 1rem;
  color: #0CAE02;
  font-weight: 600;
}
</style>