<template>
  <DefaultLayout>
    <div class="bg-slate-100">
      <img
        src="../../assets/image/Publication/journals-banner.png"
        alt="article-banner"
        class="w-full object-cover"
      />
      <h1 class="text-center text-3xl font-extrabold text-[#22a474] pt-5">All Research</h1>
      <div class="flex items-center justify-center mt-5 container mx-auto">
        <div class="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="list in lists"
            :key="list.id"
            class="rounded-xl shadow-lg bg-white h-[320px] border-2 border-sky-500"
          >
            <div class="p-5 flex flex-col self-end">
              <!-- <div class="rounded-xl overflow-hidden">
                  <img src="/src/assets/image/Research/human.jpg" alt="image" />
                </div> -->
              <h5 class="text-xl md:text-2xl font-medium mt-3 text-[#22a474]">{{ list.title }}</h5>
              <p class="text-sm text-gray-400">Publised on : {{ list.published }}</p>
              <p class="text-sm text-gray-400">Author : {{ list.author }}</p>
              <p class="text-slate-700 text-lg mt-2">
                {{ list.description }}
              </p>
            </div>
            <router-link
              :to="{
                name: 'publication/journaldetails',
                params: {
                  id: list.id
                }
              }"
            >
              <div class="flext justify-center items-end px-5">
                <button
                  class="text-center bg-[#22a474] text-white py-2 rounded-lg font-semibold mt-5 items-end w-full"
                >
                  View research
                </button>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'

const lists = ref([
  {
    id: '1',
    title: 'Evolution',
    published: 'August 31, 2018',
    author: 'Dr. Yasir Qadhi',
    description: 'Human Origins - Part 1: Theological Conclusions and Empirical Limitations of '
  },
  {
    id: '2',
    title: 'The Genesis',
    published: 'March 18th-20th 2016',
    author: 'Dr. Yasir Qadhi',
    description:
      'While Sunnism is the largest sect of Islam, Sunnism itself is divided into many strands'
  },
  {
    id: '3',
    title: `From Dir'iyya to Riyadh`,
    published: 'April 2022',
    author: 'Dr. Yasir Qadhi',
    description: 'The History and Global Impact of Saudi Religious Propagation and Education'
  },
  {
    id: '4',
    title: `A Christan Islamist`,
    published: '21 Apr 2015',
    author: 'Dr. Yasir Qadhi',
    description: `the author discusses Volf’s paradigm from an Islamic perspective, and compares`
  },
  {
    id: '5',
    title: `The Path of Allah or the Paths of Allah?`,
    published: '2012',
    author: 'Dr. Yasir Qadhi',
    description: 'Islam, Salvation, and the Fate of Others'
  },
  {
    id: '6',
    title: `The Zahiris`,
    published: '2012',
    author: 'Dr. Yasir Qadhi',
    description: `That Ignaz Goldziher (1860-1921) was the pivotal figure in the modern academic study
                of Islam`
  },
  {
    id: '7',
    title: `Foreign Words in the Quran`,
    published: '2012',
    author: 'Dr. Yasir Qadhi',
    description: 'That Ignaz Goldziher (1860-1921) was the pivotal figure in the'
  },
  {
    id: '8',
    title: `In the light of the Glorious Qurân`,
    published: '2012',
    author: 'Dr. Yasir Qadhi',
    description: `Political Theology, the author discusses Volf's paradigm e`
  }
])
</script>
