<script setup lang="ts">
import Badge from 'primevue/badge'
import { computed } from 'vue'
import type { PokemonType } from '../types/pokemon'

const props = defineProps<{
  type: PokemonType
  value: string
  size?: 'sm' | 'md' | 'lg'
}>()

const sizeDefine = computed(() => {
  if (!props.size || props.size === 'md') return ''
  return props.size === 'sm' ? 'small' : 'large'
})
const bgClass = computed(() => `bg-pokemon-${props.type}-500`)
</script>

<template>
  <Badge
    :value="value"
    :size="sizeDefine"
    :class="[
      'text-white',
      bgClass
    ]"
  />
</template>

<style scoped>
</style>