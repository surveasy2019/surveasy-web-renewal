<template>
  <div class="service-option-container">
    <div class="option-container">
      <div class="option-left-content" :style="{ flex: 1 }">
        <p class="option-title">요구 응답수</p>
        <select class="option-select" v-model="this.headCount">
          <option :value="String('HEAD')" selected disabled hidden>요구 응답수</option>
          <option :value="String('HEAD_30')">30명</option>
          <option :value="String('HEAD_40')">40명</option>
          <option :value="String('HEAD_50')">50명</option>
          <option :value="String('HEAD_60')">60명</option>
          <option :value="String('HEAD_70')">70명</option>
          <option :value="String('HEAD_80')">80명</option>
          <option :value="String('HEAD_90')">90명</option>
          <option :value="String('HEAD_100')">100명</option>
          <option :value="String('HEAD_120')">120명</option>
          <option :value="String('HEAD_140')">140명</option>
          <option :value="String('HEAD_160')">160명</option>
          <option :value="String('HEAD_180')">180명</option>
          <option :value="String('HEAD_200')">200명 (최대 응답수)</option>
        </select>
        <p class="option-title">마감기간 지정</p>
        <div class="timedate-option-select">
          <input type="Date" class="input-date" v-model="this.endDate" :min="this.getDateStr_min" :max="this.getDateStr_max" required> 
        </div>
        <p class="option-title">설문 대상</p>
        <select class="option-select" id="target-gender" v-model="this.targetGender">
          <option :value="String('GENDER')" selected disabled hidden>대상 성별</option>
          <option :value="String('ALL')">성별 무관</option>
          <option :value="String('MALE')">남성</option>
          <option :value="String('FEMALE')">여성</option>
        </select>
      </div>

      <div class="option-right-content" :style="{ flex: 1 }">
        <p class="option-title">소요 시간</p>
        <select class="option-select" v-model="this.spendTime">
          <option :value="String('TIME')" selected disabled hidden>소요 시간</option>
          <option :value="String('TIME_0')">1분 이내</option>
          <option :value="String('TIME_1_3')">1-3분</option>
          <option :value="String('TIME_4_6')">4-6분</option>
          <option :value="String('TIME_7_10')">7-10분</option>
          <option :value="String('TIME_11_15')">11-15분</option>
          <option :value="String('TIME_16_20')">16-20분</option>
        </select>
        <p class="option-title" id="none1">a</p>
        <select class="option-select" v-model="this.endTime">
          <option :value="String('00:00')" selected disabled hidden>마감 시간</option>
          <option :value="String('08:00')">08 : 00</option>
          <option :value="String('09:00')">09 : 00</option>
          <option :value="String('10:00')">10 : 00</option>
          <option :value="String('11:00')">11 : 00</option>
          <option :value="String('12:00')">12 : 00</option>
          <option :value="String('13:00')">13 : 00</option>
          <option :value="String('14:00')">14 : 00</option>
          <option :value="String('15:00')">15 : 00</option>
          <option :value="String('16:00')">16 : 00</option>
          <option :value="String('17:00')">17 : 00</option>
          <option :value="String('18:00')">18 : 00</option>
          <option :value="String('19:00')">19 : 00</option>
          <option :value="String('20:00')">20 : 00</option>
          <option :value="String('21:00')">21 : 00</option>
          <option :value="String('22:00')">22 : 00</option>
          <option :value="String('23:00')">23 : 00</option>
          <option :value="String('23:59')">23 : 59</option>
        </select>
        <p class="option-title" id="none2">a</p>
        <select class="option-select" id="target_age" v-model="this.targetAge">
          <option :value="String('AGE')" selected disabled hidden>대상 연령</option>
          <option :value="String('ALL')">연령 무관</option>
          <option :value="String('TARGET_AGE')">연령 옵션 선택하기</option>
        </select>
      </div>     
    </div>
    <div class="age-option-content" v-if="this.targetAge==String('TARGET_AGE')">
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_20_24')"> 
          <div id="checkbox-text">20-24세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_25_29')"> 
          <div id="checkbox-text">25-29세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_30_34')"> 
          <div id="checkbox-text">30-34세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_35_39')"> 
          <div id="checkbox-text">35-39세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_40_44')"> 
          <div id="checkbox-text">40-44세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_45_49')"> 
          <div id="checkbox-text">45-49세</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_50_59')"> 
          <div id="checkbox-text">50대</div>
        </div>
        <div class="age-content">
          <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" :value="String('AGE_60_69')"> 
          <div id="checkbox-text">60대</div>
        </div>
    </div>
    <div class="option-content-left">
      <p class="option-title">영어설문</p>
      <div id="checkbox-item-eng"> 
        <input class="form-check-input" v-model="enTarget" type="checkbox" name="Eng" id="Eng">
        <label id="checkbox-text-eng" for="Eng">{{ this.changeEngText }}</label>
      </div>
    </div>
    <div class="option-content-right">
      <div class="option-title">주문 금액</div>
      <div class="option-title-bold">{{ priceToString(this.calOrderPrice) }} 원</div>
    </div>
    <div class="option-border"></div>

    <div class="option-content-left">
      <p class="option-title">대학생 / 대학원생 할인 여부</p>
      <select class="option-select" id="identity" v-model="this.identity">
        <option :value="String('IDENTITY')" selected disabled hidden>대학생 / 대학원생 할인 여부</option>
        <option :value="String('MID_HIGH')">중/고등학생입니다.</option>
        <option :value="String('UNDERGRADUATE')">대학생입니다.</option>
        <option :value="String('GRADUATE')">대학원생입니다.</option>
        <option :value="String('NONE')">할인대상이 아닙니다.</option>
      </select>
    </div>
    <div class="option-content-right">
      <div class="option-title">할인 금액</div>
      <div class="option-title-bold">{{ priceToString(this.calOrderPrice - this.calculate) }}</div>
    </div>
    <div class="option-border"></div>
    <div class="option-content-right">
      <div class="option-title">결제 금액</div>
      <div class="option-title-green">{{ priceToString(this.calculate) }}</div>
    </div>

    <div><button class="goServicePay-btn" @click="nextPage">설문 정보 입력하러 가기</button></div>

  </div>
</template>

<script>
import store from '@/store'
export default {
  data(){
    return{
      engText : "영어 설문이 아닙니다.",
      orderPrice : 9000,
      targetAge : "AGE",
      headCount : "HEAD",
      spendTime : "TIME",
      endDate : '12:00:00',
      endTime : '00:00',
      endStamp : this.endDate+' '+this.endTime,
      nowDate : new Date(),

      targetGender : "GENDER",
      identity : "IDENTITY",
      enTarget : 0,
      language: "",

      targetAgeOptionList : [],

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
      TimeOptionArray: [0, 12000, 10000, 8000, 3000, 0, 0]
    }
  },
  computed : {
    getDateStr_min() {
      var today = new Date()
      var todayPlus9 = today.setHours(today.getHours() + 9)
      var todayPlus9Date = new Date(todayPlus9)
      var min = todayPlus9Date.toISOString()
      var tmp1 = min.split('T')
      var tmp2 = tmp1[0]
      var dddddd = tmp2.split('-')

      var year = dddddd[0]
      var month = dddddd[1]
      var day = dddddd[2]

      month = month.length == 2 ? month : '0' + month
      day = day.length == 2 ? day : '0' + day
      var date = year + '-' + month + '-' + day
      return date
    },

    getDateStr_max() {
      var today = new Date()
      var maxD = new Date(today.setDate(today.getDate() + 7))
      var tmp = maxD.setHours(maxD.getHours() + 9)
      var maxT = new Date(tmp)

      var max = maxT.toISOString()
      var split = max.split('T')[0]
      var fullDate = split.split('-')

      var year = fullDate[0]
      var month = fullDate[1]
      var day = fullDate[2]

      month = month.length == 2 ? month : '0' + month
      day = day.length == 2 ? day : '0' + day

      var date = year + '-' + month + '-' + day
      return date
    },

    getTimeStr() {
      var time = new Date()
      var utc = time.getTime() + (time.getTimezoneOffset() * 60 * 1000)
      var kr_diff = 9 * 60 * 60 * 1000
      var krr = new Date(utc + (kr_diff))
      var now = krr.toString().substring(16, 21)
      // console.log(now);
      return now
    },

    timeOptionCal() {
      var endDateTime = this.endDate + ' ' + this.endTime
      var tmp = new Date(endDateTime).getTime()
      var hourGap = parseInt((tmp - this.nowDate.getTime()) / 3600000)
      var hourOptionIndex = 0

      if (hourGap >= 18 && hourGap < 24) hourOptionIndex = 1
      else if (hourGap >= 24 && hourGap < 36) hourOptionIndex = 2
      else if (hourGap >= 36 && hourGap < 48) hourOptionIndex = 3
      else if (hourGap >= 48 && hourGap < 72) hourOptionIndex = 4
      else if (hourGap >= 72) hourOptionIndex = 5
      else if (hourGap < 18) hourOptionIndex = 6

      return hourOptionIndex
    },

    engOptionCal() {
      let idx = 0

      if (!this.enTarget) idx = 0
      else if ((store.state.maps.headCountMap[this.headCount] <= 3) && this.enTarget) idx = 1
      else if ((store.state.maps.headCountMap[this.headCount] > 3) && this.enTarget) idx = 2
      return idx
    },

    changeEngText(){
      let idx = this.engOptionCal
      if(idx == 0) return "영어 설문이 아닙니다."
      else return "영어 설문입니다."
      
    },

    calOrderPrice() {
      var spendTimeIdx = store.state.maps.spendTimeMap[this.spendTime]
      var headCountIdx = store.state.maps.headCountMap[this.headCount]
      var targetGenderIdx = store.state.maps.targetGenderMap[this.targetGender]

      console.log(this.spendTime + " " + this.headCount + " " + this.targetGender)
      console.log(spendTimeIdx + " " + headCountIdx + " " + targetGenderIdx)

      var p = Math.ceil(parseFloat(parseFloat(this.priceTable[spendTimeIdx][headCountIdx])
        * parseFloat(this.EngOptionArray[this.engOptionCal])
        * parseFloat(this.AgeOptionArray[this.targetAgeOptionList.length])
        * parseFloat(this.genderOptionArray[targetGenderIdx])
        + parseFloat(this.TimeOptionArray[this.timeOptionCal])
      ).toFixed(0) / 10) * 10
      this.orderPrice = p
      return p
    },

    calculate() {
      var spendTimeIdx = store.state.maps.spendTimeMap[this.spendTime]
      var headCountIdx = store.state.maps.headCountMap[this.headCount]
      var targetGenderIdx = store.state.maps.targetGenderMap[this.targetGender]
      var identityIdx = store.state.maps.identityMap[this.identity]

      var p = Math.ceil(parseFloat(parseFloat(this.priceTable[spendTimeIdx][headCountIdx])
        * parseFloat(this.IdentityOptionArray[identityIdx])
        * parseFloat(this.EngOptionArray[this.engOptionCal])
        * parseFloat(this.AgeOptionArray[this.targetAgeOptionList.length])
        * parseFloat(this.genderOptionArray[targetGenderIdx])
        + parseFloat(this.TimeOptionArray[this.timeOptionCal])
      ).toFixed(0) / 10) * 10

      this.price = p
      return p
    }
  },
  methods : {
    nextPage() {
      if (this.id == 0 || this.endTime == '00:00' || this.spendTime == "TIME" || this.headCount == "HEAD" || this.timeOptionCal == 0 || this.targetAge == "AGE" || this.targetGender == "GENDER" || this.identity == "IDENTITY"){
        alert("모든 옵션을 입력해주세요.")
      } else if(this.timeOptionCal == 6) {
        alert("마감 기한은 최소 18시간 이상부터 선택 가능합니다.")
      } else if (!this.$store.state.isLoggedIn) {
        if(confirm("로그인이 필요합니다.")){
          this.$router.push("/login")
        }
      } else {
        this.saveOptions()
        this.$router.push("/service/inputform")
      }
      
    },

    saveOptions(){
      if(this.targetAge == "ALL") this.targetAgeOptionList = ["ALL"]
      // 여기 headCount 등이 왜 string 으로 받아와지는지?
      store.commit('saveSurveyOption', {
        headCount : this.headCount,
        spendTime: this.spendTime,
        endDate: this.endDate,
        endTime: this.endTime,
        targetGender: this.targetGender,
        targetAge: this.targetAgeOptionList,
        targetEng: this.engOptionCal,
        identity: this.identity,
        price: this.price,
        priceDiscounted : (this.orderPrice - this.price)
      })
    },
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

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