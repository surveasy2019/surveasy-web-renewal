<template>
  <div class="home-banner-container">
    <div class="home-banner-slider">
      <carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
        <slide v-for="img in imgList" :key="img.src">
          <div class="home-banner-carousel_item">
            <figure>
              <img :src="img.src" />
            </figure>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      imgList: [
        { src: require("@/assets/home/banner/img_banner_1.png") },
        { src: require("@/assets/home/banner/img_banner_2.png") },
        { src: require("@/assets/home/banner/img_banner_3.png") },
      ]
    }
    
  }
}
</script>

<style>
.home-banner-container {
  width: 100%;
  justify-content: space-around;
}
.home-banner-carousel_item {
  width: 100%;
}
.home-banner-carousel_item figure {
  margin: 0;
}
.home-banner-carousel_item img {
  width: 100%;
  object-fit: scale-down;
}
</style>