import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home'
import HomeBrandStory from '../views/Home/HomeBrandStory'
import HomeContact from '../views/Home/HomeContact'
import Login from '../views/Login/Login'
import FindPw from '../views/Login/FindPw'
import Join from '../views/Join/Join'
import JoinDone from '../views/Join/JoinDone'
import Service from '../views/Service/Service'
import ServiceInputForm from '../views/Service/ServiceInputForm'
import ServicePayDone from '../views/Service/ServicePayDone'
import List from '../views/List/List'
import KnowHow from '../views/KnowHow/KnowHow'
import KnowHowContent from '../views/KnowHow/KnowHowContent'
import MyPage from '../views/MyPage/MyPage'
import MyPageOrder from '../views/MyPage/MyPageOrder'
import MyPagePoint from '../views/MyPage/MyPagePoint'
import MyPageReview from '../views/MyPage/MyPageReview/MyPageReview'
import MyPageReviewPost from '../views/MyPage/MyPageReview/Review/MyPageReviewPost'
import MyPageReviewPostDone from '../views/MyPage/MyPageReview/Review/MyPageReviewPostDone'
import MyPageMyInfo from '../views/MyPage/MyPageMyInfo'
import MyPageWithdraw from '../views/MyPage/MyPageWithdraw/MyPageWithdraw'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home/brandstory',
    name: 'HomeBrandStory',
    component: HomeBrandStory,
  },
  {
    path: '/home/contact',
    name: 'HomeContact',
    component: HomeContact,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/findpw',
    name: 'FindPw',
    component: FindPw
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/join/done',
    name: 'JoinDone',
    component: JoinDone
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/service/inputform',
    name: 'ServiceInputForm',
    component: ServiceInputForm
  },
  {
    path: '/service/paydone',
    name: 'ServicePayDone',
    component: ServicePayDone
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/knowhow',
    name: 'KnowHow',
    component: KnowHow,
  },
  {
    path: '/knowhowcontent/:id',
    name: 'KnowHowContent',
    component: KnowHowContent,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/mypage/order',
    name: 'MyPageOrder',
    component: MyPageOrder
  },
  {
    path: '/mypage/point',
    name: 'MyPagePoint',
    component: MyPagePoint
  },
  {
    path: '/mypage/review',
    name: 'MyPageReview',
    component: MyPageReview
  },
  {
    path: '/mypage/review/post/:id/:title',
    name: 'MyPageReviewPost',
    component: MyPageReviewPost
  },
  {
    path: '/mypage/review/post/done',
    name: 'MyPageReviewPostDone',
    component: MyPageReviewPostDone
  },
  {
    path: '/mypage/myinfo',
    name: 'MyPageMyInfo',
    component: MyPageMyInfo
  },
  {
    path: '/mypage/withdraw',
    name: 'MyPageWithdraw',
    component: MyPageWithdraw
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
