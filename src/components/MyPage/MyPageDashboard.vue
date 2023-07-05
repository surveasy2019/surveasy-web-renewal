<template>
  <div class="mypage-dashboard-container">
    <div class="mypage-dashboard-container-item">
      <p>진행중인 설문</p>
      <h2>n개</h2>
    </div>
    <div class="mypage-dashboard-container-line"></div>
    <div class="mypage-dashboard-container-item">
      <p>완료된 설문</p>
      <h2>n개</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPageDashboard',
  data() {
    return {
      grade: 1
    }
  }
}
</script>

<style>
.mypage-dashboard-container {
  display: flex;
  flex-direction: row;
  width: 75%;
  margin: 40px auto;
  align-items: center;
  background-color: #0AAC00;
  color: white;
  border-radius: 10px;
}
.mypage-dashboard-container-item {
  margin: auto;
  padding: 10px;
}
.mypage-dashboard-container-item h2 {
  font-weight: 700;
}
.mypage-dashboard-container-line {
  width: 1px;
  height: 70px;
  background-color: white;
}
</style>