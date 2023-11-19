<template>
  <div class="list-list-container">
    <h2 @click="updateSurveyInfo(3)">설문 리스트</h2>

    <div class="list-list-item-container">
      <div class="list-list-item" v-for="item in surveyList" :key="item.sid">
        <div class="list-list-item-top-container">
          <span class="list-list-item-top">{{item.sid}}</span>
          <span class="list-list-item-top" v-if="item.isDone">완료</span>
          <span class="list-list-item-top" v-else-if="item.dday == 0">{{ item.dtime }}시간 남음</span>
          <span class="list-list-item-top" v-else>{{ item.dday }}일 남음</span>

        </div>
        <div class="list-list-item-title" v-if="item.isDone">{{ item.title }}</div>
        <div class="list-list-item-title" v-else><a :href=item.link target="_blank" class="list-link">{{ item.title }}</a></div>

        <div class="list-list-item-line"></div>

        <div class="list-list-item-bottom-container">
          <div class="list-list-item-bottom-item">
            <span class="list-list-item-option">설문 대상</span>
            <span>{{item.tarInput}}</span>
          </div>
          <div class="list-list-item-bottom-item">
            <span class="list-list-item-option">응답수</span>
            <span v-if="item.isDone">{{ this.requireHeadCountText[item.headCount] }}</span>
            <span v-else><span>{{ item.responseCount }}명 / </span><span>{{ this.requireHeadCountText[item.headCount] }}</span></span>
          </div>
          <div class="list-list-item-bottom-item">
            <span class="list-list-item-option">의뢰자</span>
            <span>{{ item.username.substring(0, item.username.length - 1) + "*" }} </span>
          </div>
        </div>
        
      </div>
    </div>
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      surveyList: [],
      requireHeadCountText: this.$store.state.tables.priceTextTable[0]
    }
    
  },
  mounted() {
    this.listSurveys()
  },  
  methods: {
    async listSurveys() {
      try {
        const response = await axios.get("http://3.39.170.7/survey/list")
        this.surveyList = response.data.surveyListItemVos
        console.log(this.surveyList)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style>
.list-list-container {
  width: 100%;
  justify-content: center;
  padding: 20px 0 30px 0;
}
.list-list-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 20px;
  justify-content: space-between
}
.list-list-item {
  width: 42%;
  margin-top: 15px;
  padding: 15px;
  border: solid 1px #0AAC00;
  border-radius: 10px;
}
.list-list-item-top-container {
  display: flex;
  margin-bottom: 10px;
}
.list-list-item-top {
  margin-right: 7px;
  padding: 5px;
  border-radius: 5px;
  background-color: #0AAC00;
  color: white;
  font-size: 12px;
}
.list-list-item-title {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: gray;
}
.list-list-item-line {
  width: 100%;
  height: 1px;
  margin: 5px 0 5px 0;
  background-color: rgb(210, 210, 210);
}
.list-list-item-bottom-container {
  margin-top: 10px;
}
.list-list-item-bottom-item {
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 13px;
}
.list-list-item-option {
  margin-right: 7px;
  padding: 4px;
  border: solid 1px #0AAC00;
  border-radius: 5px;
  text-align: left;
  color: #0AAC00;
  font-size: 12px;
}

.list-link {
  text-decoration: none;
  color: black;
}
</style>