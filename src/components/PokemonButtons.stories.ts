import type { Meta, StoryObj } from '@storybook/vue3'
import PokemonButtons from './PokemonButtons.vue'

const meta: Meta<typeof PokemonButtons> = {
  title: 'Components/PokemonButtons',
  component: PokemonButtons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button of 18 Pokemon Types'
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'normal', 'fire', 'water', 'electric', 'grass', 'ice',
        'fighting', 'poison', 'ground', 'flying', 'psychic',
        'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
      ],
      description: 'types'
    },
    label: {
      control: 'text',
      description: 'text'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof PokemonButtons>

// 所有屬性類型的展示（固定不可調整）
export const Default: Story = {
  render: () => ({
    components: { PokemonButtons },
    template: `
      <div class="grid grid-cols-3 gap-4">
        <PokemonButtons type="normal" label="一般" />
        <PokemonButtons type="fire" label="火" />
        <PokemonButtons type="water" label="水" />
        <PokemonButtons type="electric" label="電" />
        <PokemonButtons type="grass" label="草" />
        <PokemonButtons type="ice" label="冰" />
        <PokemonButtons type="fighting" label="格鬥" />
        <PokemonButtons type="poison" label="毒" />
        <PokemonButtons type="ground" label="地面" />
        <PokemonButtons type="flying" label="飛行" />
        <PokemonButtons type="psychic" label="超能力" />
        <PokemonButtons type="bug" label="蟲" />
        <PokemonButtons type="rock" label="岩石" />
        <PokemonButtons type="ghost" label="幽靈" />
        <PokemonButtons type="dragon" label="龍" />
        <PokemonButtons type="dark" label="惡" />
        <PokemonButtons type="steel" label="鋼" />
        <PokemonButtons type="fairy" label="妖精" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: '展示所有 18 種寶可夢屬性類型的按鈕樣式。此展示為固定內容，不可調整。'
      }
    },
    // 禁用此 Story 的控制面板
    controls: { disable: true }
  }
}

// 互動式調整（可使用 args 控制）
export const Playground: Story = {
  args: {
    type: 'fire',
    label: '自訂按鈕'
  },
  parameters: {
    docs: {
      description: {
        story: '互動式範例，您可以透過右側控制面板調整屬性和文字。'
      }
    }
  }
}

// 水屬性
export const Water: Story = {
  args: {
    type: 'water',
    label: '水屬性技能'
  }
}

// 電屬性
export const Electric: Story = {
  args: {
    type: 'electric',
    label: '十萬伏特'
  }
}

// 草屬性
export const Grass: Story = {
  args: {
    type: 'grass',
    label: '飛葉快刀'
  }
}

// 幽靈屬性
export const Ghost: Story = {
  args: {
    type: 'ghost',
    label: '暗影球'
  }
}

// 龍屬性
export const Dragon: Story = {
  args: {
    type: 'dragon',
    label: '龍之波動'
  }
}