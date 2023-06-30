import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home'
import HomeBrandStory from '../views/Home/HomeBrandStory'
import HomeContact from '../views/Home/HomeContact'
import Login from '../views/Login/Login'
import Service from '../views/Service/Service'
import ServiceInputForm from '../views/Service/ServiceInputForm'
import ServicePayDone from '../views/Service/ServicePayDone'
import List from '../views/List/List'
import KnowHow from '../views/KnowHow/KnowHow'
import MyPage from '../views/MyPage/MyPage'
import MyPageOrder from '../views/MyPage/MyPageMyInfo'
import MyPageMyInfo from '../views/MyPage/MyPageOrder'

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
    path: '/mypage/myinfo',
    name: 'MyPageMyInfo',
    component: MyPageMyInfo
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
