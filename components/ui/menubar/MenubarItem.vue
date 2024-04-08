<script setup lang="ts">
import { MenubarItem, type MenubarItemEmits, type MenubarItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<MenubarItemProps & { inset?: boolean; class?: string }>()

const emits = defineEmits<MenubarItemEmits>()
</script>

<template>
  <MenubarItem
    v-bind="props"
    :class="[
      cn(
        'relative flex cursor-default select-none items-center rounded-sm text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 menuHover',
        inset && 'pl-8',
        props.class
      )
    ]"
    @select="emits('select', $event)"
  >
    <slot />
  </MenubarItem>
</template>

<style scoped>
.menuHover:hover {
  @apply text-white;
  background: linear-gradient(45deg, rgba(34, 164, 116, 1) 0%, rgba(41, 47, 143, 1) 100%);
}
</style>
