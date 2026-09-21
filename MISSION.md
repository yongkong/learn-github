# Mission: GitHub 协作编码 + CI/CD + DevOps

> **2026-09-20 转型**：学习交付形式从 HTML 微课升级为一个真正的产品——
> 用 React（Next.js）+ shadcn + Fumadocs 搭建公开学习网站 `yongkong/learn-github`（部署 Vercel）。
> 网站是课件的唯一载体，旧 `lessons/*.html` 退役。详见 [设计文档](./learning/specs/2026-09-20-learn-github-site-design.md)。
> 建站的 PR / CI / 部署过程本身即课程内容（dogfood）。

## Why
用户要在个人 Web 全栈（JS/TS）项目上，独立跑通「源码 → 自动测试 → 自动部署」的完整流水线，把自己的小产品真正 ship 上线；之后再这套 GitHub 协作 + CI/CD 实践推广到 2-10 人的团队。

## Success looks like
- 给自己的仓库加上 GitHub Actions CI：每次 push / PR 自动跑 lint + test，坏了立刻知道
- 一个人也能跑通完整流水线：push 代码 → 自动测试 → 自动部署（Vercel 或服务器），产品真正上线
- 熟练使用 branch + Pull Request 工作流：issue → 分支 → PR → review → merge 的完整闭环，即使是 solo 项目也用 PR 给自己留审计痕迹
- 会用 Issue 管理自己的产品：task / bug / enhancement 分类、label、milestone，让个人项目像团队一样有节奏地推进
- 能为团队制定协作规范：branch protection、required checks、PR review 流程、Issue 模板
- 会正确使用 secrets / environments，部署密钥不泄漏

## Constraints
- 协作编码线聚焦 Issue 与 PR 两大主题（用户明确要求），其他协作功能按需引入
- Git 现状：solo 流为主（add/commit/push 直推 main），分支和 PR 经验少
- CI/CD 现状：零基础，没写过 workflow yml
- 偏好分课时微课模式（Lesson 0001, 0002...），每课含知识讲解 + Quiz + Action Step
- 主要参考中文官方文档 docs.github.com/zh；项目以 JS/TS Web 全栈为案例
- GitHub 账号 yongkong，个人免费账户（Actions 公共仓库免费，私有仓库每月 2000 分钟）

## Out of scope
- GitHub Projects 面板、Discussions、Wiki 等重项目管理功能（除非团队落地时确有需要）
- 自建 CI 系统（Jenkins/GitLab CI）、Kubernetes、Terraform 等重型 DevOps 工具
- GitHub Enterprise / SAML 等企业级管理功能
- 高级自定义 Action（JS/复合 action 开发），先把"用 action"学熟
