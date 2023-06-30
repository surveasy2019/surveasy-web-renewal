<template>
  <div class="footer-container">
    <img loading="prelaod" decoding="async" class="img-fluid" width="120" src="@/assets/logo.png" alt="surveasy">
    <div class="footer-contents">
      <div class="footer-left">
        <div class="content-gray">이메일 : official@gosurveasy.com</div>
        <div class="content-gray">사업자 등록번호 : </div>
      </div>
      <div class="footer-right">
        <div class="content-gray">어플 다운로드</div>
        <div class="content-gray">이용약관 | 개인정보처리방침</div>
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
  padding-top: 20px;
  width: 100%;
  height: 150px;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: rgb(237, 236, 236);
}

.footer-contents{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.content-gray{
  text-align: left;
  font-size: 12px;
  color: gray;
}
</style>