<template>
  <div class="list-list-container">
    <h2>설문 리스트</h2>

    <div class="list-list-item-container">
      <div class="list-list-item" v-for="item in surveyList" :key="item.id">
        <div class="list-list-item-top-container">
          <span class="list-list-item-top">{{item.id}}</span>
          <span class="list-list-item-top" v-if="item.progress==2">진행중</span>
          <span class="list-list-item-top" v-if="item.progress>2">완료</span>
        </div>

        <div class="list-list-item-title">{{item.title}}</div>

        <div class="list-list-item-line"></div>

        <div class="list-list-item-bottom-container">
          <div class="list-list-item-bottom-item">
            <span class="list-list-item-option">설문 대상</span>
            <span>{{item.target}}</span>
          </div>
          <div class="list-list-item-bottom-item">
            <span class="list-list-item-option">응답수</span>
            <span>{{item.requiredHeadCount}}</span>
          </div>
          <div class="list-list-item-bottom-item">
            <span class="list-list-item-option">의뢰자</span>
            <span>{{item.user}}</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      surveyList: [ {id: 100, progress: 2, title: '메타버스에 대학생 인식 조사', target: '대학생', requiredHeadCount: 200, user: '김설문'},
                  {id: 101, progress: 2, title: '소비자의 온라인 금융서비스 경험 조사', target: '20대', requiredHeadCount: 100, user: '강설문'},
                  {id: 102, progress: 3, title: '대화 내용에 대한 감정평가 설문 대화 내용에 대한 감정평가 설문', target: '누구나', requiredHeadCount: 50, user: '이설문'},
                  {id: 103, progress: 2, title: '메타버스에 대학생 인식 조사', target: '대학생', requiredHeadCount: 200, user: '김설문'},
                  {id: 104, progress: 2, title: '소비자의 온라인 금융서비스 경험 조사', target: '20대', requiredHeadCount: 100, user: '강설문'},
                  {id: 105, progress: 3, title: '대화 내용에 대한 감정평가 설문 설문', target: '누구나', requiredHeadCount: 50, user: '이설문'} 
                ]
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
</style>