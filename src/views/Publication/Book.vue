<template>
  <DefaultLayout>
    <div class="bg-slate-100">
      <img
        src="../../assets/image/Publication/books-banner.png"
        alt="article-banner"
        class="w-full object-cover"
      />
      <h1 class="text-3xl text-center font-bold uppercase text-[#22a474] pb-3 pt-5">All Books</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-[5%]">
        <div v-for="book in books" :key="book.id" class="relative">
          <router-link
            :to="{
              name: 'publication/bookdetails',
              params: {
                id: book.id
              }
            }"
          >
            <div class="p-3 bg-[#22a474] relative group rounded-lg">
              <img :src="book.image" alt="" class="w-full rounded-lg" />
              <div
                class="overlay absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-semibold"
              >
                <p class="text-xl">{{ book.title }}</p>
                <p class="text-sm">Author: {{ book.author }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

const books = ref([
  {
    id: '1',
    title: 'The Miracle of the Quran',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/miracle.jpg'
  },
  {
    id: '2',
    title: 'Our Family Our Legacy',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/family.jpg'
  },
  {
    id: '3',
    title: 'Dua The Weapon of the Believer',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/dua.jpg'
  },
  {
    id: '4',
    title: 'The Parables of the Quran',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/quran.jpg'
  },
  {
    id: '5',
    title: 'The Sciences of the Quran',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/quranic.jpg'
  },
  {
    id: '6',
    title: 'Reflections',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/reflections.jpg'
  },
  {
    id: '7',
    title: 'The Power of Repentance',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/repentance.jpg'
  },
  {
    id: '8',
    title: 'The Sirah of the Prophet',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/sirat.jpg'
  },
  {
    id: '9',
    title: 'Lessons From Surah al-Kahf',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/surah.jpg'
  },
  {
    id: '10',
    title: 'Lessons From Surah al-Kahf',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/yousuf.jpg'
  },
  {
    id: '11',
    title: 'Riyaa: Hidden Shirk',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/riya.jpg'
  },
  {
    id: '12',
    title: 'A Christan Islamist?',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/political.png'
  }
])
</script>
<style>
.group:hover .overlay {
  backdrop-filter: blur(100px); /* Adjust the blur intensity as needed */
  opacity: 1;
}

.overlay {
  opacity: 0;
  transition: opacity 0.3s;
}
</style>
