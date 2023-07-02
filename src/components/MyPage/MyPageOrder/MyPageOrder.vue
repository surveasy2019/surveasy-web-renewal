<template>
  <div class="mypage-order-container">
    <h2>주문 내역</h2>

    <div class="mypage-order-item-container">
      <div class="mypage-order-item" v-for="item in surveyList" :key="item.id">
        <div class="mypage-order-item-title">{{item.title}}</div>

        <div class="mypage-order-top-container">
          <span class="mypage-order-item-top">{{item.price}}원</span>  
        </div>

        <div class="mypage-order-line"></div>

        <div class="mypage-order-middle-container">
          <div class="mypage-order-middle-container-col">
            <div class="mypage-order-middle-item">
              <span class="mypage-order-middle-item-option">진행 단계</span>
              <span v-if="item.progress<2">검수중</span>
              <span v-else-if="item.progress==2">설문 진행중</span>
              <span v-else>패널 응답 완료</span>
            </div>
            <div class="mypage-order-middle-item">
              <span class="mypage-order-middle-item-option">답변 수</span>
              <span v-if="item.progress==2">n / {{item.requiredHeadCount}}명</span>
              <span v-else>{{item.requiredHeadCount}}명</span>
            </div>
          </div>

          <div class="mypage-order-middle-container-col">
            <div class="mypage-order-middle-item">
              <span class="mypage-order-middle-item-option">주문 날짜</span>
              <span>{{item.date}}</span>
            </div>
            <div class="mypage-order-middle-item">
              <span class="mypage-order-middle-item-option">설문 기한</span>
              <span>{{item.dueDate}}</span>
            </div>
          </div>
        </div>    

        <div class="mypage-order-bottom-container">
          <div class="mypage-order-bottom-container-item" v-if="item.progress<2">
            <router-link to="/"><img id="mypage-img-edit" width=20 src="@/assets/mypage/edit_icon.png"></router-link>
            <a><img id="mypage-img-delete" width=24 src="@/assets/mypage/delete_icon.png"></a>
          </div>
          <div class="mypage-order-bottom-container-item" v-else-if="item.progress>2">
            <router-link class="mypage-order-btn-review" to="/mypage/review">후기 작성하기 〉</router-link>
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
      surveyList: [ {id: 100, progress: 2, price: 20000, title: '메타버스에 대학생 인식 조사', date: '2022-11-10', dueDate: '2022-12-10', requiredHeadCount: 200},
                  {id: 101, progress: 1, price: 30000, title: '소비자의 온라인 금융서비스 경험 조사', date: '2022-11-10', dueDate: '2022-12-10', requiredHeadCount: 100, user: '강설문'},
                  {id: 102, progress: 3, price: 12000, title: '대화 내용에 대한 감정평가 설문 대화 내용에 대한 감정평가 설문 대화 내용에 대한 감정평가 설문', date: '2022-11-10', dueDate: '2022-12-10', requiredHeadCount: 50},
                  {id: 103, progress: 4, price: 7000, title: '메타버스에 대학생 인식 조사', target: '대학생', dueDate: '2022-12-10', requiredHeadCount: 200},
                  {id: 104, progress: 2, price: 199000, title: '소비자의 온라인 금융서비스 경험 조사', date: '2022-11-10', dueDate: '2022-12-10', requiredHeadCount: 100},
                  {id: 105, progress: 3, price: 26000, title: '대화 내용에 대한 감정평가 설문 설문', date: '2022-11-10', dueDate: '2022-12-10', requiredHeadCount: 50} 
                ]
    }
    
  }
}
</script>

<style>
.mypage-order-container {
  width: 100%;
  justify-content: center;
  padding: 20px 0 30px 0;
}
.mypage-order-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 20px;
  justify-content: space-between
}
.mypage-order-item {
  width: 100%;
  margin-top: 15px;
  padding: 15px;
  border: solid 1px #0AAC00;
  border-radius: 10px;
}
.mypage-order-top-container {
  display: flex;
  justify-content: right;
  margin: 10px 0 10px 0;
}
.mypage-order-item-top {
  margin-right: 7px;
  padding: 5px;
  border-radius: 5px;
  background-color: #0AAC00;
  color: white;
  font-size: 12px;
}
.mypage-order-item-title {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
}
.mypage-order-line {
  width: 100%;
  height: 1px;
  margin: 5px 0 5px 0;
  background-color: rgb(210, 210, 210);
}
.mypage-order-middle-container {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.mypage-order-middle-container-col {
  width: 50%;
}
.mypage-order-middle-item {
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 13px;
}
.mypage-order-middle-item-option {
  margin-right: 7px;
  padding: 4px;
  border: solid 1px #0AAC00;
  border-radius: 5px;
  text-align: left;
  color: #0AAC00;
  font-size: 12px;
}
.mypage-order-bottom-container {
  display: flex;
  justify-content: right;
  margin: 15px 0 0px 0;
}
.mypage-order-bottom-container-item {
  display: flex;
  justify-content: center;
}
.mypage-order-bottom-container-item a {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.mypage-order-btn-review {
  background: none;
  border: none;
  text-decoration: none;
  color: #0AAC00;
  font-size: 14px;
  cursor: pointer;
}
.mypage-order-btn-review:hover {
  font-weight: bold;
}
#mypage-img-edit {
  margin: 5px 10px 0 0;
}
</style>