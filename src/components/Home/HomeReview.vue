<template>
  <div class="home-review-container">
    <div class="home-title">
        이미 많은 분들이 이용 중이에요
    </div>

    <div class="home-sub-title">
      각기 다른 조작물을 사용하여 AB테스트를 하려는 경우에도, <br>
      대학원생의 예비조사 혹은 본조사에서도,<br>
      취업 면접을 준비하면서도,<br>
    </div>

    <div class="home-review-item-container">
      <div class="home-review-slider">
        <carousel :items-to-show="2" :snap-align="center" :wrap-around="true" :autoplay="2000">
          <slide v-for="review in reviewList" :key="review.id">
            <div class="home-review-carousel-item">
              <figure class="home-review-carousel-item-figure">
                <div class="home-review-carousel-item-grade">
                  <img v-if="review.grade<1" src="@/assets/home/review/restar.png" width="20" />
                  <img v-if="review.grade>=1" src="@/assets/home/review/refullstar.png" width="20" />
                  <img v-if="review.grade<2" src="@/assets/home/review/restar.png" width="20" />
                  <img v-if="review.grade>=2" src="@/assets/home/review/refullstar.png" width="20" />
                  <img v-if="review.grade<3" src="@/assets/home/review/restar.png" width="20" />
                  <img v-if="review.grade>=3" src="@/assets/home/review/refullstar.png" width="20" />
                  <img v-if="review.grade<4" src="@/assets/home/review/restar.png" width="20" />
                  <img v-if="review.grade>=4" src="@/assets/home/review/refullstar.png" width="20" />
                  <img v-if="review.grade<5" src="@/assets/home/review/restar.png" width="20" />
                  <img v-if="review.grade>=5" src="@/assets/home/review/refullstar.png" width="20" />
                </div>

                <div class="home-review-carousel-item-contents">{{review.content}}</div>
                <div class="home-review-carousel-item-title">"{{review.surveyTitle}}" 설문을 의뢰한</div>
                <div class="home-review-carousel-item-name">{{review.username.substring(0, review.username.length - 1) + "*"}}님</div>
                <div class="home-review-carousel-item-date">{{review.createdAt}}</div>
              </figure>
            </div>
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
      
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from 'axios'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      reviewList: []
    }
  },
  mounted() {
    this.listReview()
  },  
  methods: {
    async listReview() {
      try {
        const response = await axios.get("https://gosurveasy.co.kr/review/home")
        this.reviewList = response.data.homeReviewList
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.home-review-container {
  width: 100%;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;
}
.home-review-item-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.home-review-container .home-title{
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: 700;
  text-align: left;
  margin-left: 15px;
}
.home-sub-title{
  margin-bottom: 25px;
  font-size: 15px;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
  margin-left: 15px;
}
.home-review-slider {
  width: 97%;
  height: 400px;
}
.home-review-carousel-item {
  width: 92%;
  height: 100%;
  padding: 20px 0 20px 0;
  background-color: #F0F0F0;
  border-radius: 10px;
  font-size: 14px;
}
.home-review-carousel-item-contents {
  width: 100%;
  margin-top: 10px;
  text-align: left;
}
.home-review-carousel-item-title {
  margin-top: 20px;
  color:#757272;
  font-size: 13px;
  text-align: right;
} 
.home-review-carousel-item-name {
  margin-top: 6px;
  color:#757272;
  font-size: 14px;
  text-align: right;
}
.home-review-carousel-item-date {
  margin-top: 6px;
  color:#757272;
  font-size: 14px;
  text-align: right;
}
</style>