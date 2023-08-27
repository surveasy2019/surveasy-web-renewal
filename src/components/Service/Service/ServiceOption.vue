<template>
  <div class="service-option-container">
    <div class="option-container">
      <div class="option-left-content" :style="{ flex: 1 }">
        <p class="option-title">요구 응답수</p>
        <select class="option-select" v-model="this.headCount">
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
          <input type="Date" class="input-date" v-model="this.endDate"> 
        </div>
        <p class="option-title">설문 대상</p>
        <select class="option-select" id="target-gender" v-model="this.targetGender">
          <option :value=0 selected disabled hidden>대상 성별</option>
          <option :value=1>성별 무관</option>
          <option :value=2>남성</option>
          <option :value=3>여성</option>
        </select>
      </div>

      <div class="option-right-content" :style="{ flex: 1 }">
        <p class="option-title">소요 시간</p>
        <select class="option-select" v-model="this.spendTime">
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
          <input type="time" class="input-time" v-model="this.endTime"> 
        </div>
        <p class="option-title" id="none2">a</p>
        <select class="option-select" id="target_age" v-model="this.targetAge">
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
        <input class="form-check-input" v-model="enTarget" @click="EngOptionCal" type="checkbox" name="Eng" id="Eng">
        <label id="checkbox-text-eng" for="Eng">영어설문</label>
      </div>
    </div>
    <div class="option-content-right">
      <div class="option-title">주문 금액</div>
      <div class="option-title-bold">{{ this.calOrderPrice }} 원</div>
    </div>
    <div class="option-border"></div>

    <div class="option-content-left">
      <p class="option-title">대학생 / 대학원생 할인 여부</p>
      <select class="option-select" id="identity" v-model="this.identity">
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

    <div><button class="goServicePay-btn" @click="nextPage">설문 정보 입력하러 가기</button></div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      orderPrice : 9000,
      targetAge : 0,
      headCount : 0,
      spendTime : 0,
      endDate : '',
      endTime : '',
      targetGender : 0,
      identity : 0,
      enTarget : 0,

      targetAgeOption : 0,
      targetAgeOptionList : [],
      targetGenderOption : 0,

      price : 0,

      priceTable:
        [[9000, 9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 36000, 42000, 48000, 54000, 60000],
        [9000, 9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 36000, 42000, 48000, 54000, 60000],
        [27000, 27000, 36000, 45000, 54000, 63000, 72000, 81000, 90000, 108000, 126000, 144000, 162000, 180000],
        [54000, 54000, 72000, 90000, 108000, 126000, 144000, 162000, 180000, 216000, 252000, 288000, 324000, 360000],
        [90000, 90000, 120000, 150000, 180000, 210000, 240000, 270000, 300000, 360000, 420000, 480000, 540000, 600000],
        [135000, 135000, 180000, 225000, 270000, 315000, 360000, 405000, 450000, 540000, 630000, 720000, 810000, 900000],
        [180000, 180000, 240000, 300000, 360000, 420000, 480000, 540000, 600000, 720000, 840000, 960000, 1080000, 1200000]],
      IdentityOptionArray: [0.6, 0.6, 0.6, 0.8, 1.0],
      EngOptionArray: [1.0, 1.8, 2.2],
      AgeOptionArray: [1.0, 2.0, 1.875, 1.75, 1.625, 1.5, 1.375, 1.25, 1.125],
      genderOptionArray: [1.0, 1.0, 1.4, 1.4],
      TimeOptionArray: [0, 12000, 10000, 8000, 3000, 0, 0],
      priceTextTable: [
        ['', '30명', '40명', '50명', '60명', '70명', '80명', '90명', '100명', '120명', '140명', '160명', '180명', '200명'],
        ['', '1분 이내', '1~3분', '4~6분', '7~10분', '11~15분', '16~20분'],
        ['', '18~24시간', '24~36시간', '36~48시간', '48~72시간', '72시간~168시간'],
        ['선택 안함', '영어 설문 (50명 이하)', '영어 설문 (50명 초과)'],
        ['', '중/고등학생 할인', '대학생 할인', '대학원생 할인', '할인 대상이 아닙니다.'],
      ],
      targetingTable: [
        ["", "연령 무관", "연령 옵션 선택"],
        ['', '성별 무관', '남성', '여성'],
        ['', '전 연령', '20대 (1994~2003년생)', '20세 이상 24세 이하', '25세 이상 29세 이하', '20세 이상 39세 이하', '20세 이상 49세 이하'],
      ],
    }
  },
  computed : {
    calOrderPrice() {
      var p = Math.ceil(parseFloat(parseFloat(this.priceTable[this.spendTime][this.headCount])
        // * parseFloat(this.$store.state.IdentityOptionArray[this.priceIdentity])
        * parseFloat(this.EngOptionArray[this.enTarget])
        * parseFloat(this.AgeOptionArray[this.targetAgeOptionList.length])
        * parseFloat(this.genderOptionArray[this.targetGenderOption])
        //+ parseFloat(this.$store.state.TimeOptionArray[this.timeOptionCal])
      ).toFixed(0) / 10) * 10

      //this.orderPrice = p
      return p
    },

    calculate() {
      var p = Math.ceil(parseFloat(parseFloat(this.priceTable[this.spendTime][this.headCount])
        * parseFloat(this.IdentityOptionArray[this.identity])
        * parseFloat(this.EngOptionArray[this.enTarget])
        * parseFloat(this.AgeOptionArray[this.targetAgeOptionList.length])
        * parseFloat(this.genderOptionArray[this.targetGenderOption])
        //+ parseFloat(this.TimeOptionArray[this.timeOptionCal])
      ).toFixed(0) / 10) * 10

      //this.price = p
      return p
    }
  },
  methods : {
    nextPage() {
      console.log(this.endDate, this.endTime)
      //this.$router.push("/service/inputform")
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