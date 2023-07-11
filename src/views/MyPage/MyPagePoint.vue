<template>
  <div class="mypage-point-container">
    <h1>마이페이지</h1>
    <MyPageNavigatorVue />
    <MyPagePointVue />
  </div>
</template>

<script>
import MyPageNavigatorVue from '@/components/MyPage/MyPageNavigator.vue'
import MyPagePointVue from '@/components/MyPage/MyPagePoint/MyPagePoint.vue'

export default {
  name: 'MyPagePoint',
  components: {
    MyPagePointVue,
    MyPageNavigatorVue
  }
}
</script>

<style>
.mypage-point-container {
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 0;
}
</style>