<script setup lang="ts">
import ProgressBar from 'primevue/progressbar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import type { PokemonStat } from '../types/pokemon'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  stats: Record<PokemonStat, number>
  maxValue?: number
}>(), {
  maxValue: 255
})

// 能力值名稱對應
const statLabels: Record<PokemonStat, string> = {
  hp: ' HP',
  attack: 'ATK',
  defense: 'DEF',
  spacialAttack: 'SPA',
  spacielDefense: 'SPD',
  speed: 'SPE'
}

// 能力值背景色對應
const statColors: Record<PokemonStat, string> = {
  hp: '#69DC12',
  attack: '#EFCC18',
  defense: '#E86412',
  spacialAttack: '#14C3F1',
  spacielDefense: '#4A6ADF',
  speed: '#D51DAD'
}

// 轉換 stats 為 table 數據
const tableData = computed(() => {
  return Object.entries(props.stats).map(([stat, value]) => ({
    stat: stat as PokemonStat,
    label: statLabels[stat as PokemonStat],
    value,
    color: statColors[stat as PokemonStat],
    percentage: (value / props.maxValue) * 100
  }))
})
</script>

<template>
  <DataTable
    :value="tableData"
    class="stats-table"
    :show-headers="false"
  >
    <Column field="label" class="stat-label-column">
      <template #body="{ data }">
        <span class="stat-label">{{ data.label }}</span>
      </template>
    </Column>

    <Column field="value" class="stat-value-column">
      <template #body="{ data }">
        <span class="stat-value">{{ data.value }}</span>
      </template>
    </Column>

    <Column field="progressbar" class="stat-progress-column">
      <template #body="{ data }">
        <ProgressBar
          :value="data.percentage"
          :show-value="false"
          class="progress-bar"
          :style="{
            '--p-progressbar-value-background': data.color,
            '--p-progressbar-background': '#e5e7eb'
          }"
        />
      </template>
    </Column>
  </DataTable>
</template>

<style scoped>
:deep(.stats-table) {
  border: none;
  width: 100%;
  table-layout: fixed;
}

:deep(.stats-table .p-datatable-tbody > tr) {
  background: transparent !important;
  border: none;
}

:deep(.p-datatable-tbody > tr > td) {
  padding: 0.25rem;
}

/* 手機裝置 (小於 640px) */
:deep(.stat-label-column) {
  width: 3rem;
  min-width: 3rem;
}

:deep(.stat-value-column) {
  width: 3rem;
  min-width: 3rem;
}

:deep(.stat-progress-column) {
  width: calc(100% - 6rem);
  min-width: 120px;
}

/* 平板裝置 (640px 以上) */
@media (min-width: 640px) {
  :deep(.stat-label-column) {
    width: 4rem;
    min-width: 4rem;
  }

  :deep(.stat-value-column) {
    width: 4rem;
    min-width: 4rem;
  }

  :deep(.stat-progress-column) {
    width: calc(100% - 8rem);
    min-width: 150px;
  }
}

/* 桌面裝置 (1024px 以上) */
@media (min-width: 1024px) {
  :deep(.stat-label-column) {
    width: 5rem;
    min-width: 5rem;
  }

  :deep(.stat-value-column) {
    width: 5rem;
    min-width: 5rem;
  }

  :deep(.stat-progress-column) {
    width: calc(100% - 10rem);
    min-width: 200px;
  }
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 500;
  text-align: right;
  line-height: 1rem;
}

.stat-value {
  font-size: 0.75rem;
  font-weight: 600;
  text-align: right;
  line-height: 1rem;
  color: var(--text-color);
}

.progress-bar {
  height: 0.875rem;
  width: 100%;
  min-width: 80px;
}

/* 平板裝置字體調整 */
@media (min-width: 640px) {
  .stat-label,
  .stat-value {
    font-size: 0.875rem;
  }

  .progress-bar {
    height: 1rem;
  }
}

/* 桌面裝置字體調整 */
@media (min-width: 1024px) {
  .stat-label,
  .stat-value {
    font-size: 1rem;
  }

  .progress-bar {
    height: 1.125rem;
  }
}
</style>