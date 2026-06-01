# 个人日程管理应用

一个极简风的个人日程管理网页应用，支持手机优先设计、深色/浅色主题切换、任务打卡追踪和数据可视化。

## 功能特性

- **今日任务展示**：极简卡片式，手机一屏能看完
- **任务打卡**：点击卡片完成，带微动画
- **定时提醒**：APP弹窗式页面内提醒（提前5分钟，10分钟后轻推）
- **周模板**：预设固定任务，每周自动按模板显示
- **修改机制**：临时修改（单日）+ 模板修改（全局）
- **数据可视化**：纯数据图表，无红绿对错标记
- **座右铭轮播**：页面顶部自动轮播，紧凑不占空间
- **主题切换**：支持深色/浅色模式

## 技术栈

- 前端框架：React + Vite
- UI框架：Tailwind CSS v4
- 路由：React Router v7
- 后端：Supabase（认证 + 云端数据库）
- 部署：Vercel

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env.local`，并填入你的 Supabase 配置：

```bash
cp .env.example .env.local
```

编辑 `.env.local`：

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

### 4. 部署到 Vercel

```bash
npm run build
```

然后将项目推送到 GitHub，在 Vercel 中导入即可。

## 项目结构

```
daily-planner/
├── src/
│   ├── components/   # UI组件
│   ├── pages/        # 页面
│   ├── hooks/        # 自定义Hooks
│   └── lib/          # 工具函数和常量
├── supabase/
│   └── migrations/   # 数据库迁移
└── 配置文件
```

## 数据库设置

在 Supabase 控制台中执行 `supabase/migrations/001_initial.sql` 来创建所需的表。

## 许可证

MIT
