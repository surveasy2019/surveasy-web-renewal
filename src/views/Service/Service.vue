<template>
  <div>
    <ServiceDetailVue v-if="this.pageChange == 0"/>
    <button type="button" @click="sheet" class="order-btn" v-if="this.pageChange == 0">주문하기</button>
    <div class="bottom-sheet" :class="{ 'open': open }">
      <div class="close-btn"><button class="down-btn" @click="sheet">X</button></div>
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
  },
  mounted() {
    window.scrollTo(0,0)
  }

}
</script>

<style>
.bottom-sheet {
  position: fixed;
  left: 0;
  padding-top: 10px;
  padding-bottom: 20px;
  width: 100%;
  min-width: 100%;
  max-height: 90%;
  overflow-y: auto;
  background-color: #f0f0f0;
  transition: bottom 0.3s ease-in-out;
  z-index: 999;
}
.order-btn{
  position: sticky;
  bottom: 80px;
  padding: 12px 70px;
  width: 99%;
  background-color: #0CAE02;
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
@media (max-width: 1000px) {
  .sheet-container {
    display: flex;
    flex-direction: column;
  }
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
.down-btn{
  color: white;
  background-color: rgb(146, 146, 146);
}
</style>