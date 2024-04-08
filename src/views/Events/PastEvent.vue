<template>
  <DefaultLayout>
    <section class="bg-slate-100">
      <img
        src="../../assets/image/Events/past-event.png"
        alt="article-banner"
        class="w-full object-cover"
      />
      <div class="container mx-auto p-4">
        <div class="flex items-center justify-center">
          <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Past Events</h2>
          <p></p>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <div v-for="card in cards" :key="card.id" class="py-1 w-full px-5">
            <Card class="border-2 border-sky-500">
              <div class="flex flex-col md:flex-row">
                <img
                  src="../../assets/image/past-event.jpg"
                  alt=""
                  class="rounded-lg w-full md:w-auto"
                />
                <div class="flex-col">
                  <CardHeader>
                    <CardTitle>
                      <h2 class="card-title text-[#22a474]">
                        <span class="font-semibold text-xl">Event Topic :</span> {{ card.topic }}
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
                    <router-link
                      :to="{
                        name: 'pastEventDetails',
                        params: {
                          id: card.id
                        }
                      }"
                      type="button"
                      class="text-center bg-[#22a474] text-white py-2 rounded-lg font-semibold mt-4 items-end w-32"
                    >
                      View Details
                    </router-link>
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
    topic: 'The Seerah Part 1',
    summary: `The Seerah, or the biography of Prophet Muhammad (Peace Be Upon Him).`,
    date: 'January-25, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'USA, Phoenix arizona',
    organizer: 'The Faith Conference'
  },
  {
    id: '2',
    topic: 'The Seerah Part 2',
    summary: `The Seerah, or the biography of Prophet Muhammad (Peace Be Upon Him).`,
    date: 'January-28, 2024',
    speaker: 'Dr. Yasir Qadhi',
    location: 'USA, Phoenix arizona',
    organizer: 'The Faith Conference'
  }
])
</script>
