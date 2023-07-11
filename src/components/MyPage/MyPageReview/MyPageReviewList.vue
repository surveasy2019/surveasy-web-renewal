<template>
  <div class="mypage-review-list-container">
    <div class="mypage-review-list-title-container">
      <div>리뷰 작성</div>
    </div>

    <div class="mypage-review-list-item-container">
      <div class="mypage-review-list-item" v-for="item in surveyList" :key="item.id">
        <div class="mypage-review-list-item-title">{{item.title}}</div>

        <!-- <div class="mypage-review-list-top-container">
          <span class="mypage-review-list-item-top">{{item.price}}원</span>  
        </div> -->

        <div class="mypage-review-list-line"></div>

        <div class="mypage-review-list-middle-container">
          <div class="mypage-review-list-middle-container-col">
            <div class="mypage-review-list-middle-item">
              <span class="mypage-review-list-middle-item-option">진행 단계</span>
              <span v-if="item.progress<2">검수중</span>
              <span v-else-if="item.progress==2">설문 진행중</span>
              <span v-else>패널 응답 완료</span>
            </div>
            <div class="mypage-review-list-middle-item">
              <span class="mypage-review-list-middle-item-option">답변 수</span>
              <span v-if="item.progress==2">n / {{item.requiredHeadCount}}명</span>
              <span v-else>{{item.requiredHeadCount}}명</span>
            </div>
          </div>

          <div class="mypage-review-list-middle-container-col">
            <div class="mypage-review-list-middle-item">
              <span class="mypage-review-list-middle-item-option">주문 날짜</span>
              <span>{{item.date}}</span>
            </div>
            <div class="mypage-review-list-middle-item">
              <span class="mypage-review-list-middle-item-option">설문 기한</span>
              <span>{{item.dueDate}}</span>
            </div>
          </div>
        </div>    

        <div class="mypage-review-list-bottom-container">
          <div class="mypage-review-list-bottom-container-item">
            <router-link class="mypage-review-list-btn-review" to="/mypage/review">후기 작성하기 〉</router-link>
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
.mypage-review-list-container {
  width: 100%;
  justify-content: center;
  padding-top: 50px;
}
.mypage-review-list-title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px 0 50px;
  color: #0AAB00;
  font-size: 19px;
  font-weight: bold;
}
.mypage-review-list-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 17px 50px 20px 50px;
  justify-content: space-between
}
.mypage-review-list-item {
  width: 100%;
  margin-bottom: 25px;
  padding: 30px 20px 20px 20px;
  border: solid 1px #0AAC00;
  border-radius: 10px;
}
.mypage-review-list-top-container {
  display: flex;
  justify-content: right;
  margin: 10px 0 10px 0;
}
.mypage-review-list-item-top {
  margin-right: 7px;
  padding: 5px;
  border-radius: 5px;
  color: #0AAC00;
  font-size: 16px;
  font-weight: bolder;
}
.mypage-review-list-item-title {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.mypage-review-list-line {
  width: 100%;
  height: 1px;
  margin: 5px 0 5px 0;
  background-color: rgb(210, 210, 210);
}
.mypage-review-list-middle-container {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.mypage-review-list-middle-container-col {
  width: 50%;
}
.mypage-review-list-middle-item {
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 13px;
}
.mypage-review-list-middle-item-option {
  margin-right: 7px;
  padding: 8px;
  background-color: #EFEFEF;
  border-radius: 3px;
  text-align: left;
  color: #757272;
  font-size: 12px;
}
.mypage-review-list-bottom-container {
  display: flex;
  justify-content: right;
  margin: 15px 0 0px 0;
}
.mypage-review-list-bottom-container-item {
  display: flex;
  justify-content: center;
}
.mypage-review-list-bottom-container-item a {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.mypage-review-list-btn-review {
  padding: 7px;
  background-color: #0AAB00;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
.mypage-review-list-btn-review:hover {
  font-weight: bold;
}
#mypage-img-btn {
  background-color: #0AAB00;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>