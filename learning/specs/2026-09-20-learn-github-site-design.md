# 设计文档 · Learn GitHub 学习网站

日期：2026-09-20 · 状态：已批准 · 仓库：`yongkong/learn-github`（部署 Vercel）

## 背景与转型

本 workspace 原为「teach 学习工作区」（HTML 微课）。用户决定将其升级为一个**真正的产品**：
用 **React（Next.js）+ shadcn + Fumadocs** 搭建一个公开的 GitHub 学习网站，供同事及更多人学习
**GitHub 特有操作（而非 git 命令）**。网站成为课程内容的唯一载体，旧 HTML 课件退役。

此举同时兑现用户 Superpowers 使命之「真正用它做一个小产品」，且建站的 PR / CI / 部署过程本身即课程内容（dogfood）。

## 使命（Success looks like）

- 26 篇 MDX 课件全部写完，四大模块侧边栏分组正确、可全文搜索
- 每篇含 ≥1 个可交互 Quiz，答题即时反馈；学习进度落 localStorage
- 代码推送到 `yongkong/learn-github`，Vercel 部署成功、公网可访问
- 仓库自带 deploy workflow 跑通（绿）—— 即模块 3 的活教材

## 技术栈

- Next.js（App Router）+ TypeScript
- Fumadocs（docs 骨架：文件路由 / MDX / 侧边栏 / Orama 本地搜索 / Shiki 代码高亮）
- shadcn/ui + Tailwind（视觉与基础组件）
- 脚手架：`npx create-fumadocs-app@latest <dir> --template +next+fuma-docs-mdx --pm pnpm --install --yes`
- 部署：Vercel（生产）+ GitHub Actions（CI 构建校验 / 触发部署）

## 目录结构

```
/                      # Next 站点在仓库根目录（此 repo 即「网站」）
  content/docs/        # 所有课件 MDX，按模块分目录 + meta.json 排序
    index.mdx  glossary.mdx
    issue/  pr/  actions/  governance/
  src/                 # Fumadocs 路由、自定义组件、进度 hook、source 常量
  .github/workflows/   # deploy.yml（push→预览, merge main→生产）
  learning/            # 师生工作流元文件（MISSION/RESOURCES/NOTES/learning-records/specs）
```

## 课程体系（24 课时 + 首页 + 术语表 = 26 MDX）

模块 1 · Issue 体系：Issue 是什么 / Label / Milestone / 搜索过滤 / Issue 模板 / Issue↔PR 联动
模块 2 · PR 与 Review：Git vs GitHub / PR 基础 / Fork 贡献模型 / Code Review / 合并三式 / 解决冲突 / Auto-merge+required checks
模块 3 · Actions 与 CI/CD：五层模型 / 第一条流水线 / 触发器全家桶 / Secrets+environments / 自动部署 / 复用生态
模块 4 · 治理与 Release：Branch protection / CODEOWNERS / 组织与权限 / Release+SemVer / CONTRIBUTING

## 教学组件（shadcn 之上的自定义件，MDX 内直接用）

`<Quiz>`（多选即时反馈，选项等长避免泄题，答对写进度）· `<Callout>`（mission/note/warn/go）·
`<StepsList>`（动手清单）· `<ConceptGrid>`（概念卡片）· `<SourceLink>/<PrimarySource>`（挂 docs.github.com/zh 引用）·
`<GitHubShot>`（界面示意占位，MVP 用官方文档截图链接+说明，不伪造截图）。

**每篇固定骨架**：引言(对齐 mission) → 概念讲解(挂引用) → Quiz 自测 → Action Step 动手 → Primary Source → 上下篇导航。

## 进度 / 搜索 / 部署

- 进度：`useProgress` hook 读写 localStorage（已学课时、Quiz 分数）；首页与侧边栏显示完成度。无登录、不跨设备同步（MVP 明确不做）。
- 搜索：Fumadocs 内置 Orama/FlexSearch，中文标题正文可搜。
- 部署链：git init → 关联 `yongkong/learn-github` → push main → Vercel 导入 → 公网 URL → 加 deploy workflow。

## 测试与完成定义

- Vitest + Testing Library：`<Quiz>` 反馈逻辑、`useProgress` 读写各一组；`next build` 冒烟。
- DoD 见「使命」五条，全部满足即 v1 完成。

## 范围外（v1 不做）

登录/账号、服务端进度与数据库、内置「假 GitHub」交互沙箱、Copilot/Codespaces/Discussions/Projects 等主题、旧 HTML 课件并行维护。
