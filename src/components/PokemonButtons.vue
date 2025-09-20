<script setup lang="ts">
import Button from 'primevue/button'
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (val: string) =>
      [
        'normal', 'fire', 'water', 'electric', 'grass', 'ice',
        'fighting', 'poison', 'ground', 'flying', 'psychic',
        'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
      ].includes(val),
  },
  label: {
    type: String,
    required: true,
  },
})

const bgClass = computed(() => `bg-pokemon-${props.type}-500`)
const hoverClass = computed(() => `hover:bg-pokemon-${props.type}-700`)
</script>

<template>
  <Button
    :label="label"
    :class="[
      'text-white dark:text-black',
      'transition-all duration-300',
      'shadow-md hover:shadow-lg active:scale-95',
      'border-none',
      bgClass,
      hoverClass,
    ]"
  />
</template>

<style scoped>
.pokemon-buttons {
  padding: 1rem;
}
</style>