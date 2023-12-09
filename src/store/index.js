import { createStore } from "vuex";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import createPersistedState from 'vuex-persistedstate'

// state, getters, mutations, actions, modules
export default createStore({
  state: {
    isLoggedIn : false,
    currentUser : null,
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
      priceTable:       
      [ [9000,	9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 36000, 42000, 48000, 54000, 60000],
        [9000,	9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 36000, 42000, 48000, 54000, 60000],
        [27000, 27000, 36000, 45000, 54000, 63000, 72000,	81000, 90000, 108000, 126000, 144000, 162000, 180000],
        [54000, 54000, 72000, 90000, 108000, 126000, 144000, 162000, 180000, 216000, 252000, 288000, 324000, 360000],
        [90000, 90000, 120000, 150000, 180000, 210000, 240000, 270000, 300000, 360000, 420000, 480000, 540000, 600000],
        [135000, 135000, 180000, 225000, 270000, 315000, 360000, 405000, 450000, 540000, 630000, 720000, 810000, 900000],
        [180000, 180000, 240000, 300000, 360000, 420000, 480000, 540000, 600000, 720000, 840000, 960000, 1080000, 1200000] ],
      requireDataTable: ['30명', '40명', '50명', '60명', '70명', '80명', '90명', '100명', '120명', '140명', '160명', '180명', '200명'],
    },
    maps: {
      surveyStatusMap: {
        "CREATED" : 0, "WAITING" : 1, "IN_PROGRESS" : 2, "DONE" : 3
      },
      headcountMap: {
        "HEAD" : 0, "HEAD_30" : 1, "HEAD_40" : 2, "HEAD_50" : 3, "HEAD_60" : 4, "HEAD_70" : 5, "HEAD_80" : 6, 
        "HEAD_90" : 7, "HEAD_100" : 8, "HEAD_120" : 9, "HEAD_140" : 10, "HEAD_160" : 11, "HEAD_180" : 12, "HEAD_200" : 13
      },
      spendTimeMap: {
        "TIME" : 0, "TIME_0" : 1, "TIME_1_3" : 2, "TIME_4_6" : 3, "TIME_7_10" : 4, "TIME_11_15" : 5, "TIME_16_20" : 6
      },
      languageMap: {
        "KOR" : 1, "ENG": 2
      },
      identityMap: {
        "IDENTITY" : 0, "MID_HIGH" : 1, "UNDERGRADUATE" : 2, "GRADUATE" : 3, "NONE" : 4
      },
      targetAgeMap: {
        "AGE": -1, "All" : 0, "AGE_20_24" : 1, "AGE_25_29" : 2, "AGE_30_34" : 3, "AGE_35_39" : 4, 
        "AGE_40_44" : 5, "AGE_45_49" : 6, "AGE_50_59" : 7, "AGE_60_69" : 8
      },
      targetGenderMap: {
        "GENDER": 0, "ALL" : 1, "MALE" : 2, "FEMALE" : 3
      }
    },

    surveyOption : {
      headcount : "",
      spendTime : "",
      endDate : '',
      endTime : '',
      targetGender : '',
      targetAge : [],
      targetEng : 0,
      language: "",
      identity : "",
      price : 0,
      priceDiscounted : 0,
      
      title : '',
      targetInput : '',
      institute : '',
      link : '',
      notice : '',
      accountName : ''
    },
    firebaseAuthErrorMsg : {
      "auth/wrong-password" : "비밀번호가 맞지 않습니다.",
      "auth/user-not-found" : "가입되어 있지 않은 이메일입니다.",
      "auth/invalid-email" : "유효하지 않은 형식입니다."
    }
  },

  mutations: {
    setCurrentUserMutation(state, payload) {
      state.currentUser = payload
      console.log(state.currentUser)
      state.isLoggedIn = true
    },
    logoutMutation(state) {
      console.log('logoutMutation')
      state.currentUser = null
      state.isLoggedIn = false
    },
    saveSurveyOption(state, payload) {
      state.surveyOption.headcount = payload.headcount,
      state.surveyOption.spendTime = payload.spendTime,
      state.surveyOption.endDate = payload.endDate,
      state.surveyOption.endTime = payload.endTime,
      state.surveyOption.targetGender = payload.targetGender,
      state.surveyOption.targetAge = payload.targetAge,
      state.surveyOption.targetEng = payload.targetEng,
      state.surveyOption.language = (payload.targetEng == 1) ? "KOR" : "ENG"
      state.surveyOption.identity = payload.identity,
      state.surveyOption.price = payload.price,
      state.surveyOption.priceDiscounted = payload.priceDiscounted
    },
    saveSurveyInputInfo(state, payload) {
      state.surveyOption.title = payload.title,
      state.surveyOption.targetInput = payload.targetInput,
      state.surveyOption.institute = payload.institute,
      state.surveyOption.link = payload.link,
      state.surveyOption.notice = payload.notice
    },
    saveAccountName (state, payload){
      state.surveyOption.accountName = payload.accountName
    }
  },

  actions: {
    async setCurrentUser({state, commit}, payload){
      console.log('setCurrentUser in Store')
      const db = getFirestore()
      const docRef = doc(db, "userData", payload['payload'].toString())
      await getDoc(docRef)
        .then((data) => {
          commit('setCurrentUserMutation',data.data())
          console.log(data.data())
        })
    },

    logout({commit}){
      console.log('logoutAction')
      commit('logoutMutation')
    }
  },
  plugins: [
    createPersistedState({
      paths: ["isLoggedIn", "currentUser"]
    })
  ]
});