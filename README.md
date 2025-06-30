# 📝 待辦事項應用程式集合

這是一個包含多種前端框架實作的待辦事項應用程式專案集合，展示了如何使用不同的技術棧來建立相同功能的應用程式。

## 🎯 專案概述

本專案包含四個不同版本的待辦事項應用程式：

- **純 HTML/JavaScript 版本** - 最基礎的實作，使用原生 Web 技術
- **React 版本** - 使用 React 18 建立的現代化應用程式
- **Vue 版本** - 使用 Vue 3 Composition API 的響應式應用程式
- **Svelte + Tailwind 版本** - 使用 SvelteKit 和 Tailwind CSS 的現代化解決方案

## 📁 專案結構

```
to-do-list-collection/
├── simple-to-do-list/           # 純 HTML/JS/CSS 版本
├── simple-react-to-do-list/     # React 版本
├── simple-vue-to-do-list/       # Vue 版本
└── talwind-svelte-to-do-list/   # Svelte + Tailwind 版本
```

## 🚀 各版本說明

### 1. 純 HTML/JavaScript 版本 (`simple-to-do-list`)

**技術棧：** HTML5 + CSS3 + JavaScript (ES6+)

**執行方式：**
```bash
cd simple-to-do-list
# 直接在瀏覽器中開啟 index.html
open index.html
```

### 2. React 版本 (`simple-react-to-do-list`)

**技術棧：** React 18 + Create React App

**執行方式：**
```bash
cd simple-react-to-do-list
npm install
npm start
# 在瀏覽器中開啟 http://localhost:3000
```

**可用腳本：**
- `npm start` - 啟動開發伺服器
- `npm test` - 執行測試
- `npm run build` - 建立生產版本

### 3. Vue 版本 (`simple-vue-to-do-list`)

**技術棧：** Vue 3 + Vue CLI

**執行方式：**
```bash
cd simple-vue-to-do-list
npm install
npm run serve
# 在瀏覽器中開啟 http://localhost:8080
```

**可用腳本：**
- `npm run serve` - 啟動開發伺服器
- `npm run build` - 建立生產版本
- `npm run lint` - 執行程式碼檢查

### 4. Svelte + Tailwind 版本 (`talwind-svelte-to-do-list`)

**技術棧：** Svelte 5 + SvelteKit + Tailwind CSS 4 + TypeScript

**執行方式：**
```bash
cd talwind-svelte-to-do-list
pnpm install
pnpm run dev
# 在瀏覽器中開啟顯示的網址
```

**可用腳本：**
- `pnpm run dev` - 啟動開發伺服器
- `pnpm run build` - 建立生產版本
- `pnpm run test` - 執行測試
- `pnpm run format` - 格式化程式碼

## 🔧 開發環境需求

### 基本需求
- Node.js (建議 v18 或以上版本)
- npm 或 pnpm 套件管理器

### 各版本特定需求
- **純 HTML 版本：** 僅需現代瀏覽器
- **React 版本：** Node.js + npm
- **Vue 版本：** Node.js + npm + Vue CLI
- **Svelte 版本：** Node.js + pnpm (建議)

## 📚 學習目標

此專案集合適合：

1. **前端新手** - 從純 HTML/JS 版本開始理解基礎概念
2. **框架學習者** - 比較不同框架的實作方式
3. **技術選型參考** - 了解各框架的優缺點
4. **最佳實務示範** - 學習現代前端開發模式

## 🔗 相關資源

- [React 官方文件](https://react.dev/)
- [Vue.js 官方文件](https://vuejs.org/)
- [Svelte 官方文件](https://svelte.dev/)
- [Tailwind CSS 官方文件](https://tailwindcss.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
