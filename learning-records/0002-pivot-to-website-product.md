# 0002 — 使命转型：从 HTML 微课到学习网站产品

日期：2026-09-20

## 触发
用户在 Lesson 0001 交付后，要求「把所有课件一次写完」，并升级为一个 React + shadcn 网站，
供同事/更多人学习 GitHub 特有操作（非 git 命令）。

## 决策（经 brainstorming 逐问确认）
- 网站**取代**旧 HTML 课件，成为内容唯一载体
- 内容范围：四大模块全要（Issue / PR&Review / Actions&CI-CD / 治理&Release），共 26 篇 MDX
- 交互深度：MVP = 图文 + 页末 Quiz（提取练习），不做内置模拟沙箱
- 无登录，进度走 localStorage
- 技术栈：Next.js + Fumadocs + shadcn + MDX（用户先选 A 后改判 B）
- 仓库：`yongkong/learn-github`（已确认空 repo，gh 已登录 yongkong）；上线 Vercel

## 意义
这一步把「学习」与「做产品」合流：建站过程即 CI/CD + PR 协作的最佳实战，
直接服务用户的 Superpowers 使命 A（真做个小产品）与 D（向团队布道）。

## 影响后续
- 旧 `lessons/*.html`、`reference/*.html`、`assets/*` 随知识迁移进 MDX 后退役
- `MISSION.md` 已加转型说明；根目录保留 teach 工作流元文件
- 若网站内容成为长期资产，未来可能把 teach 记录归档到 `learning/`
