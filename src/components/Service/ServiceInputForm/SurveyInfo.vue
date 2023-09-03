<template>
  <div class="survey-info-container">
    <div class="input-title">설문정보</div>
    <div class="option-border"></div>
    <div class="info-block">
      <div class="info-title">설문 제목</div>
      <input class="info-input" type="text" @change="setSurveyOptions()" v-model="this.title" placeholder="예) 쓰레기 분리수거에 대한 대학생 인식 조사 (40자 이내 권장)" required>
    </div>
    <div class="info-block">
      <div class="info-title">설문 대상 상세 정보 (선택)</div>
      <input class="info-input" type="text" @change="setSurveyOptions()" v-model="this.target" placeholder="예) 재학생, 1인 가구, 특정 서비스 이용 경험이 있는 분">
      <div class="info-warn">*서베이지 패널은 20대 위주로 구성되어 있으며, 특정 상세 설문 대상의 경우,<br>
      해당되는 패널이 적어 설문 응답 수집에 어려움이 있을 수 있다는 점 유의해주시기 바랍니다.</div>
    </div>
    <div class="info-block">
      <div class="info-title">설문 기관</div>
      <input class="info-input" type="text" @change="setSurveyOptions()" v-model="this.institute" placeholder="예) ㅇㅇ학교, ㅁㅁ수업, @@학회, **기업" required>
    </div>
    <div class="info-block">
      <div class="info-title">설문 링크</div>
      <input class="info-input" type="text" @change="setSurveyOptions()" v-model="this.link" placeholder="링크 입력 시 단축 URL이 아니며, 'https://'를 포함한 주소를 입력해주세요." required>
      <div class="info-highlight">링크 확인</div>
    </div>
    <div class="info-block">
      <div class="info-title">설문 참여 시 유의사항 (선택)</div>
      <input class="info-input" @change="setSurveyOptions()" type="text" v-model="this.notice" placeholder="예) PC 참여 권장, 외부 링크 이동 필요 등">
    </div>
    
  </div>
</template>

<script>
import store from '@/store';
export default {
  data() {
    return {
      title: '',
      target: '',
      institute: '',
      link: '',
      notice: '',
    }
  },

  methods : {
    setSurveyOptions(){
      store.commit('saveSurveyInputInfo', {
        title : this.title,
        tarInput : this.target,
        institute : this.institute,
        link : this.link,
        notice : this.notice
      })
    }
  }
}
</script>

<style>
.survey-info-container{
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px;
  padding: 20px;
  padding-left: 30px;
  background-color: #fafafa;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.info-block{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.survey-info-container .info-input {
  margin-top: 5px;
  width: 85%;
  height: 40px;
  padding-left: 7px;
  color: #a0a0a0;
  background-color: white;
  border: solid 1px #dadada;
  border-radius: 5px;
}
.info-warn{
  text-align: left;
  color: gray;
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: 10px;
}
.info-highlight{
  text-align: left;
  font-size: 0.9rem;
  color: #0CAE02;
  font-weight: 600;
  margin-left: 3px;
  margin-top: 5px;
}
</style>