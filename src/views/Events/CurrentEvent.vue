<template>
  <DefaultLayout>
    <img
      src="../../assets/image/Events/current-event.png"
      alt="article-banner"
      class="w-full object-cover"
    />
    <h1 class="text-center text-green-800 text-4xl font-semibold my-5">Current Event</h1>
    <div class="flex flex-col md:flex-row justify-start px-5 py-5">
      <div class="flex flex-col md:w-1/2 gap-2">
        <iframe
          width="600"
          height="400"
          class="rounded-lg w-full"
          src="https://www.youtube.com/embed/AM6PPKVMx28?si=VqfXeR0Ij7zIQDWR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <hr class="my-2 bg-gray-200 border-1 border-[#22a474]" />
        <div class="flex flex-col md:flex-row justify-between">
          <h1 class="text-l md:mb-0">
            <span class="font-semibold">Event Name: </span>Letting Go: Stress, Anxiety and
            Depression
          </h1>
          <h1 class="text-l md:ml-4"><span class="font-semibold">Location: </span>Karachi</h1>
        </div>
      </div>
      <div class="flex flex-col md:w-1/2 md:pl-8">
        <h1 class="text-l"><span class="font-semibold">Time: </span>December 30, 2022</h1>
        <h1 class="text-l"><span class="font-semibold">Event Organizer: </span>LiveDeen</h1>
        <h1 class="text-l"><span class="font-semibold">Event Speakers: </span>Dr. Yasir Qadhi</h1>
        <hr class="my-4 bg-gray-200 border-1 border-[#22a474]" />
        <h1 class="text-base text-justify">
          <span class="font-semibold">Event Details: </span>
          The world around us is becoming chaotic and each one of us at some point suffers
          restlessness and anxiety. This event would help you discover the Islamic way of dealing
          with such depression and anxiety. Dr. Yasir Qadhi completed his primary and secondary
          education in Jeddah, Saudi Arabia. He graduated with a BSc in Chemical Engineering from
          the University of Houston, after which he was accepted as a student at the Islamic
          University of Madinah. There, he completed a second bachelor’s degree, specializing in
          Hadith studies, and then went on to complete MA in Islamic Theology from the College of
          Dawah. He then returned to the United States and completed a Ph.D. in Religious Studies at
          Yale University. Dr. Yasir Qadhi has authored several books, published academic articles,
          and appeared on numerous satellite and TV stations around the globe. His online videos are
          some of the most popular and highly-watched Islamic videos in English. He is a resident
          scholar at East Plano Islamic Center, Texas.
        </h1>
        <button
          class="text-center bg-[#22a474] text-white py-2 rounded-lg font-semibold mt-4 items-end w-32"
        >
          Registration
        </button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
