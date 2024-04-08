<template>
  <DefaultLayout>
    <img
      src="../../assets/image/Events/livestreaming-banner.png"
      alt="article-banner"
      class="w-full object-cover"
    />
    <h1 class="text-center text-green-800 text-4xl font-semibold my-5">Livestreaming</h1>
    <div class="flex flex-col md:flex-row justify-start px-5 py-5">
      <div class="flex flex-col md:w-1/2 gap-2">
        <iframe
          width="600"
          height="400"
          class="rounded-lg w-full"
          src="https://www.youtube.com/embed/4OOLHSgVmnw?si=0E6L_G19CVeFimTv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <hr class="my-2 bg-gray-200 border-1 border-[#22a474]" />
        <div class="flex flex-col md:flex-row justify-between">
          <h1 class="text-l md:mb-0">
            <span class="font-semibold">Event Name: </span>Pragmatism, Politics and Power
          </h1>
          <h1 class="text-l md:ml-4">
            <span class="font-semibold">Location: </span>United States, Texas
          </h1>
        </div>
      </div>
      <div class="flex flex-col md:w-1/2 md:pl-8">
        <h1 class="text-l"><span class="font-semibold">Time: </span>6 May 2023</h1>
        <h1 class="text-l">
          <span class="font-semibold">Event Organizer: </span>The Thinking Muslim
        </h1>
        <h1 class="text-l"><span class="font-semibold">Event Speakers: </span>Dr. Yasir Qadhi</h1>
        <hr class="my-4 bg-gray-200 border-1 border-[#22a474]" />
        <h1 class="text-base text-justify">
          <span class="font-semibold">Event Details: </span>From its first moments, Islam was linked
          to a state-building process, and the shari’ah explicitly addresses rules that can only be
          discharged by a government, such as the rules of hudud or apostasy. Imam Ghazali even
          linked the collection of zakat and the marriage contract contingent on having an Islamic
          government. For the long duration of Islamic history, Muslims in most Muslim lands have
          lived under Islamic caliphates and empires. However, how much of this is less to do with
          religion and more with the circumstances early Muslims found themselves in? Is Islam
          wedded to its ‘founding moment’ –politics fused with a spiritual foundation? In this
          episode, we comprehensively examine Islam and politics with Dr Yasir Qadhi. We explore
          Muslim engagement in politics in the West, its pitfalls, and the vexed issue of
          politicians that embrace and celebrate socially liberal positions.
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
