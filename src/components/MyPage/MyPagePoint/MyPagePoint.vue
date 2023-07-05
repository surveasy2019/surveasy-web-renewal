<template>
  <div class="mypage-point-container">
    <div class="mypage-point-title-container">
      <div>적립금</div>
    </div>

    <div class="mypage-point-main-container">
      <div class="mypage-point-main-row">
        <div class="mypage-point-option">현재 적립금</div>
        <div class="mypage-point-value">31,745원</div>
      </div>
      <div class="mypage-point-main-line-container"><div class="mypage-point-main-line"></div></div>
      <div class="mypage-point-main-row">
        <div class="mypage-point-option">사용한 적립금</div>
        <div class="mypage-point-value">31,745원</div>
      </div>
      <div class="mypage-point-main-line-container"><div class="mypage-point-main-line"></div></div>
      <div class="mypage-point-main-row">
        <div class="mypage-point-option">누적 적립금</div>
        <div class="mypage-point-value">31,745원</div>
      </div>
    </div>

    <div class="mypage-point-notice-container">
      <div class="mypage-point-notice">• 적립금은 서비스 이용 금액의 3%가 적립됩니다.</div>
      <div class="mypage-point-notice">• 자세한 구매 후기 작성 시 적립금 500원이 추가 지급됩니다.</div>
      <div class="mypage-point-notice">• 적립금은 결제 금액이 10,000원 이상일 때만 사용 가능하며, 서비스 금액의 10%까지만 사용할 수 있습니다.</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.mypage-point-container {
  width: 100%;
  justify-content: center;
}
.mypage-point-title-container {
  display: flex;
  padding: 0 40px 10px 50px;
  color: #0AAB00;
  font-size: 20px;
  font-weight: bold;
}
.mypage-point-main-container {
  width: 78%;
  margin: auto;
  padding: 30px;
  border: solid 1px #0AAC00;
  border-radius: 5px;
}
.mypage-point-main-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 30px 20px 30px;
}
.mypage-point-main-line-container {
  display: flex;
  justify-content: center;
  height: 1px;
}
.mypage-point-main-line {
  width: 95%;
  height: 1px;
  background-color: rgb(222, 222, 222);
}
.mypage-point-option {
  color: #757272;
  font-size: 18px;
}
.mypage-point-value {
  color: #0AAC00;
  font-size: 18px;
}
.mypage-point-notice-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 85%;
  margin: 20px auto;
}
.mypage-point-notice {
  margin-bottom: 5px;
  color: #757272;
  font-size: 12px;
}
</style>