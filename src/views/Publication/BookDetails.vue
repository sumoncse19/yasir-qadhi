<template>
  <DefaultLayout>
    <div class="py-[30px] px-[5%] bg-slate-100 flex flex-col md:flex-row gap-4">
      <img :src="books.image" alt="image" class="rounded-lg h-[350px] lg:w-1/4 md:w-1/3 border-2" />
      <div class="mx-[5%] flex flex-col justify-between md:w-1/2">
        <p class="text-2xl text-[#22a474] font-semibold">
          {{ books.title }}
        </p>
        <p class="text-xl mt-1 text-gray-500"><span>By -</span> {{ books.author }}</p>
        <hr class="my-4 bg-gray-200 border-1 border-[#22a474]" />
        <p class="text-sm text-justify mt-2">
          {{ books.description }}
        </p>
        <div class="mt-4">
          <hr class="my-4 bg-gray-200 border-1 border-[#22a474]" />
          <p class="text-l text-gray-500">
            <span class="font-semibold">Published on: </span>{{ books.published }}
          </p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { onMounted, ref } from 'vue'
const route = useRoute()

// watch(
//   () => route.params.id,
//   () => {
//     books.value = books.value.find((el) => el.id == route.params.id)
//   }
// )

onMounted(() => {
  books.value = books.value.find((el) => el.id == route.params.id)
})

const books = ref([
  {
    id: '1',
    title: "The Miracle of the Qur'an",
    author: 'Dr. Yasir Qadhi',
    description: `The Miracle of the Qur'an. The Qur'an is the greatest miracle of God (Allah) and the Qur'an is the proof of the truthfulness of Islam. It is the standing and everlasting miracle, but very rarely, have we heard how is it a miracle? The Qur'an is the ultimate miracle of our Prophet Muhammad (Sallahualaihi wassalam - S.A.W). It is such a miracle that all the other miracles are considered trivial and inconsequential compared to the Qur'an. This is because the Qur'an is so powerful, so bright and blinding that no matter how bright the other miracles are; when you have the sun, the stars become useless. In this book, Dr. Yasir Qadhi discussed on the miracles of the Qur'an that we either have never acknowledge or we often overlooked. The miracles of the Qur'an are endless and the points are abundance to be mentioned.`,
    image: '/src/assets/image/books/miracle.jpg',
    published: 'March 1, 2021'
  },
  {
    id: '2',
    title: 'Our Family Our Legacy',
    author: 'Dr. Yasir Qadhi',
    description: `A family is an important unit in our life. In building this institution, marriage becomes a susceptible foundation that holds the family together. This comes with rights and responsibilities that we often neglect and take for granted. In Our Family Our Legacy, Dr Yasir Qadhi analyses the topic of a family institution by dissecting it into two dichotomous parts, which are spouses and children. In today's world where family and marriage institutions are becoming less and less favourable, the author highlights the significance of keeping them steady, by suggesting tips and ways in understanding your spouses and children, as a way to make them understand you as well. He also reiterates the rights and responsibilities that we all should take note of and adhere to for a sakinah, mawaddah and raḥmah marriage in which children will bloom.`,
    image: '/src/assets/image/books/family.jpg',
    published: 'February 22, 2023'
  },
  {
    id: '3',
    title: 'Dua The Weapon of the Believer',
    author: 'Dr. Yasir Qadhi',
    description: `In this work, the author elaborates on the status, importance and etiquette of dua in Islam. In the most comprehensive work yet to be written in Engish on this topic, the author discusses, amongst other matters: the excellence and benefits of dua; the types of dua; the pre-conditions that are needed in order for the dua to be accepted; the recommended etiquette of performing dua; the timings and situations in which a dua is more likely to be answered; the various factors that aid or prevent a dua from being accepted; the relationship of dua with the Devine Decree (qadr); the wisdom behind a delayed response, and many other relevant topics.`,
    image: '/src/assets/image/books/dua.jpg',
    published: 'January 1, 2001'
  },
  {
    id: '4',
    title: `The Parables of the Qur'an`,
    author: 'Dr. Yasir Qadhi',
    description: `The Qur’an is full of parables. Each one, when its meaning is unpacked and understood,
          offers wisdom and guidance. Surah Kahf, chapter 18 from the Qur’an, is particularly
          thought provoking, and Muslims are advised to read it at least once a week. But why? And
          what can we gain from it? In this book Yasir Qadhi leads us through Surah Kahf, unfolding
          the lines, stories and symbols that have inspired people for over a thousand years: the
          people of the cave, Prophet Musa’s momentous encounter with Khidr, the two men and their
          gardens, and Gog and Magog. And surely We have explained matters in people in the Qur’an
          in diverse ways, using all manners of parables. (Qur’an 18:54) Through Yasir Qadhi’s
          unmistakeable voice, modern Muslims may glimpse some of the Qur’an’s profound meaning.
          Say: “If the sea were to become ink to record the Words of my Lord, indeed the sea would
          all be used up before the Words of my Lord are exhausted…” (Qur’an 18:109)`,
    image: '/src/assets/image/books/quran.jpg',
    published: 'May 17, 2022'
  },
  {
    id: '5',
    title: `The Sciences of the Qur'an`,
    author: 'Dr. Yasir Qadhi',
    description: `An introduction to the Sciences of the Qur'aan presents a detailed and thorough explanation of the sciences related to the history, understanding and implementation of the Qu'aan. The book provides the English reader with a detailed analysis of classic Muslim scholarship regarding: the process of Inspiration (Wahy); the various means of classifying verses of the Qur'aan; the history of the compilation of the Qur'aan; the meaning of the seven ahruf and the ten qira'aat of the Qur'aan; the miraculous nature of the Qur'aan; the concept of abrogation in the Qur'aan; the procedure and methodology of tafseer; and many other topics. The work has a number of sections dedicated to explaining the traditional Muslim refutations of certain beliefs of the Ash'arees with regards to the Qur'aan. This book also includes detailed discussions on modern Western scholarship of the Qur'aan. After presenting a history of the English translation of the Qur'aan, along with a critical review of some translations, the author discusses and refutes common Orientalist polemic literature on the Qur'aan. The work is unique in that it presents classical material in a simple and modern style, while maintening a high academic level. It is the most advanced work of its kind in the English language, and a nessary reference for all serious students of Islamic Knowledge.`,
    image: '/src/assets/image/books/quranic.jpg',
    published: 'January 1, 1999'
  },
  {
    id: '6',
    title: 'Reflections: Personal Insights',
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
    description: `Following Dr Yasir Qadhi’s ground-breaking video lecture series on the sīrah of the Prophet Muhammad , this book is an equally impactful written adaptation. It provides a refreshing insight into the life of the Final Messenger and contextualises the sīrah in the modern-day context. It is not just a chronological account but also offers beneficial and actionable lessons, relating the biography of the Prophet (PBUH) to our daily lives.`,
    image: '/src/assets/image/books/sirat.jpg',
    published: 'July 25, 2023'
  },
  {
    id: '9',
    title: 'Lessons from Surah Al-Kahf',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/surah.jpg',
    published: 'March 4, 2020'
  },
  {
    id: '10',
    title: 'Lessons from Surah Yusuf',
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
    title: 'A Christian Islamist?',
    author: 'Dr. Yasir Qadhi',
    image: '/src/assets/image/books/political.png'
  }
])
</script>
