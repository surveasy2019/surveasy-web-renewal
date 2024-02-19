<template>
  <div class="footer-container">
    <img loading="prelaod" decoding="async" class="img-fluid" width="120" src="@/assets/logo.png" alt="surveasy">
    <div class="footer-contents">
      <div class="footer-left">
        <div class="content-gray">이메일 : official@gosurveasy.com</div>
        <div class="content-gray">사업자 등록번호 :  369-16-01796</div>
      </div>
      <div class="footer-right">
        <div class="content-gray">어플 다운로드</div>
        <div class="content-gray">
          <a href="https://surveasy.oopy.io/terms-of-use" target="_blank" class="content-link">이용약관</a> | <a href="https://surveasy.oopy.io/privacy-policy" target="_blank" class="content-link">개인정보처리방침</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterContainer'
}
</script>

<style>
.footer-container {
  width: 100%;
  height: 150px;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: rgb(237, 236, 236);
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  flex-direction: column;
}

.footer-contents{
  display: flex;
  width: 100%;
  justify-content: space-around; /* 자식 요소들을 좌우로 분산 정렬 */
  align-items: flex-start;
}

.footer-left,
.footer-right {
  display: flex;
  flex-direction: column; /* 내용을 세로로 나열 */
}

.img-fluid {
  margin-bottom: 20px; /* 이미지 아래 여백을 추가 */
}

.content-gray{
  text-align: left;
  font-size: 0.8rem;
  color: gray;
  
}

.content-link{
  color: gray;
}
</style>