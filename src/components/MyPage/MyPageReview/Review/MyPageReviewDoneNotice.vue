<template>
  <div class="mypage-review-input-container">
    <img src="@/assets/check.png" width="50">
    <h2>공개 리뷰 작성이<br>완료되었습니다</h2>

    <div class="mypage-review-input-notice-container">
      소중한 후기를 남겨주셔서 감사합니다. <br> 적립금은 마이페이지에서 확인하실 수 있습니다.
    </div>


    <div class="mypage-review-input-button-container">
      <router-link to="/"><button id="btn-yes">메인으로 돌아가기</button></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mypage-review-input-container{
  margin: auto;
  padding: 60px;
}
.mypage-review-input-notice-container {
  color: #000000;
  font-size: 15px;
  font-weight: lighter;
  line-height: 1.5rem;
}
.mypage-review-input-button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
}
.mypage-review-input-button-container button {
  width: 150px;
  height: 32px;
  margin: 5px auto;
  border-radius: 7px;
  cursor: pointer;
}
#btn-no {
  background-color: #ffffff;
  color: #bfbfbf;
  border: solid 1px #bfbfbf;
}
#btn-yes {
  background-color: #ffffff;
  color: #0AAC00;
  border: solid 2px #0AAC00;
  font-weight: bold;
}
#btn-yes:hover {
  background-color: #0AAC00;
  color: #ffffff;
  border: solid 2px #0AAC00;
  font-weight: bold;
}
</style>