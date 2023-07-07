<template>
  <div class="knowhow-container">
    <div v-if="id == 1"><KnowhowTip1 /></div>
    <div v-if="id == 2"><KnowhowTip2 /></div>
    <div v-if="id == 3"><KnowhowTip3 /></div>
    <div v-if="id == 4"><KnowhowTip4 /></div>
    <div v-if="id == 5"><KnowhowTip5 /></div>
    <div v-if="id == 6"><KnowhowTip6 /></div>
    <div v-if="id == 7"><KnowhowTip7 /></div>
    <div v-if="id == 8"><KnowhowTip8 /></div>
  </div>
</template>

<script>
import KnowhowTip1 from '@/components/KnowHow/KnowhowTip1.vue'
import KnowhowTip2 from '@/components/KnowHow/KnowhowTip2.vue'
import KnowhowTip3 from '@/components/KnowHow/KnowhowTip3.vue'
import KnowhowTip4 from '@/components/KnowHow/KnowhowTip4.vue'
import KnowhowTip5 from '@/components/KnowHow/KnowhowTip5.vue'
import KnowhowTip6 from '@/components/KnowHow/KnowhowTip6.vue'
import KnowhowTip7 from '@/components/KnowHow/KnowhowTip7.vue'
import KnowhowTip8 from '@/components/KnowHow/KnowhowTip8.vue'
export default {
  name: 'KnowHowContent',
  components: {
    KnowhowTip1,
    KnowhowTip2,
    KnowhowTip3,
    KnowhowTip4,
    KnowhowTip5,
    KnowhowTip6,
    KnowhowTip7,
    KnowhowTip8
  },
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>