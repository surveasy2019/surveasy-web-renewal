<template>
  <div class="service-active-container">
    
    <p class="p-black-bold">설문대상별 수집 가능한 <span class="p-green-bold">최대 응답 수</span></p>
      <div class="loading-contianer" v-if="this.loading">
        <p class="spinner-loading">
          <i class="fas fa-spinner"></i>
            불러오는 중 
        </p>
      </div>
      <div class="active-pannel-box-continer" v-if="!this.loading">
      <div class="table-container">
        <table class="active-table">
          <tr class="table-topline">
            <th class="table-topline" id="table-draw"></th>
            <th class="table-topline">성별무관</th>
            <th class="table-topline">남성</th>
            <th class="table-topline">여성</th>
          </tr>
          <tr>
            <td class="table-leftline">전연령</td>
            <td>{{ this.activePanel.totalList[0] }}명</td>
            <td>{{ this.activePanel.maleList[0] }}명</td>
            <td>{{ this.activePanel.femaleList[0] }}명</td>
          </tr>
          <tr>
            <td class="table-leftline">20대</td>
            <td>{{ this.activePanel.totalList[1] }}명</td>
            <td>{{ this.activePanel.maleList[1] }}명</td>
            <td>{{ this.activePanel.femaleList[1] }}명</td>
          </tr>
          <tr>
            <td class="table-leftline">20세 이상 24세 이하</td>
            <td>{{ this.activePanel.totalList[2] }}명</td>
            <td>{{ this.activePanel.maleList[2] }}명</td>
            <td>{{ this.activePanel.femaleList[2] }}명</td>
          </tr>
          <tr>
            <td class="table-leftline">25세 이상 29세 이하</td>
            <td>{{ this.activePanel.totalList[3] }}명</td>
            <td>{{ this.activePanel.maleList[3] }}명</td>
            <td>{{ this.activePanel.femaleList[3] }}명</td>
          </tr>
          <tr>
            <td class="table-leftline">20세 이상 39세 이하</td>
            <td>{{ this.activePanel.totalList[4] }}명</td>
            <td>{{ this.activePanel.maleList[4] }}명</td>
            <td>{{ this.activePanel.femaleList[4] }}명</td>
          </tr>
          <tr>
            <td class="table-leftline">20세 이상 49세 이하</td>
            <td>{{ this.activePanel.totalList[5] }}명</td>
            <td>{{ this.activePanel.maleList[5] }}명</td>
            <td>{{ this.activePanel.femaleList[5] }}명</td>
          </tr>
        
        </table>
      
      </div>  
    
      <div class="content-container">
        <p class="p-black-content">설문 대상의 연령과 성별에 따라 수집 가능한 최대 응답 수 입니다.</p>
        <p class="p-black-content">예를 들어, 20대 성별 무관 선택 시, 
        최대 {{ this.activePanel.totalList[1] }}명의 응답을 받으실 수 있어요!</p>
      </div>
    
      </div> 

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      show: false,
      loading : true,
      activePanel: {
        totalList : [],
        maleList : [],
        femaleList : []
      }
    }
  }, 
  mounted() {
    this.listActivePanel()
  },
  methods: {
    open() {
      this.show = !this.show
    },
    async listActivePanel() {
      try {
        const response = await axios.get("https://gosurveasy.co.kr/activepanel")
        this.loading = false
        this.activePanel = response.data
      } catch (error) {
        console.log(error)
      }
    }, 
  }
}
</script>

<style>
.service-active-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: space-around;
  margin-top: 5px;

}
.simple-active-container {
  background-color: #a5aba3;
  display: flex;
  height: 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.full-active-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: space-around;
}

.loading-container{
  padding-top: 50px;
  text-align: center;
  margin-top: 100px;
}
.loading-container .spinner-loading{
  width: auto;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.3rem;
  margin-top: 100px;
  
}


.active-pannel-box-continer{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin: auto;
  
}
.content-container{
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  
  margin-right: 50px;
  margin-top: 55px;
}

@media (max-width: 1000px) {
  .content-container{
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    margin-top: 20px;
  }
}

.table-container{
  margin-right: 0;
  width: 100%;
  
}

.active-table{
  margin-right: 0;
}

#table-draw{
  background: transparent url('~@/assets/service/draw.png') no-repeat padding-box;
}

#service-active-pannel .p-black-bold{
  margin-bottom: 40px;
  margin-top: 0px;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Noto Sans KR', sans-serif;
}
.p-green-bold{
  margin-top: 0;
  text-align: left;
  color: #0CAE02;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 30px;
  font-family: 'Noto Sans KR', sans-serif;
}

.p-black-content{
  text-align: left;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
}


.active-table{
  font-size: 0.8rem;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  background: #FFFFFF;
  border : #0000009C 0.5px solid;
  border-collapse: collapse;
}

.table-container .active-table th, .table-container .active-table td{
  border: #0000009C 0.5px solid;
  font-weight: 400;
  padding: 7px 30px;
}

.table-leftline{
  background: #0AAB0040;
  font-size: 1rem;
  font-weight: 600;
  padding: 7px 30px;
}

.table-topline{
  font-weight: 600;
  font-size: 1rem;

}


.home-title {
  margin: 0;
}</style>