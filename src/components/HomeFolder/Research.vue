<template>
  <section class="container my-14">
    <div class="flex items-center justify-center">
      <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Research</h2>
      <p></p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 bg-slate-100 mx-auto p-12">
      <!-- <div v-for="card in cards" :key="card.id" class="p-4 h-full"> -->
      <div v-for="card in cards" :key="card.id" class="p-4">
        <!-- <Card class="h-full flex-col"> -->
        <Card class="h-full flex flex-col shadow-2xl">
          <CardContent class="flex-grow h-full flex-col">
            <img :src="card.image" alt="" class="h-96 w-full rounded-t-lg py-5" />
            <h5 class="text-xl text-[#22a474] font-bold my-4">{{ card.title }}</h5>
            <p class="text-gray-600 my-2 text-justify">{{ card.description }}</p>
          </CardContent>
          <div class="w-full text-center py-2 mb-6 px-3">
            <!-- <button class="text-center bg-[#22a474] py-2 px-3 w-3/6 mb-8 rounded-lg text-white"> -->
            <button class="shadow-xl text-center bg-[#22a474] py-3 px-5 rounded-lg text-white">
              View Details
            </button>
          </div>
          <!-- </CardContent> -->
        </Card>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import image1 from './../../assets/image/Research/dua.jpg'
import image2 from './../../assets/image/Research/quranic.jpg'
import image3 from './../../assets/image/Research/political.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '/components/ui/card'
const cards = ref([
  {
    id: 1,
    title: `The Weapon of the Believer`,
    image: image1,
    description:
      'In this work, the author elaborates on the status, importance and etiquette of dua in Islam.'
  },
  {
    id: 2,
    title: `Sciences of the Qu'ran`,
    image: image2,
    description: `An introduction to the Sciences of the Qur'aan presents a detailed and thorough explanation of the sciences related to the history `
  },
  {
    id: 3,
    title: 'A Christian Islamist?',
    image: image3,
    description:
      'In this review, the author discusses Volf’s paradigm from an Islamic perspective, and compares and contrasts'
  }
])
</script>

<!-- explanation of the sciences related to the history, understanding and implementation of the Qu'aan. -->
<!-- 
and contrasts some of Volf’s assertions with those of his avowed counterpart: the Muslim fundamentalist Syed Qutb. -->
