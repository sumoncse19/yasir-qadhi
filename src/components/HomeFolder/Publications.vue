<template>
  <section class="container bg-slate-100 mx-auto my-8 py-5 px-[5%]">
    <div class="container mx-auto p-4">
      <div class="flex items-center justify-center">
        <h2 class="text-center text-4xl text-yellow-600 font-bold my-5">Publications</h2>
        <p></p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div v-for="card in cards" :key="card.id" class="p-4">
          <div class="bg-white rounded-lg shadow-md text-center bg-gradient-to-t">
            <img :src="card.image" alt="" class="h-50 w-full rounded-t-lg" />
            <h5 class="text-xl font-bold my-4">{{ card.title }}</h5>
            <p class="text-gray-600 my-2 mx-2 text-justify">{{ card.description }}</p>
            <button class="text-center border-2 bg-yellow-500 py-2 px-3 my-5 rounded-lg text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import image1 from './../../assets/image/publication/sirat.jpg'
import image2 from './../../assets/image/publication/quran.jpg'
import image3 from './../../assets/image/publication/surah.jpg'
import image4 from './../../assets/image/publication/repentance.jpg'
import image5 from './../../assets/image/publication/yousuf.jpg'
import image6 from './../../assets/image/publication/miracle.jpg'

const cards = ref([
  {
    id: 1,
    title: 'The Sirah of the Prophet (pbuh)',
    image: image1,
    description:
      'Following Dr Yasir Qadhi’s ground-breaking video lecture series on the sīrah of the Prophet Muhammad, this book is an equally impactful written adaptation.'
  },
  {
    id: 2,
    title: `The Parables of the Qur'an`,
    image: image2,
    description:
      'The Qur’an is the word of Allah, it is the most eloquent and best of all speech. The Qur’an uses different rhetorical devices and parables to convey its message.'
  },
  {
    id: 3,
    title: 'Lessons from Surah al-Kahf',
    image: image3,
    description:
      'The Qur’an is full of parables. Each one, when its meaning is unpacked and understood, offers wisdom and guidance. Surah Kahf, chapter 18 from the Qur’an,'
  },
  {
    id: 4,
    title: 'The Power of Repentance',
    image: image4,
    description: `We are all sinners. No human being has ever walked this earth unscathed from sins. But how is a person supposed to enter Jannah if he can't help but commit sins day and night?`
  },
  {
    id: 5,
    title: 'Lessons from Surah Yusuf',
    image: image5,
    description: `Surah Yusuf, a chapter of the Qur'an (Koran), was revealed to the Prophet Muhammad at a critical juncture of his life. This was the time when he had gone through ten to eleven ,`
  },
  {
    id: 6,
    title: `The Miracle of the Qur'an`,
    image: image6,
    description: `The Miracle of the Qur'an. The Qur'an is the greatest miracle of God (Allah) and the Qur'an is the proof of the truthfulness of Islam. It is the standing and everlasting miracle,`
  }
])
</script>
