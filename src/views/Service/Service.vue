<template>
  <div>
    <button type="button" @click="up">button</button>
    <div class="bottom-sheet" :class="{ 'open': open }">
      <!-- Bottom Sheet 내용 -->
      bottom sheet
    </div>
    <ServiceOptionVue />
    <ServiceActivePanelVue />
    <ServiceDetailVue />
    
    
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
      open : false
    }
  },
  methods: {
    up(){
      this.open = !this.open
    }
  }

}
</script>

<style>
.bottom-sheet {
  position: fixed;
  bottom: -100%; /* 시작 위치 */
  left: 0;
  width: 100%;
  height: 300px; /* Bottom Sheet의 높이 설정 */
  background-color: #f0f0f0;
  transition: bottom 0.3s ease-in-out;
}

.bottom-sheet.open {
  bottom: 0; /* 열렸을 때의 위치 */
}
</style>