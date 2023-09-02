import { createStore } from "vuex";

export default createStore({
    state: {

        tables : {
            priceTextTable: [
                ['', '30명', '40명', '50명', '60명', '70명', '80명', '90명', '100명', '120명', '140명', '160명', '180명', '200명'],
                ['', '1분 이내', '1~3분', '4~6분', '7~10분', '11~15분', '16~20분'],
                ['', '18~24시간', '24~36시간', '36~48시간', '48~72시간', '72시간~168시간'],
                ['선택 안함', '영어 설문 (50명 이하)', '영어 설문 (50명 초과)'],
                ['', '중/고등학생 할인', '대학생 할인', '대학원생 할인', '할인 대상이 아닙니다.'],
            ],
            targetingTable: [
                ["", "연령 무관", "연령 옵션 선택"],
                ['', '성별 무관', '남성', '여성'],
                ['', '전 연령', '20대 (1994~2003년생)', '20세 이상 24세 이하', '25세 이상 29세 이하', '20세 이상 39세 이하', '20세 이상 49세 이하'],
            ],
        },
        
        surveyOption1 : {
            headCount : 0,
            spendTime : 0,
            endDate : '',
            endTime : '',
            targetGender : 0,
            targetAge : 0,
            targetEng : 0,
            identity : 0,
            price : 0
        }
    },

    mutations : {
        saveSurveyOption(state, payload) {
            state.surveyOption1.headCount = payload.headCount,
            state.surveyOption1.spendTime = payload.spendTime,
            state.surveyOption1.endDate = payload.endDate,
            state.surveyOption1.endTime = payload.endTime,
            state.surveyOption1.targetGender = payload.targetGender,
            state.surveyOption1.targetAge = payload.targetAge,
            state.surveyOption1.targetEng = payload.targetEng,
            state.surveyOption1.identity = payload.identity,
            state.surveyOption1.price = payload.price
        }
    }
})