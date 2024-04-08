<script setup lang="ts">
import { MenubarSubTrigger, type MenubarSubTriggerProps } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<MenubarSubTriggerProps & { inset?: boolean; class?: string }>()
</script>

<template>
  <MenubarSubTrigger
    v-bind="props"
    :class="[
      cn(
        'flex cursor-default select-none items-center rounded-sm text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-[#29308e] data-[state=open]:text-white data-[state=open]:routerActive subTriggerHover',
        inset && 'pl-8',
        props.class
      )
    ]"
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </MenubarSubTrigger>
</template>

<style scoped>
.subTriggerHover:hover {
  background: linear-gradient(45deg, rgba(34, 164, 116, 1) 0%, rgba(41, 47, 143, 1) 100%);
}
</style>
