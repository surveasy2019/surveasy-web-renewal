<template>
  <div class="service-option-container">
    <div class="option-container">
      <div class="option-left-content" :style="{ flex: 1 }">
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

      <div class="option-right-content" :style="{ flex: 1 }">
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
        <select class="option-select" id="target_age" v-model="targetAge">
          <option :value=0 selected disabled hidden>대상 연령</option>
          <option :value=1>연령 무관</option>
          <option :value=2>연령 옵션 선택하기</option>
        </select>
      </div>     
    </div>
    <div class="age-option-content" v-if="this.targetAge == 2">
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
    <div class="option-content-right">
      <div class="option-title">할인 금액</div>
      <div class="option-title-bold">9,000 원</div>
    </div>
    <div class="option-border"></div>
    <div class="option-content-right">
      <div class="option-title">결제 금액</div>
      <div class="option-title-green">9,000 원</div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      targetAge : 0
    }
  }
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
  border-radius: 10px;
}
.option-container{
  display: flex;
  flex-direction: row;
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
.age-option-content{
  display: flex;
  justify-content: left;
  width: 90%;
  border: solid 0.5px gray;
  padding: 10px;
  padding-right: 0;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.option-content-right{
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 7%;
}
.age-content{
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 400;
  color: #4b4b4b;
}
.option-select, .input-date, .input-time {
  font-family: 'Noto Sans KR', sans-serif;  
  width: 81%;
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 5px;
  font-weight: 300;
  background-color: #fafafa;
  font-size: 0.9rem;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
#identity{
  width: 93%;
}
.input-date, .input-time {
  font-family: 'Noto Sans KR', sans-serif;  
  width: 78%;
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 5px;
  font-weight: 300;
  background-color: #fafafa;
  font-size: 0.9rem;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.option-select:focus{
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

#checkbox-item-eng{
  font-family: 'Noto Sans KR', sans-serif;
  margin: 7px;
  padding-left: 3px;
  color: black;
  font-size: 0.9rem;
}

.option-title{
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  color: #6f6f6f;
}

.option-title-bold{
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 900;
  font-family: 'Noto Sans KR', sans-serif;
  color: #000000;
  margin-left: 10px;
}

.option-title-green{
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 900;
  font-family: 'Noto Sans KR', sans-serif;
  color: #458144;
  margin-left: 10px;
}

.option-border{
  border-top: solid 0.3px rgb(128, 128, 128);
  margin-top: 10px;
  margin-right: 7%;
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

.input-time:focus, .input-date:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
#none1, #none2 {
  color: transparent;
}
</style>