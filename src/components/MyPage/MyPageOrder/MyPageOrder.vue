<template>
  <div class="mypage-order-container">
    <div class="mypage-order-title-container">
      <div>주문 내역</div>
      <div>입금 계좌: 카카오뱅크 3333-11-5235460 (송*예)</div>
    </div>

    <div class="mypage-order-item-container">
      <div class="mypage-order-item" v-for="item in orderList" :key="item.id">
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
              <span v-if="item.progress==2">{{ item.nowCount }}명 / {{item.headCount}}명</span>
              <span v-else>{{item.headCount }}명</span>
            </div>
          </div>

          <div class="mypage-order-middle-container-col">
            <div class="mypage-order-middle-item">
              <span class="mypage-order-middle-item-option">주문 날짜</span>
              <span>{{item.uploadedAt}}</span>
            </div>
            <div class="mypage-order-middle-item">
              <span class="mypage-order-middle-item-option">설문 기한</span>
              <span>{{item.dueDate}}</span>
            </div>
          </div>
        </div>    

        <div class="mypage-order-bottom-container">
          <div class="mypage-order-bottom-container-item" v-if="item.progress<2">
            <router-link to="/"><img id="mypage-img-btn" width=22 src="@/assets/mypage/icon_edit.png"></router-link>
            <a><img id="mypage-img-btn" width=22 src="@/assets/mypage/icon_delete.png"></a>
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
import axios from 'axios';
export default {
  data() {
    return {
      orderList: []
    }
  },

  mounted(){
    this.listOrders()
  },

  methods : {
    async listOrders() {
      try {
        const response = await axios.post("http://15.164.17.148/survey/mypage/list",
        {
          email : "min@dong.com"
        })
        this.orderList = response.data.surveyMyPageOrderList
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.mypage-order-container {
  width: 100%;
  justify-content: center;
}
.mypage-order-title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px 0 50px;
  color: #0AAB00;
  font-size: 19px;
  font-weight: bold;
}
.mypage-order-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 17px 50px 20px 50px;
  justify-content: space-between
}
.mypage-order-item {
  width: 100%;
  margin-bottom: 25px;
  padding: 30px 20px 20px 20px;
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
  color: #0AAC00;
  font-size: 16px;
  font-weight: bolder;
}
.mypage-order-item-title {
  font-size: 18px;
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
  padding: 8px;
  background-color: #EFEFEF;
  border-radius: 3px;
  text-align: left;
  color: #757272;
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
  padding: 7px;
  background-color: #0AAB00;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
}
.mypage-order-btn-review:hover {
  font-weight: bold;
}
#mypage-img-btn {
  background-color: #0AAB00;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>