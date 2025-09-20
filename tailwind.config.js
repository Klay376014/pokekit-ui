import PrimeUI from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.vue",
  ],
  safelist: [
    // 寶可夢類型相關的動態類別
    {
      pattern: /^text-pokemon-(normal|fire|water|electric|grass|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy)-(100|500|700)$/,
    },
    {
      pattern: /^bg-pokemon-(normal|fire|water|electric|grass|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy)-(100|500|700)$/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /^border-pokemon-(normal|fire|water|electric|grass|ice|fighting|poison|ground|flying|psychic|bug|rock|ghost|dragon|dark|steel|fairy)-(100|500|700)$/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
  darkMode: 'class', // 啟用基於類別的深色模式
  theme: {
    extend: {
      colors: {
        pokemon: {
          normal: {
            100: '#E0E0C8',
            500: '#A8A878',
            700: '#787850',
          },
          fire: {
            100: '#FFD8B0',
            500: '#F08030',
            700: '#C06020',
          },
          water: {
            100: '#B0D0FF',
            500: '#6890F0',
            700: '#3860C0',
          },
          electric: {
            100: '#FFF5B0',
            500: '#F8D030',
            700: '#C8A000',
          },
          grass: {
            100: '#D0F0B0',
            500: '#78C850',
            700: '#509030',
          },
          ice: {
            100: '#D0F8F8',
            500: '#98D8D8',
            700: '#68A8A8',
          },
          fighting: {
            100: '#F8B0B0',
            500: '#C03028',
            700: '#901010',
          },
          poison: {
            100: '#E8B0F8',
            500: '#A040A0',
            700: '#702070',
          },
          ground: {
            100: '#F8E0B0',
            500: '#E0C068',
            700: '#B09030',
          },
          flying: {
            100: '#D8D8F8',
            500: '#A890F0',
            700: '#7860D0',
          },
          psychic: {
            100: '#FFC0D0',
            500: '#F85888',
            700: '#C03060',
          },
          bug: {
            100: '#D8E880',
            500: '#A8B820',
            700: '#789010',
          },
          rock: {
            100: '#E0D0A0',
            500: '#B8A038',
            700: '#887010',
          },
          ghost: {
            100: '#D0B0F0',
            500: '#705898',
            700: '#503070',
          },
          dragon: {
            100: '#C0A8F8',
            500: '#7038F8',
            700: '#4820B0',
          },
          dark: {
            100: '#C8B8B0',
            500: '#705848',
            700: '#403020',
          },
          steel: {
            100: '#D8D8E8',
            500: '#B8B8D0',
            700: '#8888A0',
          },
          fairy: {
            100: '#F8D0E8',
            500: '#EE99AC',
            700: '#D07090',
          },
        },
      }
    },
  },
  plugins: [PrimeUI],
  corePlugins: {
    // 確保所有核心功能都啟用
  }
}