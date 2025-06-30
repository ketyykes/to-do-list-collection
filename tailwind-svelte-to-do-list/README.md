# Svelte TodoList 專案

這是一個使用 Svelte 5 和 TailwindCSS 建構的待辦事項列表應用程式，包含完整的測試覆蓋。

## ✨ 功能特色

- 新增/刪除/編輯待辦事項
- 標記完成狀態
- 響應式設計

## 🛠️ 技術棧
- [Svelte 5](https://svelte.dev/) - 前端框架
- [TailwindCSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 靜態類型檢查
- [Vite](https://vitejs.dev/) - 建置工具

## 🚀 快速開始

### 前置需求
- Node.js v20
- pnpm v10

### 安裝依賴
```bash
pnpm install
```

### 開發模式
```bash
pnpm run dev
```

### 生產建置
```bash
pnpm run build
```

### 執行測試
```bash
pnpm run test
```

## 📂 專案結構
```
svelte-todolist/
├── src/
│   ├── routes/       # 頁面路由
│   ├── lib/          # 共用模組
│   ├── app.css       # 全域樣式
│   └── app.html      # HTML 模板
├── static/           # 靜態資源
└── vite.config.ts    # Vite 設定
```

## 📜 程式碼規範
- 使用 ESLint + Prettier 維護程式碼品質
- 提交前請執行格式化：
```bash
pnpm run format
```