<template>
  <div>
    <ServiceDetailVue v-if="this.pageChange == 0"/>
    <button type="button" @click="sheet" class="order-btn" v-if="this.pageChange == 0">주문하기</button>
    <div class="bottom-sheet" :class="{ 'open': open }">
      <div class="close-btn"><button @click="sheet">내리기</button></div>
      <div class="sheet-container"> 
        <div class="item" :style="{ flex: item1Width }"><ServiceActivePanelVue /></div>
        <div class="item" :style="{ flex: item2Width }"><ServiceOptionVue /></div>
      </div>  
      
    </div>
  </div>

  
</template>

<script>
import ServiceOptionVue from '@/components/Service/Service/ServiceOption.vue'
import ServiceDetailVue from '@/components/Service/Service/ServiceDetail.vue'
import ServiceActivePanelVue from '@/components/Service/Service/ServiceActivePanel.vue'

export default {
  name: 'ServiceContainer',
  components: {
    ServiceOptionVue,
    ServiceDetailVue,
    ServiceActivePanelVue
  },
  data(){
    return{
      pageChange: 0,
      open : false,
      item1Width : 1.5,
      item2Width : 2
    }
  },
  methods: {
    sheet(){
      this.open = !this.open
    },
    
    nextPage(){
      this.pageChange = 1
      this.open = false
      this.$router.push("/service/inputform")
    }
  }

}
</script>

<style>
.bottom-sheet {
  position: fixed;
  bottom: -100%; /* 시작 위치 */
  left: 0;
  padding-top: 10px;
  width: 100%;
  min-width: 100%;
  height: 600px;
  background-color: #f0f0f0;
  transition: bottom 0.3s ease-in-out;
  z-index: 999;
}
.order-btn{
  position: sticky;
  bottom: 80px;
  padding: 10px 70px;
  width: 700px;
  background-color:#ffffff;
  color: #000000;
  margin-top: 10px;
  border: 1.5px solid #0CAE02;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.sheet-container{
  display: flex;
}
.bottom-sheet.open {
  bottom: 0; /* 열렸을 때의 위치 */
}
.goServicePay-btn {
  padding: 10px 70px;
  color:#0CAE02;
  margin-top: 20px;
  background-color: #EEEEEE;
  border: 1.5px solid #0CAE02;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.goServicePay-btn:hover{
  color: white;
  background: #0AAB00;
}
.close-btn{
  text-align: right;
  margin-right: 7%;
}
</style>