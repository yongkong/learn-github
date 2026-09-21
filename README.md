# Learn GitHub · 学 GitHub 特有的协作语言

> 一个人也能 ship 产品——从 Issue 到 Release 的完整工作流课程站。

🔗 在线站点：https://github-learn-omega.vercel.app

这不是一门 git 教程。git 命令哪里都能学，本站聚焦 **GitHub 特有的协作与工程能力**：Issue 体系、Pull Request 与 Code Review、Actions 与 CI/CD、团队治理与 Release。面向零基础到进阶的个人开发者与 2–10 人小团队。

## 课程地图（4 模块 · 24 课）

| 模块 | 内容 | 入口 |
| --- | --- | --- |
| 一 · Issue 体系 | Issue 本质、Labels、Milestones、搜索、模板、关联 | [`content/docs/issue/`](content/docs/issue) |
| 二 · PR 与 Review | git vs GitHub、PR 基础、Fork 模型、Review、合并策略、冲突、auto-merge | [`content/docs/pr/`](content/docs/pr) |
| 三 · Actions 与 CI/CD | 五层模型、第一条流水线、触发器、Secrets、自动部署、生态复用 | [`content/docs/actions/`](content/docs/actions) |
| 四 · 治理与 Release | 分支保护、CODEOWNERS、组织权限、语义化版本、CONTRIBUTING | [`content/docs/governance/`](content/docs/governance) |

每课固定结构：**概念（挂官方文档引用）→ 自测 Quiz → 动手清单 → 出处**。学习进度（完成状态、Quiz 最好成绩）保存在浏览器本地，无需登录。

## 技术栈

- [Next.js 16](https://nextjs.org)（App Router + Turbopack）
- [Fumadocs](https://fumadocs.dev) 16 —— 文档框架（内容全部是 `content/docs/` 下的 MDX）
- Tailwind CSS 4 + shadcn 风格组件
- 自定义 MDX 组件：`Quiz` / `LessonComplete` / `ProgressBar`（见 [`components/`](components)）
- 进度存储：[`lib/progress.ts`](lib/progress.ts)（纯逻辑，可注入 storage，带单测）
- 测试：Vitest + Testing Library

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm test       # 单元测试
pnpm build      # 生产构建
```

## 贡献方式

欢迎同事与外部贡献者！请：

1. 从带 `good first issue` 标签的 Issue 认领，或先开 Issue 讨论；
2. Fork 后开分支提 PR（目标分支 `main`）；
3. PR 需 CI 绿 + code owner 批准；
4. 新增课件请遵循现有课程骨架与 Quiz 组件用法。

## License

课程内容 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，代码 [MIT](https://opensource.org/licenses/MIT)。
