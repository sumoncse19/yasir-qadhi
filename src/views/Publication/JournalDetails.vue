<template>
  <DefaultLayout>
    <div class="py-6 px-4 md:px-10 lg:px-20 xl:px-32 bg-slate-100 flex flex-col md:flex-row gap-4">
      <img
        src="../../assets/image/journal-details.png"
        alt="journal details"
        class="w-full md:w-1/2 rounded-lg border-2"
      />
      <div class="mx-[5%] flex-col justify-between">
        <p class="text-3xl text-[#22a474] font-bold">
          {{ lists.title }}
        </p>
        <p class="text-2xl text-gray-500 font-semibold">{{ lists.heading }}</p>
        <p class="text-xl mt-1 text-gray-500"><span>By -</span> {{ lists.author }}</p>
        <div class="py-2">
          <p class="text-l text-gray-500">
            <span class="font-semibold">Published on: </span>{{ lists.published }}
          </p>
        </div>
        <hr class="my-2 bg-gray-200 border-1 border-[#22a474]" />
        <div class="items-center flex-col">
          <p><span class="font-semibold text-xl">Abstract</span></p>
          <hr class="my-4 bg-gray-200 border-1 border-[#22a474]" />
          <p class="text-sm text-justify mt-2">
            {{ lists.description }}
          </p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue'

const route = useRoute()

onMounted(() => {
  lists.value = lists.value.find((el) => el.id == route.params.id)
})

const lists = ref([
  {
    id: '1',
    title: 'Evolution',
    published: 'August 31, 2018',
    author: ' Dr. Nazir Khan and Dr. Yasir Qadhi',
    heading: 'Human Origins - Part 1: Theological Conclusions and Empirical Limitations',
    description: `The concept of human evolution and whether it is compatible or irreconcilable with religious doctrine has been frequently debated, but all too often the popular discourse fails to provide a sound academic study of the philosophy of science and matters of theology and scriptural exegesis. This article reviews the scriptural account of human origins (including the merits and failures of various hermeneutical approaches) before delving into the philosophy of science (including the realism versus constructive empiricism debate).`
  },
  {
    id: '2',
    title: 'The Genesis',
    published: 'March 18th-20th 2016',
    author: 'Dr. Yasir Qadhi',
    heading:
      'While Sunnism is the largest sect of Islam, Sunnism itself is divided into many strands',
    description: `While Sunnism is the largest sect of Islam, Sunnism itself is divided into many
    strands. The two main strands of Sunnism for the last few centuries are the Atharī (or
    Salafī) strand, and the Ashʿarī strand. This papers seeks to examine the earliest recorded
    controversies that signal this intra-Sunnī divide. While each of these two groups has
    historically attempted to claim true Sunnī ‘orthodoxy’ by denying the legitimacy, and at
    times even the early existence, of the other, it will be shown that the genesis of this
    intra-Sunnī divide dates back to the first century of Sunnism itself, viz., the 3rd AH/8th CE
    centuries, and that there are specific historic incidents that indicate theological tensions
    within the nascent Sunnī movement that would later be manifested in the two streams of
    Ashʿarism and Salafism. Hence, it can be argued that Sunnism was never truly unified to
    begin with, and that these incidents demonstrate theological tensions that existed from
    its very origins.`
  },
  {
    id: '3',
    title: `From Dir'iyya to Riyadh`,
    published: 'April 2022',
    author: 'Dr. Yasir Qadhi',
    heading: `The History and Global Impact of Saudi Religious Propagation and Education`,
    description:
      'This chapter explores the rise of the Salafi movement and the dynamics of its popularity among a growing number of Sunni Muslims, chief among these being the impact of the Islamic University of Medina in Saudi Arabia, the preeminent Salafi higher institution of learning. The chapter also examines the ways that the university and Saudi religious diplomacy and soft power projection are shaped not only by the kingdom’s national interests but also by local dynamics in different countries where indigenous Salafi communities have emerged. The relationship between Saudi Salafism and local Salafisms is not unidirectional, but rather involves a multidirectional exchange of influences and relations.'
  },
  {
    id: '4',
    title: `A Christan Islamist`,
    published: '21 Apr 2015',
    author: 'Dr. Yasir Qadhi',
    heading: `Political Theology`,
    description: `Abstract In this review, the author discusses Volf’s paradigm from an Islamic perspective, and compares and contrasts some of Volf’s assertions with those of his avowed counterpart: the Muslim fundamentalist Syed Qutb. Some interesting questions are raised, and the differences between these two paradigms, it is claimed, is not as great as what might initially appear.`
  },
  {
    id: '5',
    title: `The Path of Allah or the Paths of Allah?`,
    published: 'August 31, 2018',
    author: 'Dr. Yasir Qadhi',
    heading: 'Human Origins - Part 1: Theological Conclusions and Empirical Limitations',
    description: `The concept of human evolution and whether it is compatible or irreconcilable with religious doctrine has been frequently debated, but all too often the popular discourse fails to provide a sound academic study of the philosophy of science and matters of theology and scriptural exegesis. This article reviews the scriptural account of human origins (including the merits and failures of various hermeneutical approaches) before delving into the philosophy of science (including the realism versus constructive empiricism debate).`
  },
  {
    id: '6',
    title: `The Zahiris`,
    published: 'March 18th-20th 2016',
    author: 'Dr. Yasir Qadhi',
    heading:
      'While Sunnism is the largest sect of Islam, Sunnism itself is divided into many strands',
    description: `While Sunnism is the largest sect of Islam, Sunnism itself is divided into many
    strands. The two main strands of Sunnism for the last few centuries are the Atharī (or
    Salafī) strand, and the Ashʿarī strand. This papers seeks to examine the earliest recorded
    controversies that signal this intra-Sunnī divide. While each of these two groups has
    historically attempted to claim true Sunnī ‘orthodoxy’ by denying the legitimacy, and at
    times even the early existence, of the other, it will be shown that the genesis of this
    intra-Sunnī divide dates back to the first century of Sunnism itself, viz., the 3rd AH/8th CE
    centuries, and that there are specific historic incidents that indicate theological tensions
    within the nascent Sunnī movement that would later be manifested in the two streams of
    Ashʿarism and Salafism. Hence, it can be argued that Sunnism was never truly unified to
    begin with, and that these incidents demonstrate theological tensions that existed from
    its very origins.`
  },
  {
    id: '7',
    title: `Foreign Words in the Quran`,
    published: 'April 2022',
    author: 'Dr. Yasir Qadhi',
    heading: `The History and Global Impact of Saudi Religious Propagation and Education`,
    description:
      'This chapter explores the rise of the Salafi movement and the dynamics of its popularity among a growing number of Sunni Muslims, chief among these being the impact of the Islamic University of Medina in Saudi Arabia, the preeminent Salafi higher institution of learning. The chapter also examines the ways that the university and Saudi religious diplomacy and soft power projection are shaped not only by the kingdom’s national interests but also by local dynamics in different countries where indigenous Salafi communities have emerged. The relationship between Saudi Salafism and local Salafisms is not unidirectional, but rather involves a multidirectional exchange of influences and relations.'
  },
  {
    id: '8',
    title: `In the light of the Glorious Qurân`,
    published: '21 Apr 2015',
    author: 'Dr. Yasir Qadhi',
    heading: `Political Theology`,
    description: `Abstract In this review, the author discusses Volf’s paradigm from an Islamic perspective, and compares and contrasts some of Volf’s assertions with those of his avowed counterpart: the Muslim fundamentalist Syed Qutb. Some interesting questions are raised, and the differences between these two paradigms, it is claimed, is not as great as what might initially appear.`
  }
])
</script>
