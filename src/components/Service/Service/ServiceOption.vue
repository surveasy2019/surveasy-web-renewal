<template>
  <div class="service-option-container">
    <div class="home-title">
        설문응답서비스
    </div>
      <div>
            <select class="selectbox" v-model="priceRequireHeadCount">
              <option :value=0 selected disabled hidden>요구 응답수</option>
              <option :value=1>30명</option>
              <option :value=2>40명</option>
              <option :value=3>50명</option>
              <option :value=4>60명</option>
              <option :value=5>70명</option>
              <option :value=6>80명</option>
              <option :value=7>90명</option>
              <option :value=8>100명 (최대 응답수)</option>
            </select>

            <select class="selectbox" v-model="priceSpendTime">
              <option :value=0 selected disabled hidden>소요 시간</option>
              <option :value=1>1분 이내</option>
              <option :value=2>1-3분</option>
              <option :value=3>4-6분</option>
              <option :value=4>7-10분</option>
              <option :value=5>11-15분</option>
              <option :value=6>16-20분</option>
            </select> 

            <br>
            <li class="hasTitleOption">
              <span class="option-title">마감기한 지정</span>
              <input type="Date" class="date"> 
              <input type="time" class="time">
              <p class="warn-msg">마감날짜와 마감시간 중 공란이 존재할 경우 <br> 설문 게시가 어려울 수 있습니다.</p>
            </li>


            <!-- 설문 대상 타겟팅 관련 -->
            <li class="hasTitleOption">
              <span class="option-title">설문 대상</span>
            
                <select class="selectbox-target" id="target_age">
                <option :value=0 selected disabled hidden>대상 연령</option>
                <option :value=1>전 연령</option>
                <option :value=2>20대</option>
                <option :value=3>20세 이상 24세 이하</option>
                <option :value=4>25세 이상 29세 이하</option>
                <option :value=5>20세 이상 39세 이하</option>
                <option :value=6>20세 이상 49세 이하</option>
              </select>
              <select class="selectbox-target" id="target_gender">
                <option :value=0 selected disabled hidden>대상 성별</option>
                <option :value=1>성별 무관</option>
                <option :value=2>남성</option>
                <option :value=3>여성</option>
              </select>
              <p id="service-option-notice">다음 주문 페이지에서 설문 대상 상세정보를 기입할 수 있습니다.</p>   
            </li>

            <li class="hasTitleOption">
              <span class="option-title">영어설문</span> 
              <label class="switch">
                <input type="checkbox" class="EngRadio" name="Eng">
                <span class="slider"></span>
              </label>
              <span class="Eng-text">영어설문</span>
            </li>
          
    
        
            <select class="selectbox">
              <option :value=0 selected disabled hidden>대학생 / 대학원생 할인 여부</option>
              <option :value=1>중/고등학생입니다.</option>
              <option :value=2>대학생입니다.</option>
              <option :value=3>대학원생입니다.</option>
              <option :value=4>할인대상이 아닙니다.</option>
            </select>

            <p id="service-option-notice">결제 페이지에서 대학생 및 대학원생임을 인증해야만</p>
            <p id="service-option-notice">할인을 받으실 수 있습니다.</p>
        
            <br>
        
            <div class="show-price-container">
              <span class="service-option-totalprice-word">총 금액</span>
              <span class="service-option-totalprice-price">
                000원</span>
            </div>
        
            <div>
            
              <button class="goServicePay-btn">설문 정보 입력하러 가기</button>
            
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.service-option-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  height: 600px;
  border-radius: 10px;
  margin: auto;
  background-color: #EEEEEE;
  border-radius: 10px;
}
.selectbox {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  margin: 8px;
  padding-left: 5px;
  width: 330px;
  height: 30px;
  background-color: #fafafa;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
.selectbox:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.selectbox-target {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  margin: 4px;
  padding-left: 3px;
  height: 30px;
  background-color: #fafafa;
  font-size: 14px;
  cursor: pointer;
  border: none;
}
#target_age {
  width: 150px;
  margin-left: 10px;
}
#target_gender {
  width: 100px;
}
.hasTitleOption {
  text-align: left;
  margin: 25px 0 20px 0;
  display: block;
  
}
.hasTitleOption .option-title {
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  font-size: 14px;
  font-weight: bolder;
  margin: 10px 0 0 41px;
}
.hasTitleOption .date {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  background-color: #fafafa;
  width: 135px;
  height: 22px;
  margin-left: 6px;
  margin-right: 3px;
  margin-bottom: 6px;
  border: none;
}
.hasTitleOption .date:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.hasTitleOption .time {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  background-color: #fafafa;
  width: 105px;
  height: 22px;
  border: none;
}
.hasTitleOption .time:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.hasTitleOption .Eng-text {
  font-size: 14px;
  color: rgb(137, 135, 135);
  font-weight: lighter;
}
#service-option-notice {
  text-align: left;
  color: rgba(219, 21, 21, 0.822);
  font-size: 11.5px;
  margin: 1px 0 0 42px;
  font-weight: 300;
}
.show-price-container {
  margin-top: 10px;
  padding: 15px;
  text-align: right;
  color:#0CAE02;
}
.show-price-container  .service-option-totalprice-word {
  position: absolute;
  top: 540px;
  left: 160px;
  font-size: 18px;
}
.show-price-container  .service-option-totalprice-price {
  position: absolute;
  top: 533px;
  right: 1px;
  margin: 0 45px 0 0;
  font-size: 25px;
  font-weight: bold;
}
.goServicePay-btn {
  padding: 5px 70px;
  margin-top: 20px;
  color:#0CAE02;
  background-color: #EEEEEE;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.goServicePay-btn:hover{
  color: white;
  background: #0AAB00;
}
.option-target {
  display: flex;
  flex-direction: row;
}


/* Eng switch */
.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
  margin-left: 45px;
  margin-right: 10px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 2.5px;
  border-radius: 50%;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #0CAE02;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(16px);
}
.warn-msg{
  color: rgba(219, 21, 21, 0.822);
  font-weight: 300;
  font-size: 0.7rem;
  text-align: left;
  margin-left: 130px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>