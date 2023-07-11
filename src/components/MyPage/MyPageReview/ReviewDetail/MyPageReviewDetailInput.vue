<template>
  <div class="mypage-review-detail-input-container">
    <h2>상세 리뷰 작성하기</h2>

    <div class="mypage-review-detail-input-title-container">
      <div id="title">소비자의 온라인 금융서비스 경험 조사</div>
      <div>설문 의뢰 서비스에 대해 조금 더 자세한 후기를 알려주세요.</div>
      <br>
      <div>답변하시는 모든 내용은 비공개 처리됩니다. <br>작성시, 감사한 마음을 담아 <span style="color:#0AAC00;">적립금 500원</span>을 드립니다.</div>
    </div>

    <div class="mypage-review-detail-input-form-container">
      <div class="rev-contents">
        <div class="rev-column">
          <p class="rev-black-bold">1. 서베이지의 가장 큰 장점은 무엇이라고 생각하시나요? *<br>(복수 선택 가능)</p>
    
          <div class="rev-option">
            <input type="checkbox" class="check" name="good" id="A1" v-model="reviewDetailData.Q1" value="A1" >
            <label class="check-text">빠른 시간 내에 응답을 모아줌</label> 
          </div>
          <div class="rev-option">
            <input type="checkbox" class="check"  id="A2" v-model="reviewDetailData.Q1" value="A2" >
            <label class="check-text">내가 원하는 응답 수만큼 응답을 모아줌</label> 
          </div>
          <div class="rev-option">
            <input type="checkbox" class="check" name="good" id="A3" v-model="reviewDetailData.Q1" value="A3" >
            <label class="check-text">간편한 이용방법</label> 
          </div>
          <div class="rev-option">
            <input type="checkbox" class="check" name="good" id="A4" v-model="reviewDetailData.Q1" value="A4" >
            <label class="check-text">저렴한 가격</label> 
          </div>
          <div class="rev-option">
            <input type="checkbox" class="check" name="good" id="A5" v-model="reviewDetailData.Q1" value="A5" >
            <label class="check-text">잦은 이벤트</label> 
          </div>
          <div class="rev-option">
            <input type="checkbox" class="check" name="good" id="A6" v-model="reviewDetailData.Q1" value="A6" >
            <label class="check-text">높은 신뢰도</label> 
          </div>
          <div class="rev-option">
            <label class="check-text">기타: </label> <br>
            <input type="text" class="text-etc" v-model="reviewDetailData.Q1etc">
          </div>
        </div>

        <div class="rev-column">
          <p class="rev-black-bold">2. 서베이지의 설문 응답 서비스가 개선해야 할 점은 무엇인가요?</p>
          <textarea type="text" class="text-box" v-model="reviewDetailData.Q2"></textarea>
        </div>

        <div class="rev-column">
          <p class="rev-black-bold">3. 서베이지만으로 원하는 응답 수를 채우실 수 있었나요? <br>추가로 응답을 얻어야했던 경우, 어떠한 경로로 얻어내셨나요? *<br>(최소 10자 이상)</p>
          <textarea type="text" class="text-box" v-model="reviewDetailData.Q3"></textarea>
        </div>
        
        <div class="rev-column">
          <p class="rev-black-bold">4. 서베이지 외 타 유료 설문 응답 서비스를 사용해보신 적이 있나요? 있다면, 해당 서비스 이름을 알려주세요.</p>
          <textarea type="text" class="text-box" v-model="reviewDetailData.Q4"></textarea>
        </div>



      </div>

      </div>

    <div class="mypage-review-detail-input-button-container">
      <router-link to="/mypage/review/detail/done"><button id="btn-review-detail">작성 완료하기</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewDetailData: {
        Q1: [],
        Q1etc:'',
        Q2: '',
        Q3: '',
        Q4: ''
      }
    }
  },
}
</script>

<style>
.mypage-review-detail-input-container{
  padding: 35px;
}
.mypage-review-detail-input-title-container {
  margin-top: 40px;
  padding: 30px;
  color: #000000;
  font-size: 14px;
  font-weight: lighter;
  border: solid 1px #c8c8c8;
  border-radius: 10px;
}
.mypage-review-detail-input-form-container {
  margin-top: 10px;
  display: flex;
  text-align: left;
}
.rev-column {
  margin-top: 40px;
}
.rev-black-bold {
  margin: 20px 0 7px 0;
  font-size: 15px;
  color: #000000;
  font-weight: bold;
}
.rev-option {
  display: flex;
  justify-content: left;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 14px;
}
.text-etc {
  width: 200px;
  margin-left: 10px;
  background-color: #f2f2f2;
  border: none;
}
.text-etc:focus {
  color: #000000;
  outline: 1px solid #0AAC00;
  border-radius: 5px;
}
.text-box { 
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
}
.text-box:focus {
  color: #000000;
  outline: 1px solid #0AAC00;
  border-radius: 5px;
}
.mypage-review-detail-input-form-container input {
  margin-right: 10px;
}
.mypage-review-detail-input-button-container {
  display: flex;
  justify-content: center;
}
#btn-review-detail {
  width: 250px;
  background-color: #ffffff;  
  color: #0AAC00;
  border: solid 1px #0AAC00;
  border-radius: 7px;
  cursor: pointer;
}
#btn-review-detail:hover {
  background-color: #0AAC00;
  color: #ffffff;
  border: solid 2px #0AAC00;
  font-weight: bold;
}
</style>