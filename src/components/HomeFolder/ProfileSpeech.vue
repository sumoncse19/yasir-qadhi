<script setup>
import Facebook from '@/components/Base/Icon/Facebook.vue'
import LinkedIn from '@/components/Base/Icon/LinkedIn.vue'
import Instagram from '@/components/Base/Icon/Instagram.vue'
import Twitter from '@/components/Base/Icon/Twitter.vue'
import YoutubeIcon from '@/components/Base/Icon/YoutubeIcon.vue'
</script>

<template>
  <Navbar />
  <section class="container bg-white mx-auto my-8 py-5 px-[5%]">
    <section class="flex flex-col md:flex-row mx-auto max-w-7xl">
      <div class="md:w-1/2 p-32">
        <img class="rounded-full shadow-2xl" src="../../assets/image/profile/kadir.png" alt="" />
        <div class="flex text-center items-center justify-center gap-6 pt-8">
          <a href="https://www.facebook.com/yasir.qadhi/" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/yasir-qadhi-6589895b/">
            <LinkedIn />
          </a>
          <a href="https://www.instagram.com/yasir.qadhi/?hl=en">
            <Instagram />
          </a>
          <a href="https://twitter.com/YasirQadhi">
            <Twitter />
          </a>
          <a href="https://www.youtube.com/YasirQadhi">
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div class="md:w-1/2 flex items-center">
        <div class="p-5 text-justify">
          <h1 class="text-xl md:text-2xl lg:text-4xl text-[#22a474] font-bold pb-1">
            Dr. Yasir Qadhi
          </h1>
          <p class="font-bold mb-6">Islamic Theologian & Religious Studies Professor</p>
          <p class="mb-10">
            Sh. Dr. Yasir Qadhi is someone that believes that one's life should be judged by more
            than just academic degrees and scholastic accomplishments. Friends and foe alike
            acknowledge that one of his main weaknesses is ice-cream, which he seems to enjoy with a
            rather sinister passion. The highlight of his day is twirling his little girl (a.k.a.
            "my little princess") round and round in the air and watching her squeal with joy. A few
            tid-bits from his mundane life: Sh. Yasir has a Bachelors in Hadith and a Masters in
            Theology from Islamic University of Madinah, and a PhD in Islamic Studies from Yale
            University. He is an instructor and Dean of Academic Affairs at AlMaghrib, and the
            Resident Scholar of the Memphis Islamic Center.
          </p>
        </div>
      </div>
    </section>
  </section>
</template>
