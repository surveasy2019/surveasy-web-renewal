<template>
  <div class="mypage-order-container">
    <h1>마이페이지</h1>
    <MyPageNavigatorVue />
    <MyPageOrderVue />
  </div>
</template>

<script>
import MyPageNavigatorVue from '@/components/MyPage/MyPageNavigator.vue'
import MyPageOrderVue from '@/components/MyPage/MyPageOrder/MyPageOrder.vue'

export default {
  name: 'MyPageMyOrder',
  components: {
    MyPageOrderVue,
    MyPageNavigatorVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>
.mypage-order-container {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}
</style>