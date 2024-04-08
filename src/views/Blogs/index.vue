<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PostDetailsCard from '@/components/PostDetailsCard.vue'
import img1 from '@/assets/image/Blog/blog1.jpg'
import img2 from '@/assets/image/Blog/blog2.jpg'
import img3 from '@/assets/image/Blog/blog3.jpg'
import img4 from '@/assets/image/Blog/blog4.jpg'

import latest1 from '@/assets/image/Blog/latest1.jpg'
import latest2 from '@/assets/image/Blog/latest2.jpg'
import latest3 from '@/assets/image/Blog/latest3.jpg'
import latest4 from '@/assets/image/Blog/latest4.png'
import latest5 from '@/assets/image/Blog/latest5.png'

import popular1 from '@/assets/image/Blog/popular1.png'
import popular2 from '@/assets/image/Blog/popular2.png'
import popular3 from '@/assets/image/Blog/popular3.png'
import popular4 from '@/assets/image/Blog/popular4.png'
import popular5 from '@/assets/image/Blog/popular5.webp'

import { onMounted, ref, watch } from 'vue'
const currentTab = ref('allBlog')
const isShowBlogDetails = ref(false)
const currentTabPost = ref([])
const selectedBlog = ref({})
const allBlogPost = ref([
  {
    id: 1,
    name: 'Humility And The Muslim : Manners of The Believers',
    date: '5th February, 2023',
    img: img1,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 2,
    name: 'Humility And The Muslim : Manners of The Believers',
    date: '17th December, 2023',
    img: img2,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 3,
    name: 'Humility And The Muslim : Manners of The Believers',
    date: '8th August, 2023',
    img: img3,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 4,
    name: 'Humility And The Muslim : Manners of The Believers',
    date: '15th March, 2023',
    img: img4,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 5,
    name: 'Taking Lessons from The Strength of Maryam, Mother of Jesus',
    date: '15th March, 2023',
    img: latest1,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 6,
    name: 'From The Chaplain’s Desk: Sayyid Al-Istighfar – The Greatest Dua For Seeking Forgiveness',
    date: '15th March, 2023',
    img: latest2,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 7,
    name: 'If You Could Speak : A Poem',
    date: '15th March, 2023',
    img: latest3,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 8,
    name: '“What Did You Just Say?” : Introducing The New MM Open Letter Series I Dear Mr. Fareed Zakaria',
    date: '15th March, 2023',
    img: latest4,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 9,
    name: 'Announcement: MuslimMatters New Executive Director',
    date: '15th March, 2023',
    img: latest5,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 10,
    name: 'The Muslim Bookstagram Awards : The 2023 Winners!',
    date: '15th March, 2023',
    img: popular1,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 11,
    name: 'From The Chaplain’s Desk: The Power Of Dua',
    date: '15th March, 2023',
    img: popular2,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 12,
    name: 'The Muslim Bookstagram Awards : The 2023 Winners!',
    date: '15th March, 2023',
    img: popular3,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 13,
    name: 'Announcement: MuslimMatters New Executive Director',
    date: '15th March, 2023',
    img: popular4,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  },
  {
    id: 14,
    name: 'From The Chaplain’s Desk: The Power Of Dua',
    date: '15th March, 2023',
    img: popular5,
    description:
      "Humility is the queen of the akhlāq of the believer. It is even mentioned in the Quran as a defining characteristic of a believer. Keep supporting MuslimMatters for the sake of Allah Alhamdulillah, we're at over 850 supporters. Help us get to 900 supporters this month. All it takes is a small gift from a reader like you to keep us going, for just $2 / month."
  }
])

const handleSelectedCategory = () => {
  console.log(currentTab.value, 'currentTab')
  currentTabPost.value = allBlogPost.value.reverse()
  // allPosts.value.forEach((singlePost) => {
  //   if (singlePost.category === currentTab.value) {
  //     currentTabPost.value.push(singlePost)
  //   }
  // })
}

const handleBlogDetails = (currentSelectedBlog) => {
  selectedBlog.value = Object.keys(selectedBlog.value).length > 0 ? [] : currentSelectedBlog
  isShowBlogDetails.value = !isShowBlogDetails.value
}

watch(
  () => currentTab.value,
  () => {
    handleSelectedCategory()
  }
)

onMounted(() => {
  handleSelectedCategory()
})
</script>

<template>
  <DefaultLayout>
    <section>
      <div class="bg-slate-200 h-24">
        <p class="ms-2">Home > Blog</p>
        <h2 class="ms-2 text-xl lg:text-3xl font-bold p-6 text-[#22a474]">Blog</h2>
      </div>
      <section class="container bg-white my-8 py-5 mx-auto max-w-7xl">
        <section class="flex flex-col md:flex-row mx-auto max-w-7xl">
          <div class="md:w-1/2 p-32 md:p-32">
            <img
              class="rounded-2xl shadow-2xl"
              src="../../assets/image/Blog/yasirqadhi.jpg"
              alt=""
            />
            <div class="flex text-center items-center justify-center gap-6 pt-8">
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22.6666" cy="22" r="22" fill="#24A474" />
                <g clip-path="url(#clip0_1_1497)">
                  <path
                    d="M34.6643 17.0685C34.6079 15.791 34.4014 14.9128 34.1054 14.1518C33.8001 13.344 33.3305 12.6208 32.7151 12.0196C32.1139 11.409 31.3859 10.9346 30.5875 10.6341C29.8221 10.3381 28.9484 10.1315 27.671 10.0752C26.384 10.0141 25.9754 10 22.7112 10C19.447 10 19.0385 10.0141 17.7562 10.0705C16.4788 10.1268 15.6005 10.3335 14.8397 10.6293C14.0317 10.9346 13.3085 11.4042 12.7073 12.0196C12.0967 12.6208 11.6225 13.3488 11.3218 14.1472C11.0259 14.9128 10.8193 15.7863 10.763 17.0637C10.7019 18.3507 10.6877 18.7593 10.6877 22.0235C10.6877 25.2877 10.7019 25.6962 10.7582 26.9785C10.8145 28.2559 11.0213 29.1342 11.3172 29.8952C11.6225 30.703 12.0967 31.4262 12.7073 32.0274C13.3085 32.638 14.0365 33.1124 14.8349 33.4129C15.6005 33.7088 16.474 33.9154 17.7517 33.9717C19.0337 34.0283 19.4425 34.0422 22.7066 34.0422C25.9708 34.0422 26.3794 34.0283 27.6616 33.9717C28.9391 33.9154 29.8173 33.7088 30.5782 33.4129C32.1939 32.7882 33.4714 31.5108 34.0961 29.8952C34.3918 29.1296 34.5986 28.2559 34.6549 26.9785C34.7112 25.6962 34.7254 25.2877 34.7254 22.0235C34.7254 18.7593 34.7206 18.3507 34.6643 17.0685ZM32.4992 26.8845C32.4475 28.0587 32.2502 28.6928 32.0859 29.1155C31.6819 30.1629 30.8506 30.9941 29.8032 31.3981C29.3805 31.5625 28.7419 31.7597 27.5723 31.8113C26.3042 31.8678 25.9239 31.8817 22.716 31.8817C19.5081 31.8817 19.123 31.8678 17.8595 31.8113C16.6854 31.7597 16.0513 31.5625 15.6286 31.3981C15.1074 31.2055 14.6329 30.9002 14.2479 30.501C13.8486 30.1111 13.5434 29.6415 13.3507 29.1202C13.1863 28.6975 12.9891 28.0587 12.9376 26.8893C12.8811 25.6212 12.8671 25.2407 12.8671 22.0328C12.8671 18.825 12.8811 18.4399 12.9376 17.1766C12.9891 16.0024 13.1863 15.3683 13.3507 14.9456C13.5434 14.4242 13.8486 13.95 14.2526 13.5647C14.6423 13.1655 15.112 12.8602 15.6334 12.6677C16.0561 12.5034 16.6949 12.3061 17.8643 12.2544C19.1324 12.1981 19.5129 12.184 22.7206 12.184C25.9332 12.184 26.3135 12.1981 27.5771 12.2544C28.7512 12.3061 29.3853 12.5034 29.808 12.6677C30.3292 12.8602 30.8036 13.1655 31.1887 13.5647C31.5879 13.9546 31.8932 14.4242 32.0859 14.9456C32.2502 15.3683 32.4475 16.007 32.4992 17.1766C32.5555 18.4447 32.5697 18.825 32.5697 22.0328C32.5697 25.2407 32.5555 25.6164 32.4992 26.8845Z"
                    fill="white"
                  />
                  <path
                    d="M22.7113 15.8474C19.3016 15.8474 16.5352 18.6137 16.5352 22.0235C16.5352 25.4334 19.3016 28.1997 22.7113 28.1997C26.1211 28.1997 28.8874 25.4334 28.8874 22.0235C28.8874 18.6137 26.1211 15.8474 22.7113 15.8474ZM22.7113 26.0298C20.4993 26.0298 18.705 24.2357 18.705 22.0235C18.705 19.8113 20.4993 18.0172 22.7113 18.0172C24.9235 18.0172 26.7176 19.8113 26.7176 22.0235C26.7176 24.2357 24.9235 26.0298 22.7113 26.0298Z"
                    fill="white"
                  />
                  <path
                    d="M30.5736 15.6032C30.5736 16.3995 29.928 17.0451 29.1315 17.0451C28.3353 17.0451 27.6897 16.3995 27.6897 15.6032C27.6897 14.8068 28.3353 14.1614 29.1315 14.1614C29.928 14.1614 30.5736 14.8068 30.5736 15.6032Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1497">
                    <rect
                      width="24"
                      height="24.0423"
                      fill="white"
                      transform="translate(10.6666 10)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22" r="22" fill="#24A474" />
                <g clip-path="url(#clip0_1_1504)">
                  <path
                    d="M34 14.5585C33.1075 14.95 32.1565 15.2095 31.165 15.3355C32.185 14.7265 32.9635 13.7695 33.3295 12.616C32.3785 13.183 31.3285 13.5835 30.2095 13.807C29.3065 12.8455 28.0195 12.25 26.6155 12.25C23.8915 12.25 21.6985 14.461 21.6985 17.1715C21.6985 17.5615 21.7315 17.9365 21.8125 18.2935C17.722 18.094 14.1025 16.1335 11.671 13.147C11.2465 13.8835 10.9975 14.7265 10.9975 15.634C10.9975 17.338 11.875 18.8485 13.183 19.723C12.3925 19.708 11.617 19.4785 10.96 19.117C10.96 19.132 10.96 19.1515 10.96 19.171C10.96 21.562 12.6655 23.548 14.902 24.0055C14.5015 24.115 14.065 24.1675 13.612 24.1675C13.297 24.1675 12.979 24.1495 12.6805 24.0835C13.318 26.032 15.127 27.4645 17.278 27.511C15.604 28.8205 13.4785 29.6095 11.1775 29.6095C10.774 29.6095 10.387 29.5915 10 29.542C12.1795 30.9475 14.7625 31.75 17.548 31.75C26.602 31.75 31.552 24.25 31.552 17.749C31.552 17.5315 31.5445 17.3215 31.534 17.113C32.5105 16.42 33.331 15.5545 34 14.5585Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1504">
                    <rect width="24" height="24" fill="white" transform="translate(10 10)" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22.3334" cy="22" r="22" fill="#24A474" />
                <path
                  d="M31.9334 31.6V24.568C31.9334 21.112 31.1894 18.472 27.1574 18.472C25.2134 18.472 23.9174 19.528 23.3894 20.536H23.3414V18.784H19.5254V31.6H23.5094V25.24C23.5094 23.56 23.8214 21.952 25.8854 21.952C27.9254 21.952 27.9494 23.848 27.9494 25.336V31.576H31.9334V31.6Z"
                  fill="white"
                />
                <path d="M13.0454 18.7841H17.0294V31.6001H13.0454V18.7841Z" fill="white" />
                <path
                  d="M15.0374 12.4C13.7654 12.4 12.7334 13.432 12.7334 14.704C12.7334 15.976 13.7654 17.032 15.0374 17.032C16.3094 17.032 17.3414 15.976 17.3414 14.704C17.3414 13.432 16.3094 12.4 15.0374 12.4Z"
                  fill="white"
                />
              </svg>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22" r="22" fill="#24A474" />
                <path
                  d="M19.696 23.248C19.624 23.248 18.04 23.248 17.32 23.248C16.936 23.248 16.816 23.104 16.816 22.744C16.816 21.784 16.816 20.8 16.816 19.84C16.816 19.456 16.96 19.336 17.32 19.336H19.696C19.696 19.264 19.696 17.872 19.696 17.224C19.696 16.264 19.864 15.3519 20.344 14.512C20.848 13.6479 21.568 13.072 22.48 12.736C23.08 12.52 23.68 12.424 24.328 12.424H26.68C27.016 12.424 27.16 12.568 27.16 12.904V15.64C27.16 15.976 27.016 16.12 26.68 16.12C26.032 16.12 25.384 16.12 24.736 16.144C24.088 16.144 23.752 16.456 23.752 17.128C23.728 17.848 23.752 18.544 23.752 19.288H26.536C26.92 19.288 27.064 19.432 27.064 19.816V22.72C27.064 23.104 26.944 23.224 26.536 23.224C25.672 23.224 23.824 23.224 23.752 23.224V31.048C23.752 31.4559 23.632 31.6 23.2 31.6C22.192 31.6 21.208 31.6 20.2 31.6C19.84 31.6 19.696 31.456 19.696 31.096C19.696 28.576 19.696 23.32 19.696 23.248Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div class="md:w-1/2 flex items-center">
            <div class="p-5 text-justify">
              <h1
                class="text-xl md:text-2xl lg:text-4xl py-1 font-bold border-b-8 w-fit border-b-[#22a474]"
              >
                Dr. Yasir Qadhi
              </h1>
              <!-- <p class="h-2 border-b-8 my-1 w-6/12 border-b-[#22a474]"></p> -->
              <!-- <p class="font-bold mb-6">Islamic Theologian & Religious Studies Professor</p> -->
              <p class="mt-5 mb-10">
                Sh. Dr. Yasir Qadhi is someone that believes that one's life should be judged by
                more than just academic degrees and scholastic accomplishments. Friends and foe
                alike acknowledge that one of his main weaknesses is ice-cream, which he seems to
                enjoy with a rather sinister passion. The highlight of his day is twirling his
                little girl (a.k.a. "my little princess") round and round in the air and watching
                her squeal with joy. A few tid-bits from his mundane life: Sh. Yasir has a Bachelors
                in Hadith and a Masters in Theology from Islamic University of Madinah, and a PhD in
                Islamic Studies from Yale University. He is an instructor and Dean of Academic
                Affairs at AlMaghrib, and the Resident Scholar of the Memphis Islamic Center.
              </p>
              <button
                class="btn btn-outline shadow-md font-bold border-[#22a474] text-[#22a474] rounded-2xl hover:text-white hover:font-bold hover:bg-[#22a474] px-7"
              >
                Details
              </button>
            </div>
          </div>
        </section>

        <hr class="border-2 border-[#22a474] mb-20" />

        <!-- Bottom part -->
        <div class="w-full flex flex-col justify-center items-center">
          <div class="text-lg">
            <span
              class="cursor-pointer"
              :class="currentTab === 'allBlog' ? 'border-b-[2px] border-[#22a474]' : ''"
              @click="currentTab = 'allBlog'"
              >All Blogs</span
            >
            /
            <span
              class="cursor-pointer"
              :class="currentTab === 'latestBlog' ? 'border-b-[2px] border-[#22a474]' : ''"
              @click="currentTab = 'latestBlog'"
              >Latest Blogs</span
            >
          </div>
          <div class="w-full md:w-2/3">
            <PostDetailsCard
              v-if="isShowBlogDetails"
              :postDetails="selectedBlog"
              @goToAllBlog="handleBlogDetails()"
            />
            <div v-if="!isShowBlogDetails">
              <section v-for="blog in allBlogPost" :key="blog.id" class="flex gap-4">
                <div class="flex mt-10 w-full h-full border-[2px] border-gray-600 rounded-md">
                  <div class="w-[480px] h-auto rounded-l-lg">
                    <img :src="blog.img" alt="" class="h-full" />
                  </div>

                  <div
                    class="flex-grow p-2 flex flex-col justify-between hover:bg-gray-300 rounded-r-md transition-all duration-300 ease-in-out"
                  >
                    <div>
                      <p class="text-slate-700">Dr. Yasir Qadhi</p>
                      <div class="text-slate-400">{{ blog.date }}</div>
                      <h1 class="text-2xl font-bold mb-2">
                        Taking Lessons from The Strength of Maryam, Mother of Jesus
                      </h1>
                      <p class="text-justify">
                        {{ blog.description.substring(0, 150) }}
                        <span v-if="blog.description.length > 150">...</span>
                      </p>
                    </div>

                    <div
                      class="text-center bg-[#22a474] hover:bg-[#277b5c] transition-all duration-300 ease-in-out text-white py-2 rounded-lg cursor-pointer font-semibold mt-4 items-end w-32"
                      @click="handleBlogDetails(blog)"
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </section>
  </DefaultLayout>
</template>

<style scoped></style>
