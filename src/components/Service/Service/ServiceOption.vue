<template>
  <div class="service-option-container">
    <div class="home-title">
        설문응답서비스
    </div>
    <div class="service-content">
      <div class="content-row">
        <p class="option-title">요구 응답수</p>
            <select class="selectbox" aria-label="Default select example">
                <option :value=0 selected disabled hidden>요구 응답수</option>
                <option :value=1>30명</option>
                <option :value=2>40명</option>
                <option :value=3>50명</option>
                <option :value=4>60명</option>
                <option :value=5>70명</option>
                <option :value=6>80명</option>
                <option :value=7>90명</option>
                <option :value=8>100명</option>
                <option :value=9>120명</option>
                <option :value=10>140명</option>
                <option :value=11>160명</option>
                <option :value=12>180명</option>
                <option :value=13>200명 (최대 응답수)</option>
            </select>
        
                
        <p class="option-title">소요 시간</p>
            <select class="selectbox">
              <option :value=0 selected disabled hidden>소요 시간</option>
              <option :value=1>1분 이내</option>
              <option :value=2>1-3분</option>
              <option :value=3>4-6분</option>
              <option :value=4>7-10분</option>
              <option :value=5>11-15분</option>
              <option :value=6>16-20분</option>
            </select>
      </div>
			
                        
           <!-- 마감 시간 -->
          <div class="content-row">
            <p class="option-title">마감시간 지정</p>
            <div class="col-6">
              <input type="Date" class="input-date"> 
            </div>
            <div class="col-6">
              <input type="time" class="input-time">
            </div>
          </div>
          <p class="warn-msg">*마감날짜와 마감시간 중 공란이 존재할 경우 설문 게시가 어려울 수 있습니다.</p>

          <!-- 설문 대상 타겟팅 -->
          <div class="content-row">
            <p class="option-title">설문 대상</p>
            <div class="col-6">
              <select class="selectbox" id="target_gender" >
                <option :value=0 selected disabled hidden>대상 성별</option>
                <option :value=1>성별 무관</option>
                <option :value=2>남성</option>
                <option :value=3>여성</option>
              </select>
            </div> 

            <div class="col-6">
              <select class="selectbox" id="target_age" >
                <option :value=0 selected disabled hidden>대상 연령</option>
                <option :value=1>연령 무관</option>
                <option :value=2>연령 옵션 선택하기</option>
              </select>
            </div>          

            <div class="col-11" id="checkbox-container" v-if="false">
              <div id="checkbox-row">
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="20-24세"> 
                  <div id="checkbox-text">20-24세</div>
                </div>
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="40-44세">
                  <div id="checkbox-text">40-44세</div>
                </div>
              </div>

              <div id="checkbox-row">
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="25-29세">
                  <div id="checkbox-text">25-29세</div>
                </div>
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="45-49세">
                  <div id="checkbox-text">45-49세</div>
                </div>           
              </div>

              <div id="checkbox-row">
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="30-34세">
                  <div id="checkbox-text">30-34세</div>
                </div>
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="50대">
                  <div id="checkbox-text">50대</div>
                </div>           
              </div>

              <div id="checkbox-row">
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="35-39세">
                  <div id="checkbox-text">35-39세</div>
                </div>
                <div id="checkbox-item">
                  <input v-model="targetAgeOptionList" :true-value="[]" type="checkbox" name="selectedAges" value="60대">
                  <div id="checkbox-text">60대</div>
                </div>           
              </div>
            </div>  
          </div>
          <p class="warn-msg">*다음 주문 페이지에서 설문 대상 상세정보를 기입할 수 있습니다.</p> 

          <div id="blank"></div>          

          <!-- 영어 설문 -->
          <div class="content-row">
            <p class="option-title">영어설문</p>
            <div id="checkbox-item-eng"> 
              <input class="form-check-input" v-model="addENTarget" @click="EngOptionCal" type="checkbox" name="Eng" id="Eng">
              <label id="checkbox-text-eng" for="Eng">영어설문</label>
            </div>            
          </div> 

          <div id="show-price-container">
            <span id="show-price-title">주문 금액</span>
            <span class="service-option-discountprice-price m-0 text-right">000원</span>
          </div>

          <hr id="line">

          <!-- 할인 대상  -->
          <div class="content-row">
            <p class="option-title">대학생 / 대학원생 할인 여부</p>
            <select class="selectbox" id="identity" v-model="priceIdentity">
              <option :value=0 selected disabled hidden>대학생 / 대학원생 할인 여부</option>
              <option :value=1>중/고등학생입니다.</option>
              <option :value=2>대학생입니다.</option>
              <option :value=3>대학원생입니다.</option>
              <option :value=4>할인대상이 아닙니다.</option>
            </select>
          </div>

          <div>
            <span id="show-price-title">할인 금액</span>
            <span class="service-option-discountprice-price m-0 text-right">
              - 000원</span>
          </div>

          <hr id="line">

          <div>
            <span id="show-price-title">결제 금액</span>
            <span class="service-option-totalprice-price m-0 text-right">
              000원</span>
          </div>

        </div>

        <div id="btn-fin">
          <div class="text-center">
            <a class="btn btn-primary w-75">설문 정보 입력하러 가기</a>
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
  padding: 10px;
  width: 90%;
  justify-content: space-around;
  margin: auto;
  margin-top: 30px;
  height: 450px;
  border-radius: 10px;
  background-color: #ecefeb;
  border-radius: 10px;
}

.selectbox {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  
  padding-left: 5px;
  width: 160px;
  height: 30px;
  background-color: #fafafa;
  font-size: 15px;
  border-radius: 10px;
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

.content-row{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.option-title{
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  color: #000000;
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
.content-row .input-date {
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
.content-row .input-date:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.content-row .input-time {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  background-color: #fafafa;
  width: 105px;
  height: 22px;
  border: none;
}
.content-row .input-time:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
</style>