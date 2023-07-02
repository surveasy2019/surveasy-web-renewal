<template>
  <div class="mypage-review-detail-input-container">
    <img src="@/assets/check.png" width="50">
    <h2>자세한 후기를 작성해주셔서<br>감사합니다</h2>

    <div class="mypage-review-detail-input-notice-container">
      작성해주신 후기는 더 나은 서비스를 제공하고<br>다른 고객이 이용하는데 도움이 됩니다.
      <br><br>추가된 적립금은 <br>마이페이지 [적립금] 메뉴에서 볼 수 있습니다.
    </div>

    <div class="mypage-review-detail-input-button-container">
      <router-link to="/"><button id="btn-home">홈으로 가기</button></router-link>
      <router-link to="/mypage"><button id="btn-mypage">마이페이지 가기</button></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mypage-review-detail-done-input-container{
  margin: auto;
  padding: 60px;
}
.mypage-review-detail-input-notice-container {
  color: #000000;
  font-size: 14px;
  font-weight: lighter;
}
.mypage-review-detail-input-button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0 50px 0;
}
.mypage-review-detail-input-button-container button {
  width: 150px;
  height: 32px;
  margin: 5px auto;
  border-radius: 7px;
  cursor: pointer;
}
#btn-home {
  background-color: #ffffff;
  color: #bfbfbf;
  border: solid 1px #bfbfbf;
}
#btn-mypage {
  background-color: #ffffff;
  color: #0AAC00;
  border: solid 2px #0AAC00;
  font-weight: bold;
}
#btn-mypage:hover {
  background-color: #0AAC00;
  color: #ffffff;
  border: solid 2px #0AAC00;
  font-weight: bold;
}
</style>