<template>
  <div class="mypage-order-container">
    <div class="mypage-order-title-container" v-if="this.orderList.length != 0">
      <div>주문 내역</div>
      <div>입금 계좌: 카카오뱅크 3333-11-5235460 (송*예)</div>
    </div>

    <div class="mypage-order-none-msg" v-if="this.orderList.length == 0">
      주문 내역이 없습니다.
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
              <span v-if="item.status=='CREATED' || item.status=='WAITING'">검수중</span>
              <span v-else-if="item.status=='IN_PROGRESS'">설문 진행중</span>
              <span v-else-if="item.status=='DONE' && item.reviewId == null">패널 응답 완료</span>
              <span v-else-if="item.status=='DONE' && item.reviewId != null">후기 작성 완료</span>
            </div>
            <div class="mypage-order-middle-item">
              <span class="mypage-order-middle-item-option">답변 수</span>
              <span v-if="item.status=='IN_PROGRESS'">{{ item.responseCount }}명 / {{ this.headCountText[this.headCountIdxMap[item.headCount]] }}</span>
              <span v-else>{{ this.headCountText[this.headCountIdxMap[item.headCount]] }}</span>
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
          <div class="mypage-order-bottom-container-item" v-if="item.status=='CREATED' || item.status=='WAITING'">
            <a @click="openModal(item)"><img id="mypage-img-btn" width=22 src="@/assets/mypage/icon_edit.png"></a>
            <a @click="deleteSurvey(item.id)"><img id="mypage-img-btn" width=22 src="@/assets/mypage/icon_delete.png"></a>
          </div>
          <div class="mypage-order-bottom-container-item" v-else-if="item.status=='DONE' && item.reviewId == null">
            <router-link class="mypage-order-btn-review" :to="`/mypage/review/post/${item.id}/${item.title}`">후기 작성하기 〉</router-link>
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
              <span id="edit-container-price-diff">{{ this.updatePrice - this.modalPrice }}(추가 금액)</span>
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
      headCountText: this.$store.state.tables.priceTextTable[0],
      headCountIdxMap: this.$store.state.maps.headCountMap,
      spendTimeIdxMap: this.$store.state.maps.spendTimeMap,
      orderList: [],
      editModal: false,
      editTargetId : 0,

      editTarget : null,
      modalTitle : "",
      modalLink : "",
      modalLastHeadCount : "",
      modalHeadCount : "",
      modalSpendTime : "",
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
        * ((this.$store.state.tables.priceTable[this.spendTimeIdxMap[this.modalSpendTime]][this.headCountIdxMap[this.modalHeadCount]]) / this.$store.state.tables.priceTable[this.spendTimeIdxMap[this.modalSpendTime]][this.headCountIdxMap[this.modalLastHeadCount]])).toFixed(0) / 10) * 10

      return p
    }
  },

  methods : {
    async listOrders() {
      try {
        const response = await axios.post("https://gosurveasy.co.kr/survey/mypage/list",
        {
          email : this.$store.state.currentUser.email
        })
        this.orderList = response.data.surveyMyPageOrderList
        console.log(this.orderList.length)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteSurvey(id){
      try {
        if(confirm("정말 삭제하시겠습니까?")){
          const response = await axios.delete(`https://gosurveasy.co.kr/survey/${id}`)
          if(response.status == 200) {
            if(confirm("삭제되었습니다.")){
              this.$router.go("/mypage/order")
            }
          }else {
            if (confirm("삭제에 실패하였습니다. 다시 시도해주세요.")) {
              this.$router.go("/mypage/order")
            }
          }
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
      this.modalPrice = item.price
      this.editModal = true
      this.modalHeadCountList = [
        ["요구 응답수를 선택하세요", "HEAD"], ["30명", "HEAD_30"], ["40명", "HEAD_40"], ["50명", "HEAD_50"], ["60명", "HEAD_60"], ["70명", "HEAD_70"], ["80명", "HEAD_80"],
        ["90명", "HEAD_90"], ["100명", "HEAD_100"], ["120명", "HEAD_120"], ["140명", "HEAD_140"], ["160명", "HEAD_160"], ["180명", "HEAD_180"], ["200명", "HEAD_200"]
      ].slice(item.headCount)
      
    },

    async editSurvey(){
      try {
        await axios.patch(
          `https://gosurveasy.co.kr/survey/${this.editTarget.id}`,
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
  padding: 20px 50px 20px 50px;
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
.mypage-order-none-msg{
  font-family: 'Noto Sans KR', sans-serif;
  padding: 30px;
  color: #494949;
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