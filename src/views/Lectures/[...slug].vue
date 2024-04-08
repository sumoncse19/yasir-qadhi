<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { onMounted, ref, watch } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = ref(router.currentRoute.value)

const currentVideoLink = ref('')

watch(
  () => router.currentRoute.value.fullPath,
  () => {
    currentRoute.value = router.currentRoute.value
    console.log(
      currentRoute.value.params.slug.split('/'),
      currentRoute.value.params.slug.split('/').slice(-1),
      'currentRoute'
    )
  }
)

const category = ref({
  categoryName: currentRoute.value,
  categoryContent: [
    {
      videos: [
        {
          name: 'Islam in Australia',
          link: 'https://www.youtube.com/embed/ZAbCZDQ-0eg?si=Q0uiveiz8S4XqOYt',
          thumbnail: 'https://i.ytimg.com/vi/ZAbCZDQ-0eg/maxresdefault.jpg'
        },
        {
          name: 'The Balfour Declaration',
          link: 'https://www.youtube.com/embed/P_lhJ5GjFo4?si=LYzxe7LSOwR1M3a4',
          thumbnail: 'https://i.ytimg.com/vi/P_lhJ5GjFo4/maxresdefault.jpg'
        },
        {
          name: 'The Departing Journey of a Righteous Soul',
          link: 'https://www.youtube.com/embed/EkMYDJcD4lE?si=4AnZrOEXyc0hCT13',
          thumbnail: 'https://i.ytimg.com/vi/EkMYDJcD4lE/maxresdefault.jpg'
        },
        {
          name: '99 Years After The Collapse of the Ottomans',
          link: 'https://www.youtube.com/embed/wMbnJQ84LUY?si=_XnnU8-eOCl77xaI',
          thumbnail: 'https://i.ytimg.com/vi/wMbnJQ84LUY/maxresdefault.jpg'
        },
        {
          name: 'The Blessings of Surah Yaseen',
          link: 'https://www.youtube.com/embed/3Q2_x6x3jag?si=YFoWB3Xh-WwTEhxq',
          thumbnail: 'https://i.ytimg.com/vi/3Q2_x6x3jag/maxresdefault.jpg'
        },
        {
          name: 'Rise of Salahuddin Ayyubi',
          link: 'https://www.youtube.com/embed/ZGEGmBjLP5k?si=nMNcGpXiwt--J62M',
          thumbnail: 'https://i.ytimg.com/vi/ZGEGmBjLP5k/maxresdefault.jpg'
        },
        {
          name: 'The Departing Journey of a Righteous Soul',
          link: 'https://www.youtube.com/embed/EkMYDJcD4lE?si=4AnZrOEXyc0hCT13',
          thumbnail: 'https://i.ytimg.com/vi/EkMYDJcD4lE/maxresdefault.jpg'
        }
      ]
    },
    {
      playlist: [
        {
          name: 'Quran Tafsir',
          thumbnail: 'https://quranonline.com/wp-content/uploads/2021/10/quran-on-green.jpg',
          slug: 'quran-tafsir',
          path: '/lectures/lecture/'
        },
        {
          name: 'The Quranic Lesson',
          thumbnail: 'https://understandquran.com/wp-content/uploads/2019/07/ebook.jpg',
          slug: 'the-quranic-lesson',
          path: '/lectures/khutbah/'
        },
        {
          name: 'Parables of the Quran',
          thumbnail: 'https://i.ytimg.com/vi/TOTGCSmYT_c/maxresdefault.jpg',
          slug: 'parables-of-the-quran',
          path: '/lectures/khatirah/'
        }
      ]
    }
  ]
})

onMounted(() => {
  currentVideoLink.value = category.value.categoryContent[0].videos[0].link
})
</script>

<template>
  <DefaultLayout>
    <img
      v-if="currentRoute.params.slug.includes('lecture')"
      src="../../assets/image/Lectures/lecture-banner.png"
      alt="Khatirah-banner"
      class="w-full object-cover"
    />
    <img
      v-else-if="currentRoute.params.slug.includes('khutbah')"
      src="../../assets/image/Lectures/khutbah-banner.png"
      alt="Khatirah-banner"
      class="w-full object-cover"
    />
    <img
      v-else
      src="../../assets/image/Lectures/khatirah-banner.png"
      alt="Khatirah-banner"
      class="w-full object-cover"
    />

    <div class="py-[30px] px-[5%] bg-slate-100">
      <h1 class="text-3xl text-center font-bold uppercase text-[#22a474] pb-3">
        {{
          currentRoute.params.slug.split('/').slice(-1)[0] === 'lecture'
            ? 'Lectures'
            : currentRoute.params.slug.split('/').slice(-1)[0] === 'khutbah'
              ? 'Khutbah'
              : currentRoute.params.slug.split('/').slice(-1)[0] === 'khatirah'
                ? 'Khatirah'
                : currentRoute.params.slug.split('/').slice(-1)[0]
        }}
      </h1>

      <div class="container flex flex-col space-y-20">
        <div>
          <h2 class="text-3xl text-center font-bold uppercase text-[#22a474] pb-3">
            Video Lecture
          </h2>
          <div class="flex w-full gap-2">
            <div class="w-[70%]">
              <iframe
                class="w-full min-h-[550px]"
                :src="currentVideoLink"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="w-[30%] flex flex-col border-2 border-[#22a474] h-[550px]">
              <h3
                class="text-xl text-center font-bold uppercase text-[#22a474] py-2 border-b-[1px] border-[#22a474]"
              >
                All Video
              </h3>
              <div class="overflow-y-scroll">
                <div
                  v-for="(video, index) in category.categoryContent[0].videos"
                  :key="index"
                  class="flex space-x-3 border-y border-[#22a474] cursor-pointer"
                  @click="currentVideoLink = video.link"
                >
                  <img :src="video.thumbnail" alt="" srcset="" class="h-20 min-w-40" />
                  <div class="break-words">{{ video.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-3xl text-center font-bold uppercase text-[#22a474] pb-3">All Playlist</h2>
          <div class="flex space-x-2">
            <div
              v-for="(playlist, playlistIndex) in category.categoryContent[1].playlist"
              :key="playlistIndex"
              class="relative"
            >
              <router-link
                :to="`${playlist.path}${playlist.slug}`"
                class="w-full hover:pl-5 duration-300"
              >
                <div class="w-[300px] h-[350px]">
                  <img
                    :src="playlist.thumbnail"
                    alt=""
                    srcset=""
                    class="w-[300px] h-[350px] hover:absolute hover:opacity-50"
                  />
                </div>
                <h2 class="absolute bottom-0 text-white px-5 py-2 text-lg bg-[#22a474] w-full">
                  {{ playlist.name }}
                </h2>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
/* .overlay:hover {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 50%;
  color: white;
  font-size: 20px;
  text-align: center;
} */
</style>
