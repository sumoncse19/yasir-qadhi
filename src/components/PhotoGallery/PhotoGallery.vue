<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import EventIcon from '@/components/Base/Icon/EventIcon.vue'

const modules = [Autoplay, EffectFade]

const onSwiper = (swiper) => {
  console.log(swiper)
}

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import img1 from '@/assets/image/gallery/1.jpg'
import img2 from '@/assets/image/gallery/2.jpg'
import img3 from '@/assets/image/gallery/3.jpg'
import img4 from '@/assets/image/gallery/4.jpg'
import img5 from '@/assets/image/gallery/5.jpg'
import img6 from '@/assets/image/gallery/6.jpg'
import img7 from '@/assets/image/gallery/7.jpg'
import img8 from '@/assets/image/gallery/8.jpg'
import img9 from '@/assets/image/gallery/9.jpg'
import img10 from '@/assets/image/gallery/10.jpg'
import img11 from '@/assets/image/gallery/11.png'

const allGallery = ref([
  {
    gallery: [
      { id: 1, src: img1, alt: '' },
      { id: 2, src: img2, alt: '' },
      { id: 3, src: img3, alt: '' },
      { id: 4, src: img4, alt: '' },
      { id: 5, src: img5, alt: '' },
      { id: 6, src: img6, alt: '' },
      { id: 7, src: img7, alt: '' },
      { id: 8, src: img8, alt: '' },
      { id: 9, src: img9, alt: '' },
      { id: 10, src: img10, alt: '' },
      { id: 11, src: img11, alt: '' }
    ],
    eventDetails: {
      eventName: 'London STEM Women Graduate Careers Event',
      eventDate: 'Wed, 21 Feb 2024 12:00 - 16:30 GMT',
      organizedBy: 'STEM Women',
      location: 'Queen Elizabeth II Centre',
      eventDescription: `Students and recent graduates...do not miss out on this incredible FREE opportunity! Join us at the fantastic QEII Centre venue in London to network with outstanding graduate employers including...`
    }
  },
  {
    gallery: [
      { id: 1, src: img10, alt: '' },
      { id: 2, src: img9, alt: '' },
      { id: 3, src: img3, alt: '' },
      { id: 4, src: img4, alt: '' },
      { id: 5, src: img6, alt: '' },
      { id: 6, src: img5, alt: '' },
      { id: 7, src: img7, alt: '' },
      { id: 8, src: img1, alt: '' },
      { id: 9, src: img2, alt: '' },
      { id: 10, src: img8, alt: '' },
      { id: 11, src: img11, alt: '' }
    ],
    eventDetails: {
      eventName: 'London STEM Women Graduate Careers Event',
      eventDate: 'Wed, 21 Feb 2024 12:00 - 16:30 GMT',
      organizedBy: 'STEM Women',
      location: 'Queen Elizabeth II Centre',
      eventDescription: `Students and recent graduates...do not miss out on this incredible FREE opportunity! Join us at the fantastic QEII Centre venue in London to network with outstanding graduate employers including...`
    }
  },
  {
    gallery: [
      { id: 1, src: img6, alt: '' },
      { id: 2, src: img9, alt: '' },
      { id: 3, src: img8, alt: '' },
      { id: 4, src: img4, alt: '' },
      { id: 5, src: img2, alt: '' },
      { id: 6, src: img7, alt: '' },
      { id: 7, src: img1, alt: '' },
      { id: 8, src: img5, alt: '' },
      { id: 9, src: img3, alt: '' },
      { id: 10, src: img11, alt: '' },
      { id: 11, src: img10, alt: '' }
    ],
    eventDetails: {
      eventName: 'London STEM Women Graduate Careers Event',
      eventDate: 'Wed, 21 Feb 2024 12:00 - 16:30 GMT',
      organizedBy: 'STEM Women',
      location: 'Queen Elizabeth II Centre',
      eventDescription: `Students and recent graduates...do not miss out on this incredible FREE opportunity! Join us at the fantastic QEII Centre venue in London to network with outstanding graduate employers including...`
    }
  }
])
</script>

<template>
  <DefaultLayout>
    <section>
      <div class="bg-slate-300 h-24">
        <p class="ms-2">Home > Photo Gallery</p>
        <h2 class="ms-2 text-xl lg:text-3xl font-bold p-6 text-[#22a474]">Photo Gallery</h2>
      </div>

      <swiper
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        :spaceBetween="30"
        :autoplay="{
          delay: 2500
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="h-full"
        :modules="modules"
      >
        <template v-for="(singleGallery, index) in allGallery" :key="index">
          <swiper-slide>
            <div class="container flex flex-col space-y-12">
              <div class="mt-16 mx-auto max-w-5xl md:columns-3 lg:columns-4 space-y-5">
                <div v-for="image in singleGallery.gallery" :key="image.id">
                  <img :src="image.src" alt="" />
                </div>
              </div>

              <div class="text-center bg-gray-300 p-4 rounded-lg shadow-xl flex flex-col space-y-3">
                <div class="text-4xl flex justify-center items-baseline space-x-5">
                  <EventIcon class="w-10 h-10" />
                  <div>
                    <span class="font-bold"> Event Name</span>:
                    {{ singleGallery.eventDetails.eventName }}
                  </div>
                </div>
                <p class="text-2xl">
                  <span class="font-bold">Event Date</span>:
                  {{ singleGallery.eventDetails.eventDate }}
                </p>
                <div class="flex justify-around">
                  <div>
                    <span class="font-bold"> Location: </span>
                    {{ singleGallery.eventDetails.location }}
                  </div>
                  <div>
                    <span class="font-bold"> Organize By: </span>
                    {{ singleGallery.eventDetails.organizedBy }}
                  </div>
                </div>
                <div>
                  <span class="font-bold"> Event Description: </span>
                  {{ singleGallery.eventDetails.eventDescription }}
                </div>
              </div>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </section>
  </DefaultLayout>
</template>

<style scoped></style>
