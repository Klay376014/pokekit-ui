<script setup lang="ts">
import Button from 'primevue/button'
import { computed } from 'vue'
import type { PokemonType } from '../types/pokemon'

const props = defineProps<{
  type: PokemonType
  label: string
  outlined?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()
 

const bgClass = computed(() =>
  props.outlined ? '' : `bg-pokemon-${props.type}-500`
)
const hoverClass = computed(() =>
  props.outlined ? `hover:bg-pokemon-${props.type}-100` : `hover:bg-pokemon-${props.type}-700`
)
const textClass = computed(() =>
  props.outlined ? `text-pokemon-${props.type}-500` : 'text-white dark:text-black'
)
const shadowClass = computed(() => {
  if (props.outlined) return ''
  return 'pokemon-text-shadow'
})
const borderClass = computed(() =>
  props.outlined ? `border-pokemon-${props.type}-500` : 'border-none'
)
const sizeClass = computed(() => {
  if (!props.size || props.size === 'md') return 'py-2'
  return props.size === 'sm' ? 'text-xs px-2 py-1' : 'text-xl py-3 px-6'
})
</script>

<template>
  <Button
    :label="label"
    :outlined="outlined"
    :class="[
      textClass,
      'transition-all duration-300',
      'shadow-md hover:shadow-lg active:scale-95',
      borderClass,
      bgClass,
      hoverClass,
      sizeClass,
      shadowClass
    ]"
  />
</template>

<style scoped>
.pokemon-text-shadow {
  text-shadow: 1px 1px 2px theme("colors.pokemon.normal.700 / 0.8");
}

/* 針對不同寶可夢屬性的動態陰影 */
.bg-pokemon-fire-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.fire.700 / 0.8"); }
.bg-pokemon-water-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.water.700 / 0.8"); }
.bg-pokemon-electric-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.electric.700 / 0.8"); }
.bg-pokemon-grass-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.grass.700 / 0.8"); }
.bg-pokemon-ice-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.ice.700 / 0.8"); }
.bg-pokemon-fighting-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.fighting.700 / 0.8"); }
.bg-pokemon-poison-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.poison.700 / 0.8"); }
.bg-pokemon-ground-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.ground.700 / 0.8"); }
.bg-pokemon-flying-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.flying.700 / 0.8"); }
.bg-pokemon-psychic-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.psychic.700 / 0.8"); }
.bg-pokemon-bug-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.bug.700 / 0.8"); }
.bg-pokemon-rock-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.rock.700 / 0.8"); }
.bg-pokemon-ghost-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.ghost.700 / 0.8"); }
.bg-pokemon-dragon-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.dragon.700 / 0.8"); }
.bg-pokemon-dark-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.dark.700 / 0.8"); }
.bg-pokemon-steel-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.steel.700 / 0.8"); }
.bg-pokemon-fairy-500.pokemon-text-shadow { text-shadow: 1px 1px 2px theme("colors.pokemon.fairy.700 / 0.8"); }
</style>