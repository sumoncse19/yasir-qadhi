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
          <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Upcoming Events</h2>
          <p></p>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <div v-for="card in cards" :key="card.id" class="py-1 w-full px-5">
            <Card class="border-2 border-sky-500">
              <div class="flex flex-col md:flex-row">
                <img
                  src="../../assets/image/upcoming-event.jpg"
                  alt=""
                  class="rounded-lg w-full md:w-auto"
                />
                <div class="flex-col flex-grow md:ml-4">
                  <CardHeader>
                    <CardTitle>
                      <h2 class="card-title text-[#22a474]">
                        <span class="font-bold text-xl">Event Topic :</span> {{ card.topic }}
                      </h2>
                    </CardTitle>
                  </CardHeader>
                  <CardContent class="w-full">
                    <p class="text-justify text-gray-800">
                      <span class="font-semibold text-lg">Event Description</span>
                      {{ card.summary }}
                    </p>
                    <p class="text-gray-800">
                      <span class="text-lg font-semibold">Speaker: </span> {{ card.speaker }}
                    </p>
                    <p class="text-gray-800">
                      <span class="font-semibold text-lg">Date & Time:</span> {{ card.date }}
                    </p>
                    <p class="text-gray-800">
                      <span class="font-semibold text-lg">Location:</span> {{ card.location }}
                    </p>
                    <p class="text-gray-800">
                      <span class="font-semibold text-lg">Event Organizer:</span>
                      {{ card.organizer }}
                    </p>
                    <div class="flex flex-col md:flex-row">
                      <a
                        href="https://www.facebook.com/yasir.qadhi/"
                        type="button"
                        target="_blank"
                        class="text-center bg-[#22a474] text-white py-2 rounded-lg font-semibold mt-4 items-end w-32"
                      >
                        Registration
                      </a>
                      <router-link
                        :to="{
                          name: 'upcomingEventDetails',
                          params: {
                            id: card.id
                          }
                        }"
                        type="button"
                        class="mx-4 text-center bg-[#22a474] text-white py-2 rounded-lg font-semibold mt-4 items-end w-32"
                      >
                        View Details
                      </router-link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '/components/ui/card'

const cards = ref([
  {
    id: '1',
    topic: 'Crisis in Gaza',
    summary: `We Are the Ones Spiritually Trapped While Gaza is Spiritually Free! Lessons From Palestine.`,
    date: 'February-25, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'USA, Phoenix arizona',
    organizer: 'The Faith Conference'
  },
  {
    id: '2',
    topic: 'Islam in America',
    summary: `The rise of islam in America and it's future`,
    date: 'February-28, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'USA, Texas',
    organizer: 'The Faith Conference'
  },
  {
    id: '3',
    topic: 'Islam in Europe',
    summary: `The rise of islam in Europe and it's future`,
    date: 'March-02, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'United Kingdom, London',
    organizer: 'The Faith Conference'
  },
  {
    id: '4',
    topic: 'Islam in Australia',
    summary: `The rise of islam in Australia and it's future`,
    date: 'March-08, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'Australia, Perth',
    organizer: 'The Faith Conference'
  }
])
</script>
