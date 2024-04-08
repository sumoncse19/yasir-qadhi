<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  postDetails: [] // Change the type as per your requirement
})

const emits = defineEmits(['goToAllBlog'])

// Function to call the parent function
const goToAllBlogFunc = () => {
  emits('goToAllBlog')
}
</script>
<template>
  <DefaultLayout>
    <div class="py-[30px] px-[5%] bg-slate-100 flex flex-col gap-4">
      <div class="w-5 h-5 cursor-pointer" @click="goToAllBlogFunc">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </div>

      <div class="flex gap-4">
        <img :src="postDetails.img" alt="journal details" class="w-[200px] h-[200px]" />
        <div class="mx-[5%] flex-col justify-between">
          <p class="text-3xl text-[#22a474] font-bold">
            {{ postDetails?.name }}
          </p>
          <p class="text-2xl text-gray-500 font-semibold">{{ postDetails.heading }}</p>
          <p class="text-xl mt-1 text-gray-500">
            <span>By -</span> {{ postDetails.author ? postDetails.author : 'Yasir Qadhi' }}
          </p>
          <div class="py-2">
            <p class="text-l text-gray-500">
              <span class="font-semibold">Published on: </span>{{ postDetails?.date }}
            </p>
          </div>
          <hr class="my-2 bg-gray-200 border-1 dark:bg-gray-800" />
          <div class="items-center flex-col">
            <p><span class="font-semibold text-xl">Details</span></p>
            <hr class="my-4 bg-gray-200 border-1 dark:bg-gray-800" />
            <p class="text-sm text-justify mt-2">
              {{ postDetails.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
