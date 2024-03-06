<template>
  <div class="list-container">
    <ListListVue />
  </div>
</template>

<script>
import ListListVue from '@/components/List/ListList.vue'

export default {
  name: 'SurveyList',
  components: {
    ListListVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>

</style>