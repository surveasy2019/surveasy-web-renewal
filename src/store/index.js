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
                ['', '전 연령', '20-24세', '25-29세', '30-34세', '35-39세', '40-44세', '45-49세', '50대', '60대'],
            ],
            
        },
        
        surveyOption : {
            headCount : 0,
            spendTime : 0,
            endDate : '',
            endTime : '',
            tarGender : '',
            tarAge : [],
            english : 0,
            priceIdentity : 0,
            price : 0,
            priceDiscounted : 0,
            
            title : '',
            tarInput : '',
            institute : '',
            link : '',
            notice : '',
            accountName : ''

        }
    },
    
    mutations : {
        saveSurveyOption(state, payload) {
            state.surveyOption.headCount = payload.headCount,
            state.surveyOption.spendTime = payload.spendTime,
            state.surveyOption.endDate = payload.endDate,
            state.surveyOption.endTime = payload.endTime,
            state.surveyOption.tarGender = payload.targetGender,
            state.surveyOption.tarAge = payload.targetAge,
            state.surveyOption.english = payload.targetEng,
            state.surveyOption.priceIdentity = payload.identity,
            state.surveyOption.price = payload.price,
            state.surveyOption.priceDiscounted = payload.priceDiscounted
        },

        saveSurveyInputInfo(state, payload) {
            state.surveyOption.title = payload.title,
            state.surveyOption.tarInput = payload.tarInput,
            state.surveyOption.institute = payload.institute,
            state.surveyOption.link = payload.link,
            state.surveyOption.notice = payload.notice
        },

        saveAccountName (state, payload){
            state.surveyOption.accountName = payload.accountName
        }
    }
})