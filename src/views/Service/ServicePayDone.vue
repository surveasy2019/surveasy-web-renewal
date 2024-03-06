<template>
  <div>
    <ServiceDone />

  </div>
</template>

<script>
import ServiceDone from '@/components/Service/ServiceDone.vue'
export default {
  components :{
    ServiceDone
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>