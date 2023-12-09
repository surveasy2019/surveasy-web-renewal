<template>
  <div class="home-statics-container">
    <div class="home-title">
      숫자로 보는 서베이지
    </div>

    <div class="home-statics-item-container">
      <div class="statics-item">
        <span class="title-bold">{{ this.surveyCnt }}개</span>
        <span class="title-mid">설문수</span>
      </div>
      <div class="statics-item">
        <span class="title-bold">{{ this.panelCnt }}명</span>
        <span class="title-mid">패널수</span>
      </div>
      <div class="statics-item">
        <span class="title-bold">000점</span>
        <span class="title-mid">만족도</span>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
      return {
        surveyCnt : "-",
        panelCnt : "-"
      }
    },
    mounted(){
      this.querySurveyCnt()
    },
    methods : {
      async querySurveyCnt(){
        try{
          const response = await axios.get("https://gosurveasy.co.kr/survey/count")
          this.surveyCnt = response.data.surveyCount
          this.panelCnt = response.data.panelCount
        }catch(error) {
          console.log(error)
        }

      }
    }
}
</script>

<style>
.home-statics-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  margin-top: 35px;
}
.home-statics-item-container {
  background-color: #0AAB00;
  display: flex;
  height: 150px;
  flex-direction: row;
  justify-content: space-around;
}
.home-statics-item-container .statics-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-statics-container .home-title{
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
  text-align: left;
  margin-left: 15px;
}

.home-statics-container .title-bold{
  font-size: 25px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  color: white;
}

.home-statics-container .title-mid{
  font-size: 15px;
  margin-top: 10px;
  font-weight: 300;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>