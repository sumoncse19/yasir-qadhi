<template>
  <section class="container my-14">
    <div class="flex items-center justify-center">
      <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Contact Me</h2>
      <p></p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 bg-slate-100 mx-auto p-12">
      <div v-for="card in cards" :key="card.id" class="p-4">
        <div
          class="bg-white p-6 rounded-lg shadow-md text-center h-[200px] border-2 border-sky-500"
        >
          <div class="flex items-center justify-center mb-4">
            <img :src="card.image" alt="logo" />
          </div>
          <h5 class="text-xl font-bold mb-2">{{ card.title }}</h5>
          <!-- <p class="text-gray-600">{{ card.description }}</p> -->
          <p class="text-black font-semibold underline pt-2">{{ card.address }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import image1 from '../../assets/image/contact/mail.png'
import image2 from '../../assets/image/contact/phone.png'
import image3 from '../../assets/image/contact/location.png'

const cards = ref([
  {
    id: 1,
    title: 'Email',
    image: image1,
    address: 'AskYQ@epicmasjid.org'
  },
  {
    id: 2,
    title: 'Phone',
    image: image2,
    address: '901-233-0645'
  },
  {
    id: 3,
    title: 'Office',
    image: image3,
    address: 'NABIC: PO Box 770546 ; Memphis, TN 38177-0546'
  }
])
</script>
