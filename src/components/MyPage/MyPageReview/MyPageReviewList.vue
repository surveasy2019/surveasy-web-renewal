<template>
  <div class="mypage-review-list-container">
    <div class="mypage-review-list-title-container" v-if="this.reviewList.length != 0">
      <div>리뷰 작성</div>
    </div>

    <div class="mypage-order-none-msg" v-if="this.reviewList.length == 0">
      리뷰 작성 가능한 설문이 없습니다.
    </div>

    <div class="mypage-review-list-item-container">
      <div class="mypage-review-list-item" v-for="item in this.reviewList" :key="item.id">
        <div class="mypage-review-list-item-title">{{item.title}}</div>
        <div class="mypage-review-list-line"></div>

        <div class="mypage-review-list-middle-container">
          <div class="mypage-review-list-middle-item">
              <span class="mypage-review-list-middle-item-option">주문 날짜</span>
              <span>{{item.uploadedAt}}</span>
            </div>
            <div class="mypage-review-list-middle-item">
              <span class="mypage-review-list-middle-item-option">설문 기한</span>
              <span>{{item.dueDate}}</span>
            </div>
        </div>    

        <div class="mypage-review-list-bottom-container">
          <div class="mypage-review-list-bottom-container-item">
            <router-link class="mypage-review-list-btn-review" :to="`/mypage/review/post/${item.id}/${item.title}`">후기 작성하기 〉</router-link>
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
      reviewList: []
    }
  },

  mounted(){
    this.listOrders()
  },

  methods : {
    async listOrders() {
      try {
        const response = await axios.post("https://gosurveasy.co.kr/survey/mypage/list",
        {
          email : this.$store.state.currentUser.email
        })
        const list = response.data.surveyMyPageOrderList
      
        for(let review in list){
          if(list[review].reviewId == null && list[review].isDone){
            this.reviewList.push(list[review])
          }
        }
        console.log(this.reviewList)
        
      } catch (error) {
        console.log(error)
      }
    },
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
  margin-bottom: 20px;
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
  margin-top: 20px;
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