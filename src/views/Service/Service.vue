<template>
  <div>
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
  name: 'Service',
  components: {
    ServiceOptionVue,
    ServiceDetailVue,
    ServiceActivePanelVue
  }

}
</script>

<style>

</style>