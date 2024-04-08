<template>
  <section class="container my-14">
    <div class="flex items-center justify-center">
      <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Accomplishment</h2>
      <p></p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-slate-100 mx-auto px-12 pb-12 pt-6"
    >
      <div>
        <div class="flex items-center justify-center">
          <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Award</h2>
        </div>

        <div v-for="award in awards" :key="award.id" class="p-4">
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center h-[240px] border-2 border-sky-500"
          >
            <div class="flex justify-between">
              <h5 class="text-xl font-bold mb-2 text-justify">{{ award.title }}</h5>
              <p class="pt-1 border py-1 px-1 bg-[#22a474] text-white rounded">2023</p>
            </div>
            <p class="text-gray-600 text-justify w-4/5">{{ award.description }}</p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-center">
          <h2 class="text-center text-4xl text-[#22a474] font-bold my-5">Certification</h2>
        </div>

        <div v-for="certificate in certifications" :key="certificate.id" class="p-4">
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center h-[240px] border-2 border-sky-500"
          >
            <div class="flex justify-between">
              <h5 class="text-xl font-bold mb-2 text-justify">{{ certificate.title }}</h5>
              <p class="pt-1 border py-1 px-1 bg-[#22a474] text-white rounded-lg">
                {{ certificate.year }}
              </p>
            </div>

            <p class="text-gray-600 text-justify w-4/5">{{ certificate.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const awards = ref([
  {
    id: 1,
    title: 'BISCA Awards',
    description: `work and effort span nearly two decades of teaching and giving da'wah in multiple Muslim and western countries. We recognise and celebrate Sh Dr Yasir Qadhi's lifetime achievements in teaching Islam and da'wah at the BISCA Awards 2023 supported by The British Board of Scholars & Imams (BBSI).`
  },
  {
    id: 2,
    title: 'ICNA Award',
    description:
      'In recognition of outstanding contribution, commitment and dedication to the Islamic Work and Leadership. May Allah SWT bless you with the best of the rewards in both worlds. Ameen.'
  },
  {
    id: 3,
    title: 'INNA Award',
    description:
      'In recognition of outstanding contribution, commitment and dedication to the Islamic Work and Leadership. May Allah SWT bless you with the best of the rewards in both worlds. Ameen.'
  }
])

const certifications = ref([
  {
    id: 1,
    title: 'PhD in Religious Studies',
    year: '2013',
    description: `He has completed a PhD in Religious Studies from Yale University. He is one of the few people who has combined a traditional Eastern Islamic seminary education with a Western academic training of the study of Islam.`
  },
  {
    id: 2,
    title: 'BA & MA',
    year: '2000-2005',
    description:
      'He graduated with a B.A. from the College of Hadith and Islamic Sciences, and then completed a M.A. in Islamic Theology from the College of Dawah.'
  },
  {
    id: 3,
    title: 'B.Sc. in Chemical Engineering',
    year: '1995',
    description:
      'Yasir graduated with a B.Sc. in Chemical Engineering from the University of Houston, after which he was accepted as a student at the Islamic University of Madinah.'
  }
])
</script>
