<template>
  <div class="mypage-withdraw-container">
    <h1>회원 탈퇴</h1>
    <MyPageWithdrawInputVue />
  </div>
</template>

<script>
import MyPageWithdrawInputVue from '@/components/MyPage/MyPageWithdraw/MyPageWithdrawInput.vue'

export default {
  name: 'MyPageWithdraw',
  components: {
    MyPageWithdrawInputVue
  }
}
</script>

<style>
.mypage-withdraw-container {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}
</style>