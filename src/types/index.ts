// 匯出寶可夢相關類型
export * from './pokemon'

// 重新匯入類型以在此檔案中使用
import type { PokemonType } from './pokemon'

// 組件 Props 類型定義
export interface PokemonButtonProps {
  type?: PokemonType
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'solid' | 'outline' | 'ghost'
}