<template>
  <div class="service-option-container">
    <div class="home-title">
        설문응답서비스
    </div>
    <div class="option-container">
      <div class="option-left-content">
        <p class="option-title">요구 응답수</p>
        <select class="option-select">
          <option :value=0 selected disabled hidden>요구 응답수</option>
          <option :value=1>30명</option>
          <option :value=2>40명</option>
          <option :value=3>50명</option>
          <option :value=4>60명</option>
          <option :value=5>70명</option>
          <option :value=6>80명</option>
          <option :value=7>90명</option>
          <option :value=8>100명</option>
          <option :value=9>120명</option>
          <option :value=10>140명</option>
          <option :value=11>160명</option>
          <option :value=12>180명</option>
          <option :value=13>200명 (최대 응답수)</option>
        </select>
        <p class="option-title">마감기간 지정</p>
        <div class="timedate-option-select">
          <input type="Date" class="input-date"> 
        </div>
        <p class="option-title">설문 대상</p>
        <select class="option-select" id="target-gender" >
          <option :value=0 selected disabled hidden>대상 성별</option>
          <option :value=1>성별 무관</option>
          <option :value=2>남성</option>
          <option :value=3>여성</option>
        </select>
      </div>

      <div class="option-right-content">
        <p class="option-title">소요 시간</p>
        <select class="option-select">
          <option :value=0 selected disabled hidden>소요 시간</option>
          <option :value=2>1-3분</option>
          <option :value=1>1분 이내</option>
          <option :value=4>7-10분</option>
          <option :value=3>4-6분</option>
          <option :value=6>16-20분</option>
          <option :value=5>11-15분</option>
        </select>
        <p class="option-title" id="none1">a</p>
        <div class="timedate-option-select">
          <input type="time" class="input-time"> 
        </div>
        <p class="option-title" id="none2">a</p>
        <select class="option-select" id="target_age" >
          <option :value=0 selected disabled hidden>대상 연령</option>
          <option :value=1>연령 무관</option>
          <option :value=2>연령 옵션 선택하기</option>
        </select>
      </div>     
    </div>
    <div class="option-content-center">
      <div class="center-top">
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="20-24세"> 
          <div id="checkbox-text">20-24세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="25-29세"> 
          <div id="checkbox-text">25-29세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="30-34세"> 
          <div id="checkbox-text">30-34세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="35-39세"> 
          <div id="checkbox-text">35-39세</div>
        </div>
      </div>
      <div class="center-bottom">
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="40-44세"> 
          <div id="checkbox-text">40-44세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="45-49세"> 
          <div id="checkbox-text">45-49세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="50대"> 
          <div id="checkbox-text">50대</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="60대"> 
          <div id="checkbox-text">60대</div>
        </div>
      </div>
    </div>
    <div class="option-content-left">
      <p class="option-title">영어설문</p>
      <div id="checkbox-item-eng"> 
        <input class="form-check-input" v-model="addENTarget" @click="EngOptionCal" type="checkbox" name="Eng" id="Eng">
        <label id="checkbox-text-eng" for="Eng">영어설문</label>
      </div>
    </div>
    <div class="option-content-right">
      <div class="option-title">주문 금액</div>
      <div class="option-title-bold">9,000 원</div>
    </div>
    <div class="option-border"></div>

    <div class="option-content-left">
      <p class="option-title">대학생 / 대학원생 할인 여부</p>
      <select class="option-select" id="identity">
        <option :value=0 selected disabled hidden>대학생 / 대학원생 할인 여부</option>
        <option :value=1>중/고등학생입니다.</option>
        <option :value=2>대학생입니다.</option>
        <option :value=3>대학원생입니다.</option>
        <option :value=4>할인대상이 아닙니다.</option>
      </select>
    </div>
    <div class="option-border"></div>
    <div class="option-content-right">
      <div class="option-title">할인 금액</div>
      <div class="option-title-bold">9,000 원</div>
    </div>
    <div class="option-border"></div>
    <div class="option-content-right">
      <div class="option-title">결제 금액</div>
      <div class="option-title-green">9,000 원</div>
    </div>

    <button class="goServicePay-btn">설문 정보 입력하러 가기</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.service-option-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 90%;
  margin-top: 30px;
  margin: auto;
  border-radius: 10px;
  background-color: #ecefeb;
  border-radius: 10px;
}
.option-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.option-left-content{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.option-right-content{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.option-content-left{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.option-content-center .center-top, .center-bottom{
  display: flex;
  flex-direction: row;
}
.option-content-center{
  margin: auto;
  border: solid 0.5px gray;
  padding: 10px;
  border-radius: 10px;
}
.option-content-right{
  display: flex;
  flex-direction: row;
  justify-content: right;
}
.age-content{
  display: flex;
  flex-direction: row;
}
.selectbox {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  
  padding-left: 5px;
  width: 160px;
  height: 30px;
  background-color: #fafafa;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
}
.selectbox:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.selectbox-target {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  margin: 4px;
  padding-left: 3px;
  height: 30px;
  background-color: #fafafa;
  font-size: 14px;
  cursor: pointer;
  border: none;
}

.content-row{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.option-title{
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  color: #000000;
}

.option-title-bold{
  margin-top: 10px;
  font-size: 15px;
  font-weight: 900;
  font-family: 'Noto Sans KR', sans-serif;
  color: #000000;
}

.option-title-green{
  margin-top: 10px;
  font-size: 15px;
  font-weight: 900;
  font-family: 'Noto Sans KR', sans-serif;
  color: #458144;
}

.option-border{
  border-top: solid 0.5px black;
  margin-top: 10px;
}

.warn-msg{
  color: rgba(219, 21, 21, 0.822);
  font-weight: 300;
  font-size: 0.7rem;
  text-align: left;
  margin-left: 130px;
  margin-top: 0;
  margin-bottom: 0;
}
.content-row .input-date {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  background-color: #fafafa;
  width: 135px;
  height: 22px;
  margin-left: 6px;
  margin-right: 3px;
  margin-bottom: 6px;
  border: none;
}
.content-row .input-date:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.content-row .input-time {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  background-color: #fafafa;
  width: 105px;
  height: 22px;
  border: none;
}
.content-row .input-time:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.goServicePay-btn {
  padding: 5px 70px;
  margin-top: 20px;
  color:#0CAE02;
  background-color: #EEEEEE;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.goServicePay-btn:hover{
  color: white;
  background: #0AAB00;
}
#none1, #none2 {
  color: transparent;
}
</style>