<template>
  <div class="knowhow-container">
    <KnowhowList />
  </div>
</template>

<script>

import KnowhowList from '@/components/KnowHow/KnowhowList.vue'
export default {
  name: 'KnowHowContainer',
  components: {
    KnowhowList
  }
}
</script>

<style>
.knowhow-container{
  margin-bottom: 70px;
}
</style>