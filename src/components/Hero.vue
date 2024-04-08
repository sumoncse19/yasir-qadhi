<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

const modules = [Autoplay]

const onSwiper = (swiper) => {
  console.log(swiper)
}
</script>

<template>
  <div class="relative h-[78vh] overflow-hidden w-full rounded-b-3xl border">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="h-full"
      :modules="modules"
    >
      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/quran" class="w-full hover:pl-5 duration-300">
            <div
              class="h-full w-full flex flex-col items-end object-fit-cover bg-no-repeat bg-[length:100%_100%] bg-[url('../assets/image/hero/Hadith_video.png')]"
            >
              <iframe
                class="w-[450px] h-[400px] -translate-x-[30%]"
                src="https://www.youtube.com/embed/ZGEGmBjLP5k?si=nMNcGpXiwt--J62M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/quran" class="w-full hover:pl-5 duration-300">
            <img
              src="../assets/image/hero/banner-1.png"
              alt="Hero Iamge"
              class="absolute top-0 right-0 h-full w-full object-fit-cover"
            />
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/quran" class="w-full hover:pl-5 duration-300">
            <div
              class="h-full w-full flex flex-col justify-center items-end object-fit-cover bg-no-repeat bg-cover bg-[url('../assets/image/hero/Ramadan_video.png')]"
            >
              <iframe
                class="w-[450px] h-[400px] -translate-x-[30%]"
                src="https://www.youtube.com/embed/ZGEGmBjLP5k?si=nMNcGpXiwt--J62M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/salat" class="w-full hover:pl-5 duration-300">
            <img
              src="../assets/image/hero/banner-2.png"
              alt="Hero Iamge"
              class="absolute top-0 right-0 h-full w-full object-fit-cover"
            />
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/quran" class="w-full hover:pl-5 duration-300">
            <div
              class="h-full w-full flex flex-col justify-center object-fit-cover bg-no-repeat bg-cover bg-[url('../assets/image/hero/Human_video.png')]"
            >
              <iframe
                class="w-[450px] h-[400px] translate-x-20"
                src="https://www.youtube.com/embed/ZGEGmBjLP5k?si=nMNcGpXiwt--J62M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link
            to="/lectures/lecture/life-style/heart-matters"
            class="w-full hover:pl-5 duration-300"
          >
            <img
              src="../assets/image/hero/banner-3.png"
              alt="Hero Iamge"
              class="absolute top-0 right-0 h-full w-full object-fit-cover"
            />
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link
            to="/lectures/lecture/life-style/personal-life"
            class="w-full hover:pl-5 duration-300"
          >
            <img
              src="../assets/image/hero/3.png"
              alt="Hero Iamge"
              class="absolute top-0 right-0 h-full w-full object-fit-cover"
            />
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/quran" class="w-full hover:pl-5 duration-300">
            <div
              class="h-full w-full flex flex-col justify-center items-center object-fit-cover bg-no-repeat bg-cover bg-[url('../assets/image/hero/Life_style.png')]"
            >
              <iframe
                class="w-[450px] h-[400px]"
                src="https://www.youtube.com/embed/ZGEGmBjLP5k?si=nMNcGpXiwt--J62M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/life-style/sin" class="w-full hover:pl-5 duration-300">
            <img
              src="../assets/image/hero/banner-4.png"
              alt="Hero Iamge"
              class="absolute top-0 right-0 h-full w-full object-fit-cover"
            />
          </router-link>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="relative h-full">
          <router-link to="/lectures/lecture/jakat" class="w-full hover:pl-5 duration-300">
            <img
              src="../assets/image/hero/4.png"
              alt="Hero Iamge"
              class="absolute top-0 right-0 h-full w-full object-fit-cover"
            />
          </router-link>
        </div>
      </swiper-slide>
      ...
    </swiper>
  </div>
</template>

<style scoped>
button {
  color: #090909;
  padding: 0.5em 1.5em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow:
    6px 6px 12px #c5c5c5,
    -6px -6px 12px #ffffff;
}

button:hover {
  border: 1px solid white;
}

button:active {
  box-shadow:
    4px 4px 12px #c5c5c5,
    -4px -4px 12px #ffffff;
}
</style>
