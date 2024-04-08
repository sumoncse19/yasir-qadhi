<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
import 'swiper/css'

const isShowLiveStreaming = ref(true)
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="py-[69px]">
        <slot />
        <!-- This is where the page content will be rendered -->
      </div>
    </main>

    <!-- Footer content -->
    <Footer />

    <div v-if="isShowLiveStreaming" class="fixed bottom-0 right-0 z-30">
      <div class="bg-[#22a474] text-white cursor-pointer flex justify-between items-center px-3">
        <div class="font-bold text-lg">Live Streaming</div>
        <div @click="isShowLiveStreaming = !isShowLiveStreaming">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-4">
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <iframe
        class="w-full min-h-[250px]"
        src="https://www.youtube.com/embed/yoTLD2m9XLM?si=Z0uEm2YpjAvmjMUS"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div
        class="bg-[#22a474] text-white font-bold cursor-pointer flex justify-between px-3"
        @click="isShowLiveStreaming = !isShowLiveStreaming"
      >
        <router-link to="/event/livestreaming" class="w-full hover:pl-5 duration-300 text-lg"
          >View Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<style>
/* Add your CSS styles for the layout here */
</style>
