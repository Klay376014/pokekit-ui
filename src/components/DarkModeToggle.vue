<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const shouldBeDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark

  if (shouldBeDark) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <div class="inline-block">
    <Button
      :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'"
      :label="isDark ? '深色模式' : '淺色模式'"
      severity="secondary"
      outlined
      @click="toggleDarkMode"
      class="transition-all duration-300"
    />
  </div>
</template>

<style scoped>
</style>