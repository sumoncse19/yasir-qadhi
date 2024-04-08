<template>
  <DefaultLayout>
    <section class="bg-slate-100">
      <img
        src="../../assets/image/Events/upcoming-events.png"
        alt="article-banner"
        class="w-full object-cover"
      />
      <div class="container mx-auto p-4">
        <div class="flex items-center justify-center">
          <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Event Details</h2>
        </div>
        <div class="py-[30px] px-[5%] bg-slate-100 flex flex-col md:flex-row gap-4">
          <img
            src="../../assets/image/upcoming-event.jpg"
            alt="image"
            class="rounded-lg h-[350px] border-2 md:w-[40%] md:h-auto"
          />
          <div class="mx-[5%] flex-col justify-between md:w-[60%]">
            <p class="text-2xl text-[#22a474] font-semibold">
              <span>Topic: </span>{{ cards.topic }}
            </p>
            <p class="text-l text-gray-500 font-semibold">{{ cards.summary }}</p>
            <p class="text-l mt-1 text-gray-500">
              <span class="font-semibold">Speaker: </span> {{ cards.speaker }}
            </p>
            <hr class="my-2 bg-gray-200 border-1 border-[#22a474]" />
            <p class="text-l text-gray-900 text-justify mt-2">
              <span class="font-semibold">Event Details: </span>{{ cards.description }}
            </p>
            <div class="mt-4">
              <hr class="my-2 bg-gray-200 border-1 border-[#22a474]" />
              <p class="text-l text-gray-600">
                <span class="font-semibold">Date & Time: </span>{{ cards.date }}
              </p>
              <p class="text-l text-gray-600">
                <span class="font-semibold">Location: </span>{{ cards.location }}
              </p>
              <p class="text-l text-gray-600">
                <span class="font-semibold">Event Organizer: </span>{{ cards.organizer }}
              </p>
              <a
                href="https://www.facebook.com/yasir.qadhi/"
                type="button"
                target="_blank"
                class="text-center bg-[#22a474] text-white py-2 rounded-lg font-semibold mt-4 items-end w-32"
              >
                Registration
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue'

const route = useRoute()

onMounted(() => {
  cards.value = cards.value.find((el) => el.id == route.params.id)
})

const cards = ref([
  {
    id: '1',
    topic: 'Crisis in Gaza',
    summary: `We Are the Ones Spiritually Trapped While Gaza is Spiritually Free! Lessons From Palestine.`,
    description: `The Gaza conflict is a long-standing and complex issue within the broader Israeli-Palestinian conflict. Rooted in historical disputes over land, identity, and national sovereignty, tensions have often escalated into open hostilities between Israel and Palestinian groups in the Gaza Strip.`,
    date: 'February-25, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'Usa, Phoenix arizona',
    organizer: 'The Faith Conference'
  },
  {
    id: '2',
    topic: 'Islam in America',
    summary: `Rise of islam in America and it's future`,
    description: `The presence of Islam in America is a multifaceted narrative that spans centuries, shaped by waves of immigration, cultural diversity, and the evolution of religious practices. Understanding the historical context and the current state of Islam in America provides insights into its dynamic future.`,
    date: 'February-28, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'Usa, Texas',
    organizer: 'The Faith Conference'
  },
  {
    id: '3',
    topic: 'Islam in Europe',
    summary: `The rise of islam in Europe and it's future`,
    description: `The narrative of Islam in Europe is a tapestry woven with historical diversity, migration patterns, and the evolution of religious identity. Understanding the historical context and current dynamics of Islam in Europe provides insights into its multifaceted presence and the potential trajectory for the future.`,
    date: 'March-02, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'United Kingdom, London',
    organizer: 'The Faith Conference'
  },
  {
    id: '4',
    topic: 'Islam in Australia',
    summary: `The rise of islam in Australia and it's future`,
    description: `The story of Islam in Australia unfolds as a tale of diversity, immigration, and cultural integration. From its historical roots to the contemporary landscape, the presence of Islam in Australia reflects a multifaceted community that is actively contributing to the nation's social, economic, and cultural fabric.`,
    date: 'March-08, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'Australia, Perth',
    organizer: 'The Faith Conference'
  }
])
</script>
