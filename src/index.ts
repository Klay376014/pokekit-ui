// 組件導出
export { default as PokemonButtons } from './components/PokemonButtons.vue'
export { default as DarkModeToggle } from './components/DarkModeToggle.vue'

// 樣式導出
import './style.css'

// 類型導出
export type {
  PokemonType,
  PokemonButtonProps,
  DarkModeToggleProps
} from './types'

// 版本資訊
export const version = '0.1.0'

// 組件安裝函數（可選，用於整批安裝）
import type { App } from 'vue'
import PokemonButtons from './components/PokemonButtons.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'

export function install(app: App) {
  app.component('PokemonButtons', PokemonButtons)
  app.component('DarkModeToggle', DarkModeToggle)
}

// 預設導出
export default {
  install,
  version,
  PokemonButtons,
  DarkModeToggle
}