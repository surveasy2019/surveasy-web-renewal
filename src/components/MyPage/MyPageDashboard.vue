<template>
  <div class="mypage-dashboard-container">
    <div class="mypage-dashboard-container-item">
      <p>진행중인 설문</p>
      <h2>{{ this.surveyOngoing }}개</h2>
    </div>
    <div class="mypage-dashboard-container-line"></div>
    <div class="mypage-dashboard-container-item">
      <p>완료된 설문</p>
      <h2>{{ this.surveyDone }}개</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MyPageDashboard',
  data() {
    return {
      surveyOngoing : 0,
      surveyDone : 0
    }
  },

  mounted(){
    this.fetchDashBoard()
  },

  methods : {
    async fetchDashBoard(){
      try {
        const response = await axios.post("https://gosurveasy.co.kr/survey/mypage",
        {
          email : this.$store.state.currentUser.email
        })
        this.surveyOngoing = response.data.surveyOngoing
        this.surveyDone = response.data.surveyDone
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.mypage-dashboard-container {
  display: flex;
  flex-direction: row;
  width: 75%;
  margin: 40px auto;
  align-items: center;
  background-color: #0AAC00;
  color: white;
  border-radius: 10px;
}
.mypage-dashboard-container-item {
  margin: auto;
  padding: 10px;
}
.mypage-dashboard-container-item h2 {
  font-weight: 700;
}
.mypage-dashboard-container-line {
  width: 1px;
  height: 70px;
  background-color: white;
}
</style>