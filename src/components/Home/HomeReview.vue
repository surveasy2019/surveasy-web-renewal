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
          <slide v-for="review in reviewList" :key="review.title">
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

                <div class="home-review-carousel-item-contents">{{review.contents}}</div>
                <div class="home-review-carousel-item-title">"{{review.title}}" 설문을 의뢰한</div>
                <div class="home-review-carousel-item-name">{{review.name}}님</div>
                <div class="home-review-carousel-item-date">{{review.date}}</div>
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

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
      reviewList: [
        { grade: 5, 
          contents: "서베이지 왕왕 감사합니다 진짜 사랑해요♥️ 연구보고서 제출 기한이 얼마 남지 않아서 촉박하게 설문을 돌려야했는데 이렇게 빨리, 또 이렇게 저렴하게 설문 응답을 왕창 받을 수 있다니!!! 이건 대학생, 대학원생을 위한 혁신이에요!!!",
          title: "OOO설문제목OOOOOO설문제목OOO",
          name: "정O경",
          date: "2023.06.23"
        },
        { grade: 4, 
          contents: "서베이지 덕분에 표본을 빠르게 모을 수 있었습니다. 다음에도 또 이용하게 될 것 같아요. ^.^",
          title: "OOO설문 제목OOO",
          name: "OOO",
          date: "2023.06.23"
        },
        { grade: 3, 
          contents: "의뢰 드린지 하루도 못돼서 완료해주셨어요 감사합니다! 처음 이용해봤는데 화력 너무 좋아요~",
          title: "OOO설문 제목OOO",
          name: "OOO",
          date: "2023.06.23"
        },
      ]
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