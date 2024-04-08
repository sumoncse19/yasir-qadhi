<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { watch } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value

console.log('Current Route:', currentRoute, router)

watch(
  () => router.currentRoute.value.fullPath,
  () => {
    console.log(currentRoute.params.slug, 'currentRoute', router)
  }
)
</script>

<template>
    <DefaultLayout>
  <div>Hello</div>
</template>
