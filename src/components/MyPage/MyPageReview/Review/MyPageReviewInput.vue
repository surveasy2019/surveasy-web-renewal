<template>
  <div class="mypage-review-input-container">
    <h2>공개 리뷰 작성하기</h2>

    <div class="mypage-review-input-title-container">
      <div id="title">{{ title }}</div>
      <div>설문 의뢰는 어땠나요?</div>
    </div>

    <div class="mypage-review-input-form-container">
      <div class="mypage-review-input-star-container">
        <img v-if="reviewData.score<1" class="mypage-review-input-starimg" src="@/assets/mypage/restar.png" width="40" @click="plusScore(1)">
        <img v-if="reviewData.score>=1" class="mypage-review-input-starimg" src="@/assets/mypage/refullstar.png" width="40" @click="change(0)">

        <img v-if="reviewData.score<2" class="mypage-review-input-starimg" src="@/assets/mypage/restar.png" width="40" @click="plusScore(2)">
        <img v-if="reviewData.score>=2" class="mypage-review-input-starimg" src="@/assets/mypage/refullstar.png" width="40" @click="change(1)">
        <img v-if="reviewData.score<3" class="mypage-review-input-starimg" src="@/assets/mypage/restar.png" width="40" @click="plusScore(3)">
        <img v-if="reviewData.score>=3" class="mypage-review-input-starimg" src="@/assets/mypage/refullstar.png" width="40" @click="change(2)">
        <img v-if="reviewData.score<4" class="mypage-review-input-starimg" src="@/assets/mypage/restar.png" width="40" @click="plusScore(4)">
        <img v-if="reviewData.score>=4" class="mypage-review-input-starimg" src="@/assets/mypage/refullstar.png" width="40" @click="change(3)">
        <img v-if="reviewData.score<5" class="mypage-review-input-starimg" src="@/assets/mypage/restar.png" width="40" @click="plusScore(5)">
        <img v-if="reviewData.score>=5" class="mypage-review-input-starimg" src="@/assets/mypage/refullstar.png" width="40" @click="change(4)">
      </div>
      <textarea class="mypage-review-input-textarea" v-model="reviewData.reviewText" placeholder="설문 의뢰 후기를 작성해주세요. 여러분의 후기는 서베이지의 다른 고객에게 공개되어 서비스 이용에 도움이 됩니다."></textarea>
      </div>

    <div class="mypage-review-input-button-container">
      <button id="btn-mypage-review" @click="createReview">작성 완료하기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { updateDoc, getDoc, doc, getFirestore } from 'firebase/firestore';

export default {
  data() {
    return {
      id : this.$route.params.id,
      title : this.$route.params.title,
      reviewData: {
        score: 0,
        reviewText: ""
      }
    }
  },
  methods: {
    change(num){
      this.reviewData.score = num
    },
    plusScore(num){
      this.reviewData.score = num
    },
    async createReview(){
      try{
        await axios.post(
          `https://gosurveasy.co.kr/review/${this.id}`,
            {
              grade: this.reviewData.score,
              content: this.reviewData.reviewText,
              email: this.$store.state.currentUser.email,
              username: this.$store.state.currentUser.name
            }
        )
        this.$router.push("/mypage/review/post/done")
        const db = getFirestore()
        const userEmail = this.$store.state.currentUser.email
        const docSnap = await getDoc(doc(db, "userData", userEmail.toString()))
        if(docSnap.exists()){
            const data = docSnap.data()
            const now = data.point_current
            const docref = doc(db, "userData", userEmail.toString())
            await updateDoc(docref, { 
                point_current: now+500
            })
        }
      }catch(error){
        console.log(error)
      }
    }
  },
}
</script>

<style>
.mypage-review-input-container{
  margin: auto;
  padding: 30px;
}
.mypage-review-input-title-container {
  margin-top: 40px;
  color: #000000;
  font-size: 15px;
  font-weight: lighter;
}
.mypage-review-input-title-container #title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 7px;
}
.mypage-review-input-star-container {
  margin: 30px 0 30px 0;
}
.mypage-review-input-form-container input {
  width: 250px;
  height: 30px;
  margin: 20px auto;
  padding-left: 7px;
  color: #727272;
  background-color: white;
  border: solid 1px #dadada;
  border-radius: 5px;
}
.mypage-review-input-textarea {
  width: 350px;
  height: 180px;
  outline: none;
}
.mypage-review-input-textarea:focus {
  color: #000000;
  outline: 1px solid #0AAC00;
}
.mypage-review-input-button-container {
  display: flex;
  justify-content: center;
}
#btn-mypage-review {
  width: 250px;
  background-color: #ffffff;  
  color: #0AAC00;
  border: solid 1px #0AAC00;
  border-radius: 7px;
  cursor: pointer;
}
#btn-mypage-review:hover {
  background-color: #0AAC00;
  color: #ffffff;
  border: solid 2px #0AAC00;
  font-weight: bold;
}
</style>