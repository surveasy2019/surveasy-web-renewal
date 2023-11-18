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
          <span class="mypage-order-item-top">{{item.priceDiscounted}}원</span>  
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
            <a @click="openModal(item)"><img id="mypage-img-btn" width=22 src="@/assets/mypage/icon_edit.png"></a>
            <a @click="deleteSurvey(item.id)"><img id="mypage-img-btn" width=22 src="@/assets/mypage/icon_delete.png"></a>
          </div>
          <div class="mypage-order-bottom-container-item" v-else-if="item.progress>2">
            <router-link class="mypage-order-btn-review" to="/mypage/review">후기 작성하기 〉</router-link>
          </div>
          
        </div>    
      </div>
    </div>

    <!-- 설문 수정 모달창 -->
    <div v-if="editModal == true" class="edit-modal">
      <div class="edit-contentsbox">
        <div id="edit-top">
          <a class="edit-close" @click="closeModal">X</a>
          <p class="edit-title">설문 수정하기</p>

        </div>
      
        <div id="edit-container">
          <div id="detail-title">설문 제목</div>
            <input class="modal-input" type="text" v-model="modalTitle" required>
          </div>

          <div id="edit-container">
            <div id="detail-title">설문 링크</div>
            <input class="modal-input" type="text" v-model="modalLink" required>
            <div id="container-link-btn"><button id="link-btn"><a :href="link" target="_blank">링크 확인</a></button></div>
          </div>
    
          <div id="edit-container">
            <div id="detail-title">요구 응답수</div>
              <select class="modal-input" v-model="modalHeadCount" aria-label="Default select example">
                <option v-for="item in modalHeadCountList" :key="item.key" :value=item[1]>{{ item[0] }}</option>
              </select>
          </div>

          <div id="edit-container">
            <div id="edit-container-price"> 
              <span>{{ this.modalPrice }}(기존 금액) + </span>
              <span id="edit-container-price-diff">{{  }}(추가 금액)</span>
              <span> = </span>
              <span id="edit-container-price-after">{{ this.updatePrice }}원</span>
            </div>
          
          </div>
          <button id="edit-fin-btn" @click="editSurvey">수정 완료</button>
      </div>    
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      orderList: [],
      editModal: false,
      editTargetId : 0,

      editTarget : null,
      modalTitle : "",
      modalLink : "",
      modalLastHeadCount : 0,
      modalHeadCount : 0,
      modalSpendTime : 0,
      modalPrice : 0,
      modalHeadCountList : [],
    }
  },

  mounted(){
    this.listOrders()
  },

  computed :{
    updatePrice() {
      var p = Math.ceil(parseFloat(this.modalPrice
        * ((this.$store.state.tables.priceTable[this.modalSpendTime][this.modalHeadCount]) / this.$store.state.tables.priceTable[this.modalSpendTime][this.modalLastHeadCount])).toFixed(0) / 10) * 10

      return p
    },
    // updatePrice(){
    //   let addPrice = (this.modalHeadCount - this.modalLastHeadCount) * (this.modalPriceDiffList[this.modalSpendTime])
    //   return this.modalPrice + addPrice
    // }
  },

  methods : {
    async listOrders() {
      try {
        const response = await axios.post("http://3.39.170.7/survey/mypage/list",
        {
          email : this.$store.state.currentUser.email
        })
        this.orderList = response.data.surveyMyPageOrderList
        console.log(this.orderList)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteSurvey(id){
      try {
        if(confirm("정말 삭제하시겠습니까?")){
          const response = await axios.delete(`http://3.39.170.7/survey/mypage/delete/${id}`)
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      }
    },

    async openModal(item){
      this.editTarget = item
      this.modalTitle = item.title
      this.modalLink = item.link
      this.modalLastHeadCount = item.headCount
      this.modalHeadCount = item.headCount
      this.modalSpendTime = item.spendTime
      this.modalPrice = item.priceDiscounted
      this.editModal = true
      this.modalHeadCountList = [
        ["", 0], ["30명", 1], ["40명", 2], ["50명", 3], ["60명", 4], ["70명", 5], ["80명", 6],
        ["90명", 7], ["100명", 8], ["120명", 9], ["140명", 10], ["160명", 11], ["180명", 12], ["200명", 13]
      ].slice(item.headCount)
      
    },

    async editSurvey(){
      try {
        await axios.patch(
          `http://3.39.170.7/survey/mypage/edit/${this.editTarget.sid}`,
          {
            title: this.modalTitle,
            link: this.modalLink,
            headCount: this.modalHeadCount,
            price: this.updatePrice
          }
        )
        this.editModal = false
        this.$router.go("/mypage/order")
      } catch (error) {
        console.log(error)
      }
    },

    closeModal() {
      this.editModal = false
    },
    
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
.edit-modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.202);
  display: table;
  transition: opacity .3s ease;
}
.edit-contentsbox {
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  font-family: 'Noto Sans KR', sans-serif;
  width: 600px;
  height: 560px;
  margin: 120px auto;
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(56, 56, 56, 0.042);
  transition: all .3s ease;
  z-index: 2;
}
#edit-container-price {
  text-align: right;
}
#edit-container-price-diff {
  text-align: center;
  color: #0AAB00;
}
#edit-container-price-after {
  padding: 3px;
  font-size: 20px;
  text-align: center;
  background: #0AAB00;
  color: #FFFFFF;
}
.edit-title {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 9px;
  color: #0CAE02;
}
.edit-close {
  display: flex;
  flex-direction: row;
  justify-content: right;
  cursor: pointer;
  color:#494949;
}
#detail-title {
  font-size: 16px;
  color: #000000;
  text-align: left;
  margin: 5px;
}
#container-link-btn {
  display: flex;
  justify-content: right;
}
#link-btn {
  border: 0;
  font-size: 15px;
  color: #0CAE02;
}
#edit-fin-btn {
  padding: 7px;
  margin: 15px 0px 0px 0px;
  color:#0CAE02;
  background-color: #FFFFFF;
  border: 1.5px solid #0CAE02;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
#edit-fin-btn:hover{
  color: white;
  background: #0AAB00;
}

.modal-input {
  margin-top: 10px;
  margin-bottom: 15px;
  width: 98%;
  height: 40px;
  padding-left: 7px;
  color: #a0a0a0;
  background-color: white;
  border: solid 1px #dadada;
  border-radius: 5px;
}
</style>