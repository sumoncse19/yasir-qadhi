<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Hero from '../components/Hero.vue'
import ProfileSpeech from '../components/HomeFolder/ProfileSpeech.vue'
import RecentArticle from '../components/HomeFolder/RecentArticles.vue'
import Research from '../components/HomeFolder/Research.vue'
import Publications from '../components/HomeFolder/PublicationList.vue'
import AwardCertification from '../components/HomeFolder/AwardCertification.vue'
import ContactMe from '../components/HomeFolder/ContactMe.vue'
</script>

<template>
  <DefaultLayout>
    <Hero />
    <ProfileSpeech />
    <Research />
    <RecentArticle />
    <Publications />
    <AwardCertification />
    <ContactMe />
  </DefaultLayout>
</template>
