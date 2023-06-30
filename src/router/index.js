import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Join from '../views/Join/Join'
import JoinDone from '../views/Join/JoinDone'
import Service from '../views/Service/Service'
import ServiceInputForm from '../views/Service/ServiceInputForm'
import ServicePayDone from '../views/Service/ServicePayDone'
import List from '../views/List/List'
import Contact from '../views/Contact/Contact'
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
    path: '/login',
    name: 'Login',
    component: Login
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
    path: '/contact',
    name: 'Contact',
    component: Contact,
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
