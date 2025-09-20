// 寶可夢屬性類型
export type PokemonType =
  | 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic'
  | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy'

// PokemonButtons 組件 Props
export interface PokemonButtonProps {
  type: PokemonType
  label: string
}

// DarkModeToggle 組件 Props
export interface DarkModeToggleProps {
  // 目前這個組件沒有 props，但保留介面以備未來擴展
}

// 組件安裝選項
export interface InstallOptions {
  prefix?: string
}

// 套件版本資訊
export interface PackageInfo {
  version: string
  name: string
}