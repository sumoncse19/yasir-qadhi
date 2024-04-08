<template>
  <section class="container my-14">
    <div class="flex items-center justify-center">
      <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Recent Articles</h2>
      <p></p>
    </div>

    <div class="grid grid-cols-1 bg-slate-100 mx-auto p-12">
      <div v-for="card in cards" :key="card.id" class="py-2 w-full px-5">
        <!-- <div class="card flex lg:card-side bg-base-100 shadow-xl w-full">
            <figure>
             <img src="../../assets/image/article/article1.jpg" alt="article" /> 
            </figure> -->
        <Card class="border-2 border-sky-500">
          <CardHeader>
            <CardTitle>
              <h2 class="card-title font-bold text-xl text-green-800">{{ card.title }}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent class="w-full">
            <p class="text-justify text-gray-800 text-lg">{{ card.description }}</p>
            <p class="text-sm text-gray-500 pt-2">— {{ card.author }}</p>
          </CardContent>
        </Card>
        <!-- </div> -->
      </div>
      <!-- <div v-for="card in cards" :key="card.id" class="p-4">
          <div class="bg-white p-6 rounded-lg shadow-md text-center flex">
            <div class="items-center justify-center mb-4">
              <img src="../../assets/image/article/ft3.png" alt="" class="max-w-full max-h-32" />
            </div>
            <h5 class="text-xl font-bold mb-2">{{ card.title }}</h5>
            <p class="text-gray-600">{{ card.description }}</p>
          </div>
        </div> -->
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
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
    title: 'Humility And The Muslim : Manners of The Believers',
    description:
      'Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer.',
    author: 'Dr. Yasir Qadhi'
  },
  {
    id: 2,
    title: 'Akhlāq 101: Character Development For Muslims',
    description: `All this talk about akhlaq begs the question–is it something a person is in control of or something innate that a person is born with? Akhlāq. The entire message of Islam and the reason why Allah subḥānahu wa ta'āla (glorified and exalted be He) sent us a Messenger is to perfect noble manners.`,
    author: 'Dr. Yasir Qadhi'
  },
  {
    id: 3,
    title: 'Fatwa Regarding Transgenderism',
    description:
      'This fatwa was initially prepared by Dr. Yasir Qadhi at the behest of the Fiqh Council of North America. The Fiqh Council, after some modifications, unanimously approved it.',
    author: 'Dr. Yasir Qadhi'
  },
  {
    id: 4,
    title: 'Sectarianism And ‘The Lady Of Heaven',
    description:
      'Regarding the movie ‘The Lady of Heaven’I have just finished a 3-part series on sectarianism; this post needs to be understand in light of that khutbah (if you haven’t listened to these khuṭbahs, please do).',
    author: 'Dr. Yasir Qadhi'
  }
])
</script>
