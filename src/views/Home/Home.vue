<template>
  <div class="home-container">
    <HomeNavBar />
    <HomeBannerVue />
    <HomeServiceVue />
    <HomeStaticsVue />
    <HomeReviewVue />
  </div>
</template>

<script>
import HomeNavBar from '@/components/Home/HomeNavBar.vue'
import HomeBannerVue from '@/components/Home/HomeBanner.vue'
import HomeServiceVue from '@/components/Home/HomeService.vue'
import HomeStaticsVue from '@/components/Home/HomeStatics.vue'
import HomeReviewVue from '@/components/Home/HomeReview.vue'

export default {
  name: 'MainHome',
  components: { 
    HomeNavBar,
    HomeBannerVue,
    HomeServiceVue,
    HomeStaticsVue,
    HomeReviewVue
  },
  mounted() {
    window.scrollTo(0,0)
  }
}
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
}
</style>