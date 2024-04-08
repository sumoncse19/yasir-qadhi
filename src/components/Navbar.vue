<script setup lang="ts">
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '/components/ui/menubar'

import RightArrow from './Base/Icon/RightArrow.vue'

// import axios from 'axios'

// const allArticle = ref('')

// const getAllArticle = async () => {
//   await axios.get(BASE_API_URL + '/fetch-publications').then((response) => {
//     allArticle.value = response.data
//     console.log(response.data)
//   })
// }

// onMounted(() => {
//   getAllArticle()
// })
</script>

<template>
  <div
    class="h-[70px] w-full flex justify-between items-center text-white fixed top-0 z-40 nav-bg duration-300"
  >
    <div class="container flex justify-between">
      <div class="flex items-center gap-6 uppercase text-sm w-full font-semibold">
        <div>
          <h1
            class="text-md text-xl font-semibold text-opacity-10 text-balance capitalize cursor-pointer hover:text-yellow-600"
          >
            <router-link to="/" class="font-semibold p-2 rounded-sm !border-none">
              Dr. Yasir Qadhi
            </router-link>
          </h1>
        </div>

        <div class="flex items-center justify-center">
          <Menubar class="rounded-none border-0">
            <MenubarMenu>
              <MenubarTrigger>
                <router-link to="/" class="font-semibold p-2 rounded-sm">Home</router-link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger class="font-semibold p-2 rounded-sm">
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(0,0,0,1)"
                >
                  <path
                    d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                  ></path>
                </svg>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem class="w-full duration-300">
                  <router-link
                    to="/certification"
                    class="w-full hover:pl-5 duration-300 text-sm pl-2 py-1"
                  >
                    Certification
                  </router-link>
                </MenubarItem>
                <MenubarItem class="w-full duration-300">
                  <router-link
                    to="/awardandhonors"
                    class="w-full hover:pl-5 duration-300 text-sm pl-2 py-1"
                    >Award &amp; Honors</router-link
                  >
                </MenubarItem>
                <MenubarItem class="w-full duration-300">
                  <router-link
                    to="/academic"
                    class="w-full hover:pl-5 duration-300 text-sm pl-2 py-1"
                    >Academic</router-link
                  >
                </MenubarItem>
                <MenubarItem class="w-full duration-300">
                  <router-link
                    to="/biography"
                    class="w-full hover:pl-5 duration-300 text-sm pl-2 py-1"
                    >Biography</router-link
                  >
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger class="font-semibold p-2 rounded-sm">
                Lectures
                <RightArrow />
              </MenubarTrigger>

              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <router-link
                      to="/lectures/lecture"
                      class="w-full pl-2 py-1 hover:pl-5 duration-300"
                    >
                      Lectures
                    </router-link>
                  </MenubarSubTrigger>

                  <MenubarPortal>
                    <MenubarSubContent class="" :align-offset="-5">
                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          <router-link
                            to="/lectures/lecture/quran"
                            class="w-full hover:pl-5 duration-300"
                          >
                            Quran
                          </router-link>
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              <router-link
                                to="/lectures/lecture/quran/quran-tafsir"
                                class="w-full hover:pl-5 duration-300"
                              >
                                Quran Tafsir
                              </router-link>
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              <router-link
                                to="/lectures/lecture/quran/quranic-lesson"
                                class="w-full hover:pl-5 duration-300"
                              >
                                The Quranic Lesson
                              </router-link>
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              <router-link
                                to="/lectures/lecture/quran/parables-of-the-quran"
                                class="w-full hover:pl-5 duration-300"
                              >
                                Parables of the Quran
                              </router-link>
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Hadith
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Hadith Tafsir
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          The Seerah
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Seerah - Prophet Mohammad (Sw.)
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Stories of the Prophets
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Du'A & Rukia
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Du'A
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Rukia
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Life Style
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Virtue & Recompense
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Heart Matters
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Manners of The Believers
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jannah
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jahannam
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jannah & Jahannam
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Sin
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Signs of the End of Times
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Marriage in Islam
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Personal life
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Family life
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Islamic life
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Social life & Awareness
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Islamic History
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Story of Prophets
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Story of the companions of Prophets
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              History & Biography of Imams
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Warriors & Kingdoms of Islam
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Advent of Islam
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Politics and Society
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Palestine
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              India
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              America
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              France
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Worldwide
                            </MenubarItem>
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Russia, Ukraine
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Human Journey
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Before Birth
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Life in world (Dunia)
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Grave (Kobor)
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Grave to Resurrection (Barzakh)
                            </MenubarItem>

                            <MenubarSub>
                              <MenubarSubTrigger
                                class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                              >
                                The Day of Judgment (Hasor)
                              </MenubarSubTrigger>
                              <MenubarPortal>
                                <MenubarSubContent class="" :align-offset="-5">
                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Hasor
                                  </MenubarItem>

                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Mizan
                                  </MenubarItem>

                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Fulsirat
                                  </MenubarItem>
                                </MenubarSubContent>
                              </MenubarPortal>
                            </MenubarSub>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Salat
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Jakat
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Hajj
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Islamic Knowledge
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Ramadan & Fasting
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Science & Nature
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>

                <MenubarSub>
                  <MenubarSubTrigger>
                    <router-link
                      to="/lectures/khutbah"
                      class="w-full pl-2 py-1 hover:pl-5 duration-300"
                      >Khutbah</router-link
                    >
                  </MenubarSubTrigger>
                  <MenubarPortal>
                    <MenubarSubContent class="" :align-offset="-5">
                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          <router-link
                            to="/lectures/khutbah/quran"
                            class="w-full hover:pl-5 duration-300"
                          >
                            Quran
                          </router-link>
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              <router-link
                                to="/lectures/khutbah/quran/quranic-tafsir"
                                class="w-full hover:pl-5 duration-300"
                              >
                                Quran Tafsir
                              </router-link>
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Quranic Lesson
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Parables of the Quran
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Hadith
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Hadith Tafsir
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          The Seerah
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Seerah - Prophet Mohammad (Sw.)
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Stories of the Prophets
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Dua & Rukia
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Dua
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Rukia
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Life Style
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Life Style
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Heart Matters
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Manners of The Believers
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jannah
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jahannam
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jannah & Jahannam
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Sin
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Signs of the End of Times
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Islamic History
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Islamic History
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Politics and Society
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Politics and Society
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Human Journey
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Before Birth
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Dunia
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Grave
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Barzakh (Grave to Resurrection)
                            </MenubarItem>

                            <MenubarSub>
                              <MenubarSubTrigger
                                class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                              >
                                Human Journey-The Day of Judgment (Hasor)
                              </MenubarSubTrigger>
                              <MenubarPortal>
                                <MenubarSubContent class="" :align-offset="-5">
                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Hasor
                                  </MenubarItem>

                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Mizan
                                  </MenubarItem>

                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Fulsirat
                                  </MenubarItem>
                                </MenubarSubContent>
                              </MenubarPortal>
                            </MenubarSub>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Salat
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Jakat
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Hajj
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>

                <MenubarSub>
                  <MenubarSubTrigger>
                    <router-link
                      to="/lectures/khatirah"
                      class="w-full pl-2 py-1 hover:pl-5 duration-300"
                    >
                      Khatirah
                    </router-link>
                  </MenubarSubTrigger>
                  <MenubarPortal>
                    <MenubarSubContent class="" :align-offset="-5">
                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          <router-link
                            to="/lectures/khatirah/quran"
                            class="w-full hover:pl-5 duration-300"
                          >
                            Quran
                          </router-link>
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              <router-link
                                to="/lectures/khatirah/quran/quran-tafsir"
                                class="w-full hover:pl-5 duration-300"
                              >
                                Quran Tafsir
                              </router-link>
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Quranic Lesson
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Parables of the Quran
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Hadith
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Hadith Tafsir
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          The Seerah
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Seerah - Prophet Mohammad (Sw.)
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Stories of the Prophets
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Dua & Rukia
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Dua
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Rukia
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Life Style
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Life Style
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Heart Matters
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Manners of The Believers
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jannah
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jahannam
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Jannah & Jahannam
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Sin
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Signs of the End of Times
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Islamic History
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Islamic History
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Politics and Society
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Politics and Society
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Human Journey
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Before Birth
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Dunia
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Grave
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Human Journey-Barzakh (Grave to Resurrection)
                            </MenubarItem>

                            <MenubarSub>
                              <MenubarSubTrigger
                                class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                              >
                                Human Journey-The Day of Judgment (Hasor)
                              </MenubarSubTrigger>
                              <MenubarPortal>
                                <MenubarSubContent class="" :align-offset="-5">
                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Hasor
                                  </MenubarItem>

                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Mizan
                                  </MenubarItem>

                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Fulsirat
                                  </MenubarItem>
                                </MenubarSubContent>
                              </MenubarPortal>
                            </MenubarSub>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Salat
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Jakat
                      </MenubarItem>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Hajj
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger class="font-semibold p-2 rounded-sm">
                Publications
                <RightArrow />
              </MenubarTrigger>

              <MenubarContent>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <router-link
                      to="/publication/article"
                      class="w-full pl-2 py-1 hover:pl-5 duration-300"
                      >Article</router-link
                    >
                  </MenubarSubTrigger>

                  <MenubarPortal>
                    <MenubarSubContent class="" :align-offset="-5">
                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Nature & Science
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>

                <MenubarSub>
                  <MenubarSubTrigger>
                    <router-link
                      to="/publication/book"
                      class="w-full pl-2 py-1 hover:pl-5 duration-300"
                      >Book</router-link
                    >
                  </MenubarSubTrigger>

                  <MenubarPortal>
                    <MenubarSubContent class="" :align-offset="-5">
                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        The Sirah
                      </MenubarItem>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Quran
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarSub>
                              <MenubarSubTrigger
                                class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                              >
                                The Quranic Lessons
                              </MenubarSubTrigger>
                              <MenubarPortal>
                                <MenubarSubContent class="" :align-offset="-5">
                                  <MenubarItem
                                    class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                                  >
                                    Kube Publishing Ltd.
                                  </MenubarItem>
                                </MenubarSubContent>
                              </MenubarPortal>
                            </MenubarSub>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Du'A and Rukia
                      </MenubarItem>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          LifeStyle
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Intimacy
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Sin
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Sex Matters
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Reflections
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarItem
                        class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                      >
                        Islamic History
                      </MenubarItem>

                      <!-- <MenubarSub>
                    <MenubarSubTrigger
                      class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                    >
                      Islamic History
                    </MenubarSubTrigger>
                    <MenubarPortal>
                      <MenubarSubContent class="" :align-offset="-5">
                        <MenubarItem
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          The Zahiris
                        </MenubarItem>

                        <MenubarItem
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Saudi Religious Propagation and Education
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarPortal>
                  </MenubarSub> -->

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Politics & Society
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Martyrdom, War and Politics
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>

                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Hadith
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Sacred Scrolls
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>

                <MenubarSub>
                  <MenubarSubTrigger>
                    <router-link
                      to="/publication/journal"
                      class="w-full pl-2 py-1 hover:pl-5 duration-300"
                      >Journal</router-link
                    >
                  </MenubarSubTrigger>

                  <MenubarPortal>
                    <MenubarSubContent class="" :align-offset="-5">
                      <MenubarSub>
                        <MenubarSubTrigger
                          class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        >
                          Islamic History
                        </MenubarSubTrigger>
                        <MenubarPortal>
                          <MenubarSubContent class="" :align-offset="-5">
                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              The Zahiris
                            </MenubarItem>

                            <MenubarItem
                              class="text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                            >
                              Saudi Religious Propagation and Education
                            </MenubarItem>
                          </MenubarSubContent>
                        </MenubarPortal>
                      </MenubarSub>
                    </MenubarSubContent></MenubarPortal
                  ></MenubarSub
                >
              </MenubarContent>
            </MenubarMenu>

            <!-- <MenubarMenu>
          <MenubarTrigger
            >Arabic Grammer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(0,0,0,1)"
            >
              <path
                d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
              ></path></svg
          ></MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <router-link to="/" class="w-full hover:pl-5 duration-300">Ilmul Arood</router-link>
            </MenubarItem>
            <MenubarItem>
              <router-link to="/" class="w-full hover:pl-5 duration-300"
                >At- Tuhfatus Saniyya</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/" class="w-full hover:pl-5 duration-300"
                >(Sharh) Explanation of Ibn Aqeel</router-link
              >
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu> -->
            <!-- 
        <MenubarMenu>
          <MenubarTrigger>Darsul Hadith <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <router-link to="/" class=" w-full hover:pl-5 duration-300"></router-link>
            </MenubarItem>
            <MenubarItem>
              <router-link to="/" class=" w-full hover:pl-5 duration-300"></router-link>
            </MenubarItem>
            <MenubarItem>
              <router-link to="/" class=" w-full hover:pl-5 duration-300"></router-link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu> -->

            <!-- <MenubarMenu>
          <MenubarTrigger
            >Quran
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(0,0,0,1)"
            >
              <path
                d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
              ></path></svg
          ></MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <router-link to="/" class="w-full hover:pl-5 duration-300"
                >Tafsirul Quran</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/" class="w-full hover:pl-5 duration-300"
                >Quran Recitation</router-link
              >
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu> -->

            <MenubarMenu>
              <MenubarTrigger>
                <!-- class="w-full hover:pl-5 duration-300" -->
                <router-link to="/podcasts" class="font-semibold p-2 rounded-sm"
                  >Podcasts
                </router-link>
              </MenubarTrigger>
              <!-- <MenubarContent>
            <MenubarItem>
              <router-link to="/" class=" w-full hover:pl-5 duration-300">Photo Gallery</router-link>
            </MenubarItem>
            <MenubarItem>
              <router-link to="/" class=" w-full hover:pl-5 duration-300">Blogs</router-link>
            </MenubarItem>
          </MenubarContent> -->
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                <router-link to="/research" class="font-semibold p-2 rounded-sm"
                  >Research
                </router-link>
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger class="font-semibold p-2 rounded-sm"
                >Events
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(0,0,0,1)"
                >
                  <path
                    d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                  ></path>
                </svg>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <router-link
                    to="/event/livestreaming"
                    class="w-full pl-2 py-1 hover:pl-5 duration-300"
                    >Livestreaming</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/event/currentEvent"
                    class="w-full pl-2 py-1 hover:pl-5 duration-300"
                    >Current Event</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/event/upcomingEvent"
                    class="w-full pl-2 py-1 hover:pl-5 duration-300"
                    >Upcoming Event</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/event/pastEvent"
                    class="w-full pl-2 py-1 hover:pl-5 duration-300"
                    >Past Event</router-link
                  >
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                <router-link to="/appointment" class="font-semibold p-2 rounded-sm"
                  >Appointment</router-link
                >
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <router-link to="/photogallery" class="font-semibold p-2 rounded-sm"
                  >Photo Gallery</router-link
                >
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <router-link to="/blog" class="font-semibold p-2 rounded-sm">Blogs</router-link>
              </MenubarTrigger>
            </MenubarMenu>

            <!-- <MenubarMenu>
          <MenubarTrigger
            >More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(0,0,0,1)"
            >
              <path
                d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
              ></path></svg            ></MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <router-link to="/" class="w-full hover:pl-5 duration-300"
                >Photo Gallery</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/" class="w-full hover:pl-5 duration-300">Blogs</router-link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu> -->
          </Menubar>
        </div>
      </div>
      <div class="font-bold text-sm self-center">
        <div>
          <router-link to="/">
            <span
              class="bg-gradient-to-r from-[#292f8f] to-[#22a474] !text-white px-3 py-2 rounded-md hover:shadow-lg border-[1px] border-white shadow-sm"
              >Contact</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: white;
  background: linear-gradient(45deg, #22a474 0%, #292f8f 100%);
  border: 1px solid black;
}
h1 > .router-link-active {
  color: white;
  background: transparent;
}
.nav-bg {
  background: linear-gradient(45deg, rgba(34, 164, 116, 1) 0%, #29308e 100%);
}
.menu-sub-content {
  @apply min-w-[220px] outline-none bg-slate-300 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity];
}
</style>
