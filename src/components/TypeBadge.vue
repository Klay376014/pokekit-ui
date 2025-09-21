<script setup lang="ts">
import Badge from 'primevue/badge'
import { computed } from 'vue'
import type { PokemonType } from '../types/pokemon'

const props = defineProps<{
  type: PokemonType
  value: string
  size?: 'sm' | 'md' | 'lg'
  fixedWidth?: boolean | number | string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}>()

const sizeDefine = computed(() => {
  if (!props.size || props.size === 'md') return ''
  return props.size === 'sm' ? 'small' : 'large'
})

const bgClass = computed(() => `bg-pokemon-${props.type}-500`)

const roundedClass = computed(() => {
  if (!props.rounded) return 'rounded-sm' // 預設為 sm
  return `rounded-${props.rounded}`
})

const widthStyle = computed(() => {
  if (!props.fixedWidth) return {}

  if (props.fixedWidth === true) {
    // 預設固定寬度 - 根據 size 調整
    const defaultWidths = {
      sm: '3rem',
      md: '4rem',
      lg: '5rem'
    }
    return { width: defaultWidths[props.size || 'md'], minWidth: defaultWidths[props.size || 'md'] }
  }

  if (typeof props.fixedWidth === 'number') {
    return { width: `${props.fixedWidth}px`, minWidth: `${props.fixedWidth}px` }
  }

  return { width: props.fixedWidth, minWidth: props.fixedWidth }
})
</script>

<template>
  <Badge
    :value="value"
    :size="sizeDefine"
    :class="[
      'text-white',
      bgClass,
      roundedClass
    ]"
    :style="widthStyle"
  />
</template>

<style scoped>
</style>