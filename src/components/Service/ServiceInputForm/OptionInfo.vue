<template>
  <div class="option-info-container">
    <div class="input-title">옵션정보</div>
    <div class="option-border"></div>
    <div class="option-row">
      <div :style="{ flex: 1 }">
        <div class="info-title">요구 응답수</div>
        <div class="info-content">{{ this.headCount }}</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">소요시간</div>
        <div class="info-content">{{ this.spendTime }}</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">마감기간 지정</div>
        <div class="info-content">{{ this.endDate }}</div>
      </div>  
    </div>
    <div class="option-row">
      <div :style="{ flex: 1 }">
        <div class="info-title">설문 대상</div>
        <div class="info-content">{{ this.target }}</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">영어설문 여부</div>
        <div class="info-content">{{ this.targetEng }}</div>
      </div>
      <div :style="{ flex: 1 }">
        <div class="info-title">대학(원)생 할인</div>
        <div class="info-content">{{ this.identity }}</div>
      </div>  
    </div>
    
  </div>
</template>

<script>
import store from '@/store';
export default {
  data(){
    return{
      headCount : '',
      spendTime : '',
      endDate : '',
      target : '',
      targetEng : '',
      identity : ''
      
    }
  },

  mounted(){
    this.getOptions()
  },

  methods : {
    getOptions(){
      const info = store.state.surveyOption
      const table = store.state.tables
      this.headCount = table.priceTextTable[0][info.headCount]
      this.spendTime = table.priceTextTable[1][info.spendTime]
      this.endDate = info.endDate + " " + info.endTime
      this.target = table.targetingTable[1][info.tarGender]+", "+ this.getAgeTarget()
      this.targetEng = table.priceTextTable[3][info.english]
      this.identity = table.priceTextTable[4][info.priceIdentity]
    },

    getAgeTarget(){
      let age = ""
      const info = store.state.surveyOption
      const table = store.state.tables
      for(let i in info.tarAge){
        age += table.targetingTable[2][info.tarAge[i]] + " "
      }
      

      return age
    }
  }

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