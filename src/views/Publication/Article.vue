<template>
  <DefaultLayout>
    <section class="bg-slate-100">
      <img
        src="../../assets/image/Publication/articles-banner.png"
        alt="article-banner"
        class="w-full object-cover"
      />
      <div class="container mx-auto p-4">
        <div class="flex items-center justify-center">
          <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Recent Articles</h2>
          <p></p>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <div v-for="card in cards" :key="card.id" class="py-1 w-full px-5">
            <Card class="border-2 border-sky-500">
              <CardHeader>
                <CardTitle>
                  <h2 class="card-title font-semibold text-xl text-[#22a474]">{{ card.title }}</h2>
                </CardTitle>
              </CardHeader>
              <CardContent class="w-full">
                <p class="text-justify text-gray-800 text-lg">{{ card.description }}</p>
                <p class="text-sm text-gray-500 pt-1">— {{ card.author }}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '/components/ui/card'
import axios from 'axios'

const allArticle = ref('')

const getAllArticle = async () => {
  await axios.get(BASE_API_URL + '/fetch-publications').then((response) => {
    allArticle.value = response.data
    console.log(response.data)
  })
}

onMounted(() => {
  getAllArticle()
})

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
    title: `Muslims opposed to LGBTQ curricula for their kids aren't bigots`,
    description:
      'We are witnessing a unique and welcome phenomenon: Muslims in the West are at the forefront of a social movement that transcends any one faith or ethnicity. For those following the news, protests led by parents have erupted across the United States and Canada against school boards that wish to teach schoolchildren content about the acceptability of LGBTQ lifestyles.',
    author: 'Dr. Yasir Qadhi'
  },
  {
    id: 3,
    title: 'Akhlāq 101: Character Development For Muslims',
    description: `All this talk about akhlaq begs the question–is it something a person is in control of or something innate that a person is born with? Akhlāq. The entire message of Islam and the reason why Allah subḥānahu wa ta'āla (glorified and exalted be He) sent us a Messenger is to perfect noble manners.`,
    author: 'Dr. Yasir Qadhi'
  },
  {
    id: 4,
    title: 'Fatwa Regarding Transgenderism',
    description:
      'This fatwa was initially prepared by Dr. Yasir Qadhi at the behest of the Fiqh Council of North America. The Fiqh Council, after some modifications, unanimously approved it.',
    author: 'Dr. Yasir Qadhi'
  },
  {
    id: 5,
    title: 'Sectarianism And ‘The Lady Of Heaven',
    description:
      'Regarding the movie ‘The Lady of Heaven’I have just finished a 3-part series on sectarianism; this post needs to be understand in light of that khutbah (if you haven’t listened to these khuṭbahs, please do).',
    author: 'Dr. Yasir Qadhi'
  },
  {
    id: 6,
    title: 'Do Muslims Believe in Aliens?',
    description:
      'There are many incidences documented of unidentified flying objects (UFOs) and weird creatures from another world coming to our world. Some believe it to be true, others believe it to be a hoax – what is the correct ‘theological’ Islamic position on other life forms?',
    author: 'Dr. Yasir Qadhi'
  }
])
</script>
