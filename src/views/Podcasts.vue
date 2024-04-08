<template>
  <DefaultLayout>
    <img
      src="./../assets/image/podcast-banner-1.png"
      alt="podcast-banner"
      class="w-full object-cover"
    />
    <div class="py-[30px] px-[5%] bg-slate-100">
      <img src="" alt="" />
      <h1 class="text-3xl text-center font-bold uppercase text-[#22a474] pb-3">Podcasts</h1>
      <!-- <p class="text-center">Coming soon ....</p> -->
      <div class="grid grid-cols-3 justify-center px-[5%] gap-4">
        <div class="rounded-xl shadow-lg bg-white max-w-sm border-2 border-black">
          <a href="">
            <iframe
              class="w-full min-h-[250px] rounded-xl"
              src="https://www.youtube.com/embed/yoTLD2m9XLM?si=Z0uEm2YpjAvmjMUS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              The story of the man striving to broaden perspectives and be justly balanced
            </h5>
            <p class="text-gray-700 text-l mb-4">Sheikh Dr Yasir Qadhi</p>
          </div>
        </div>
        <div class="rounded-xl shadow-lg bg-white max-w-sm border-2 border-black">
          <a href="">
            <iframe
              class="w-full min-h-[250px] rounded-xl"
              src="https://www.youtube.com/embed/VOUp3ZZ9t3A?si=ddj2DXvw4Ton9MfJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Seerah of Prophet Muhammed 1 - Specialities of Prophet Muhammed
            </h5>
            <p class="text-gray-700 text-l mb-4">Sheikh Dr Yasir Qadhi</p>
          </div>
        </div>
        <div class="rounded-xl shadow-lg bg-white max-w-sm border-2 border-black">
          <a href="">
            <iframe
              class="w-full min-h-[250px] rounded-xl"
              src="https://www.youtube.com/embed/yoTLD2m9XLM?si=Z0uEm2YpjAvmjMUS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Seerah of Prophet Muhammed 2 - Specialities of Prophet Muhammed Part 2
            </h5>
            <p class="text-gray-700 text-l mb-4">Sheikh Dr Yasir Qadhi</p>
          </div>
        </div>
        <div class="rounded-xl shadow-lg bg-white max-w-sm border-2 border-black">
          <a href="">
            <iframe
              class="w-full min-h-[250px] rounded-xl"
              src="https://www.youtube.com/embed/4F5qzMI2IKs?si=1M4F5H9JrC-1ijZm"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Seerah of Prophet Muhammed 3 - Why study the Seerah? & Pre-Islamic Arabia
            </h5>
            <p class="text-gray-700 text-l mb-4">Sheikh Dr Yasir Qadhi</p>
          </div>
        </div>
        <div class="rounded-xl shadow-lg bg-white max-w-sm border-2 border-black">
          <a href="">
            <iframe
              class="w-full min-h-[250px] rounded-xl"
              src="https://www.youtube.com/embed/ey7UAi_Emgs?si=DOBdDJMWt8B20Sy1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Seerah of Prophet Muhammed 4 - Religious status of the world before Islam
            </h5>
            <p class="text-gray-700 text-l mb-4">Sheikh Dr Yasir Qadhi</p>
          </div>
        </div>
        <div class="rounded-xl shadow-lg bg-white max-w-sm border-2 border-black">
          <a href="">
            <iframe
              class="w-full min-h-[250px] rounded-xl"
              src="https://www.youtube.com/embed/629isa8LujE?si=XmHNG1ockHfN1oeM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Seerah of Prophet Muhammad 5 - Genealogy & Year of the Elephant
            </h5>
            <p class="text-gray-700 text-l mb-4">Sheikh Dr Yasir Qadhi</p>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
