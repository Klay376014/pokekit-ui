// 樣式導出
import './style.css'

// 組件導入
import type { App } from 'vue'
import PokemonButtons from './components/PokemonButtons.vue'
import TypeBadge from './components/TypeBadge.vue'
import StatsProgressBar from './components/StatsProgressBar.vue'

// 組件導出
export { PokemonButtons, TypeBadge, StatsProgressBar }

// 類型導出
export type {
  PokemonType,
  PokemonStat,
  PokemonButtonProps
} from './types'

// 版本資訊
export const version = '0.1.9'

// 組件安裝函數（可選，用於整批安裝）
export function install(app: App) {
  app.component('PokemonButtons', PokemonButtons)
  app.component('TypeBadge', TypeBadge)
  app.component('StatsProgressBar', StatsProgressBar)
}

// 預設導出
export default {
  install,
  version,
  PokemonButtons,
  TypeBadge,
  StatsProgressBar
}