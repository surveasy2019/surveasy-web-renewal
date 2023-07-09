<template>
    <div class="pay-info-container">
        <div class="input-title">결제 방법</div>
        <div class="option-border"></div>
        <div class="pay-info-title">입금 계좌<br>
            카카오뱅크 3333-11-5235460 (송다예)</div>
        <input class="info-input" type="text" placeholder="입금자명">
        <div><button class="pay-btn" @click="donePayment">결제하기</button></div>
    </div>
</template>

<script>
export default {
    methods:{
        donePayment(){
            this.$router.push("/service/paydone")
        }
    }
}
</script>

<style>
.pay-info-container {
    display: flex;
    flex-direction: column;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 30px;
    padding: 20px;
    padding-left: 30px;
    background-color: #fafafa;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

.pay-info-container .info-input {
    margin-top: 10px;
    width: 85%;
    height: 40px;
    padding-left: 7px;
    color: #a0a0a0;
    background-color: white;
    border: solid 1px #dadada;
    border-radius: 5px;
}

.pay-info-title{
    text-align: left;
    font-size: 1rem;
    color: black;
    font-weight: 600;
    margin-top: 15px;
}
.pay-btn {
  width: 80%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #0CAE02;
  margin-top: 15px;
  background-color: #ffffff;
  border: 1px solid #0CAE02;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}

.pay-btn:hover {
  color: white;
  background: #0AAB00;
}

</style>