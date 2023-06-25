<template>
  <div class="home-container">
    <HomeBannerVue />
    <HomeServiceVue />
    <HomeStaticsVue />
    <HomeReviewVue />
  </div>
</template>

<script>
import HomeBannerVue from '@/components/Home/HomeBanner.vue'
import HomeServiceVue from '@/components/Home/HomeService.vue'
import HomeStaticsVue from '@/components/Home/HomeStatics.vue'
import HomeReviewVue from '@/components/Home/HomeReview.vue'

export default {
  name: 'Home',
  components: { 
    HomeBannerVue,
    HomeServiceVue,
    HomeStaticsVue,
    HomeReviewVue
  }
}
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
}
</style>