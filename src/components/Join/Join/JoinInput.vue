<template>
  <div class="join-input-container">
    <h2>회원가입</h2>

    <div class="join-input-form-container">
      <div class="join-input-form-item">
        <label>이메일*</label>
        <input type="email" id="id" placeholder="이메일을 입력해주세요">
      </div>
      <div class="join-input-form-item">
        <label>비밀번호*</label>
        <input type="password" id="pw" placeholder="비밀번호를 입력해주세요">
        <span>* 8자리 이상의 비밀번호를 설정해주세요</span>
      </div>
      <div class="join-input-form-item">
        <label>비밀번호 확인*</label>
        <input type="password" id="pw-check" placeholder="비밀번호를 한번 더 입력해주세요">
      </div>
      <div class="join-input-form-item">
        <label>이름*</label>
        <input type="text" id="name" placeholder="반드시 실명을 기재해주세요">
      </div>
      <div class="join-input-form-item">
        <label>휴대폰 번호*</label>
        <input type="tel" id="phone" placeholder="- 없이 입력해주세요">
      </div>
      <div class="join-input-form-item">
        <label>생년월일*</label>
        <input type="num" id="birth" placeholder="ex. 20220101">
      </div>

      <div class="join-input-form-item">
        <label>가입경로*</label>
        <div class="join-input-inflow-col-container">
          <div class="join-input-inflow-col-item">
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">에브리타임</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">카카오톡 단톡방</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">구글 검색</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">네이버 검색</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">인스타그램</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">기타</label> 
            </div>
          </div>

          <div class="join-input-inflow-col-item">
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">네이버 블로그</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">네이버 지식인</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">네이버 카페</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">이메일 홍보</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">오프라인 홍보</label> 
            </div>
            <div class="join-input-inflow-item">
              <input type="radio" name="from" id="everytime" value="everytime">
              <label for="everytime">지인 추천</label> 
            </div>
          </div>
        </div>
      </div>

      <div class="join-input-form-item">
        <label>상세 가입경로*</label>
        <input type="text" id="inflow-detail" placeholder="해당 가입경로에 대한 상세 내용을 작성해주세요">
        <span>* 검색 유입인 경우 검색어, 에브리타임/카카오톡/네이버 카페인 경우 소속을 알려주세요.</span>
      </div>

      <div class="join-input-form-item">
        <label>이용약관*</label>
        <div class="join-input-terms-container">
          <div class="join-input-terms-item">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label" for="checkAll">전체 동의하기</label>
          </div>
          <div class="join-input-terms-item">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label"><router-link to="/" target="_blank">서베이지 이용약관 (필수)</router-link>
            </label>
          </div>
          <div class="join-input-terms-item">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label"><router-link to="/" target="_blank">서베이지 개인정보 보호 방침 (필수)</router-link>
            </label>
          </div>
          <div class="join-input-terms-item">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label">회원가입 시 작성한 개인 정보가 모두 올바름을 확인합니다. 가입 오류로 인한 불이익은 이용자의 책임임을 인지하고 있습니다. (필수)
            </label>
          </div>
        </div>
      </div>


    </div>
    
    <div class="join-input-button-container">
      <button id="btn-join">회원가입하기</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.join-input-form-container {
  display: flex;
  flex-direction: column;
}
.join-input-form-item {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 12px auto;
}
.join-input-form-item label {
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 3px;
}
.join-input-form-container input {
  height: 50px;
  padding-left: 10px;
  color: #727272;
  background-color: white;
  border: solid 1px #dadada;
  border-radius: 5px;
}
.join-input-form-container input:focus {
  color: #000000;
  outline: 1px solid #0AAC00;
}
.join-input-form-item span {
  color: #0AAC00;
  text-align: left;
  font-size: 10px;
  margin-top: 2px;
}
.join-input-inflow-container span {
  text-align: left;
}
.join-input-inflow-col-container {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}
.join-input-inflow-item {
  display: flex;
  flex-direction: row;
  width: 180px;
  align-items: center;
}
.join-input-inflow-item label {
  width: 80%;
  font-weight: 500;
  margin: auto;
}
.join-input-inflow-item input {
  height: 30px;
}
.join-input-inflow-item input:focus {
  outline: none;
}
.join-input-terms-container {
  align-items: left;
}
.join-input-terms-item {
  display: flex;
  flex-direction: row;
}
.join-input-terms-item input {
  height: 20px;
  margin-top: 3px;
}
.join-input-terms-item input:focus {
  outline: none;
}
.join-input-terms-item label {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #6e6e6e;
  margin: auto;
}
.join-input-terms-item a {
  text-decoration: none;
}
.join-input-button-container {
  display: flex;
  flex-direction: column;
  margin: 15px 0 20px 0;
}
.join-input-button-container button {
  width: 400px;
  height: 40px;
  margin: 5px auto;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}
#btn-join {
  background-color: #0AAC00;
  color: white;
  border: solid 1px #0AAC00;
}

</style>