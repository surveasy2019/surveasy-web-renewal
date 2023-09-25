// import { doc, getDoc, getFirestore } from 'firebase/firestore'

// const loginState = {
//   state: {
//     isLoggedIn : false,
//     currentUser : null
//   },

//   mutations: {
//     setCurrentUserMutation(state, payload) {
//       state.currentUser = payload
//     },
//     logoutMutation(state) {
//       state.currentUser = null
//       state.isLoggedIn = false
//     }
//   },

//   actions:{
//     async setCurrentUser({state, commit}, payload){
      
//       const db = getFirestore()
//       const docRef = doc(db, "userData", payload['payload'].toString())
//       const docSnap = await getDoc(docRef)
//         .then((data) => {
//           commit('setCurrentUserMutation',data.data())
//           console.log(docSnap.data());
//           console.log('----');
//           console.log(data.data());
//         })
      
//     },

//     logout({commit}){
//       commit('logoutMutation')
//     }
//   }
// }

// export default loginState;