#!/usr/bin/env node

/**
 * 建置純 CSS 檔案腳本
 * 複製現有的函式庫 CSS 輸出並生成使用說明
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

async function buildCSSOnly() {
  console.log('🎨 開始建置純 CSS 檔案...')

  try {
    // 檢查是否存在函式庫建置的 CSS 檔案
    const libCssPath = path.resolve(projectRoot, 'dist/pokekit-ui.css')

    if (!fs.existsSync(libCssPath)) {
      console.log('📦 函式庫 CSS 檔案不存在，正在建置函式庫...')
      const { execSync } = await import('child_process')
      execSync('bun run build-lib', { stdio: 'inherit', cwd: projectRoot })
    }

    // 讀取函式庫 CSS 檔案
    const cssContent = fs.readFileSync(libCssPath, 'utf-8')

    // 生成純 CSS 版本
    const standaloneCssPath = path.resolve(projectRoot, 'dist/pokekit-ui-pure.css')
    fs.writeFileSync(standaloneCssPath, cssContent)

    console.log('✅ 純 CSS 檔案建置完成！')
    console.log(`📁 檔案位置: ${standaloneCssPath}`)
    console.log(`📊 檔案大小: ${(fs.statSync(standaloneCssPath).size / 1024).toFixed(2)} KB`)

    // 生成使用說明
    generateUsageGuide()

  } catch (error) {
    console.error('❌ 建置失敗:', error)
    process.exit(1)
  }
}

function generateUsageGuide() {
  const guidePath = path.resolve(projectRoot, 'dist/CSS-USAGE.md')
  const guide = `# PokekitUI 純 CSS 使用指南

## 檔案說明

- \`pokekit-ui-pure.css\` - 完整的純 CSS 檔案，包含所有寶可夢主題樣式
- 此檔案不依賴 Vue、PrimeVue 或需要安裝 Tailwind CSS

## 使用方式

### 1. 引入 CSS 檔案

\`\`\`html
<link rel="stylesheet" href="pokekit-ui-pure.css">
\`\`\`

### 2. 使用寶可夢主題色彩

#### 背景色彩
\`\`\`html
<div class="bg-pokemon-fire-500">火系背景</div>
<div class="bg-pokemon-water-700">水系深色背景</div>
\`\`\`

#### 文字色彩
\`\`\`html
<span class="text-pokemon-grass-500">草系文字</span>
<span class="text-pokemon-electric-100">電系淺色文字</span>
\`\`\`

#### 邊框色彩
\`\`\`html
<div class="border border-pokemon-psychic-500">超能力系邊框</div>
\`\`\`

### 3. 可用的寶可夢屬性

所有 18 種官方屬性都可使用：
- normal, fire, water, electric, grass, ice
- fighting, poison, ground, flying, psychic
- bug, rock, ghost, dragon, dark, steel, fairy

### 4. 色彩深淺

每種屬性都有 3 個色階：
- \`100\` - 淺色
- \`500\` - 標準色
- \`700\` - 深色

### 5. 互動狀態

支援 hover、focus、active 狀態：
\`\`\`html
<button class="bg-pokemon-fire-500 hover:bg-pokemon-fire-700 transition-all">
  火系按鈕
</button>
\`\`\`

### 6. 實用工具類別

包含常用的工具類別：
- **間距**: \`px-2\`, \`px-4\`, \`px-6\`, \`py-1\`, \`py-2\`, \`py-3\`, \`gap-4\`
- **佈局**: \`flex\`, \`grid\`, \`inline-block\`, \`grid-cols-3\`, \`flex-wrap\`
- **文字**: \`text-xl\`, \`text-xs\`, \`text-white\`
- **陰影**: \`shadow-md\`
- **邊框**: \`border-none\`, \`outline\`
- **轉場**: \`transition-all\`, \`duration-300\`

### 7. 組件範例

#### 寶可夢類型標籤
\`\`\`html
<span class="inline-block px-2 py-1 bg-pokemon-fire-500 text-white text-xs shadow-md">
  火
</span>
<span class="inline-block px-2 py-1 bg-pokemon-water-500 text-white text-xs shadow-md">
  水
</span>
\`\`\`

#### 寶可夢類型按鈕組
\`\`\`html
<div class="flex flex-wrap gap-4">
  <button class="px-6 py-3 bg-pokemon-fire-500 hover:bg-pokemon-fire-700 text-white text-xl border-none shadow-md transition-all duration-300">
    火系
  </button>
  <button class="px-6 py-3 bg-pokemon-water-500 hover:bg-pokemon-water-700 text-white text-xl border-none shadow-md transition-all duration-300">
    水系
  </button>
  <button class="px-6 py-3 bg-pokemon-grass-500 hover:bg-pokemon-grass-700 text-white text-xl border-none shadow-md transition-all duration-300">
    草系
  </button>
</div>
\`\`\`

#### 寶可夢類型網格
\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <div class="px-4 py-2 bg-pokemon-normal-100 border border-pokemon-normal-500 text-pokemon-normal-700">一般</div>
  <div class="px-4 py-2 bg-pokemon-fire-100 border border-pokemon-fire-500 text-pokemon-fire-700">火</div>
  <div class="px-4 py-2 bg-pokemon-water-100 border border-pokemon-water-500 text-pokemon-water-700">水</div>
</div>
\`\`\`

## 深色模式支援

CSS 檔案包含深色模式樣式，在 body 或根元素加上 \`dark\` 類別即可啟用：

\`\`\`html
<body class="dark">
  <!-- 深色模式內容 -->
</body>
\`\`\`

## 注意事項

- 此 CSS 檔案是完全獨立的，不需要額外的依賴
- 所有寶可夢色彩都基於官方色彩設計
- 支援現代瀏覽器的 CSS 變數和 RGB 函數
- 檔案已經過最佳化和壓縮
`

  fs.writeFileSync(guidePath, guide)
  console.log(`📖 使用指南已生成: ${guidePath}`)
}

buildCSSOnly()