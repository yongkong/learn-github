# GitHub 协作 + CI/CD + DevOps 资源

## Knowledge（高信任资源）

### 官方文档（docs.github.com/zh）

- [快速入门：GitHub Actions](https://docs.github.com/zh/actions/get-started/quickstart)
  官方入门首选。含最小 demo workflow 全文、`.github/workflows` 目录约定、查看运行结果步骤。Use for: 第一个工作流、Actions 选项卡操作。
- [了解 GitHub Actions](https://docs.github.com/zh/actions/get-started/understand-github-actions)
  工作流/事件/作业/步骤/运行器五大核心概念模型。Use for: 概念澄清、术语。
- [持续集成](https://docs.github.com/zh/actions/get-started/continuous-integration)
  CI 实践官方定义 + 内置 CI/CD 模板仓库（actions/continuous-integration-templates）。Use for: 理解 CI 价值、Node.js 等语言的现成模板。
- [工作流语法参考](https://docs.github.com/zh/actions/reference/workflows-and-actions/workflow-syntax)
  权威 YAML 字段参考（on/jobs/steps/uses/run/if/needs...）。Use for: 写 workflow 时逐字段查。
- [Events that trigger workflows](https://docs.github.com/zh/actions/reference/workflows-and-actions/events-that-trigger-workflows)
  所有触发事件（push/pull_request/schedule/workflow_dispatch/release...）的完整参考。Use for: 选触发器。
- [加密存储 secrets](https://docs.github.com/zh/actions/how-tos/write-workflows/secure-workflows/use-redacted-and-encrypted-secret-symbols)
  secrets 的创建与引用方式 `${{ secrets.NAME }}`。Use for: 部署密钥、API token。
- [actions/starter-workflows](https://github.com/actions/starter-workflows)
  官方工作流模板库（ci / deployments / automation / code-scanning / pages 分类）。Use for: 抄经过验证的起点，别从零写。
- [仓库快速入门](https://docs.github.com/zh/repositories/creating-and-managing-repositories/quickstart-for-repositories) / [拉取请求概念](https://docs.github.com/zh/pull-requests)
  协作线官方文档。Use for: 仓库操作、branch/PR/fork 模型。

### 协作编码（Issue / PR 线）

- [GitHub Issues 文档首页](https://docs.github.com/zh/issues)
  Issue 规划与跟踪的概念入口。Use for: Issue 生命周期、label/里程碑全部子文档的索引。
- [使用标签和里程碑来跟踪工作](https://docs.github.com/zh/issues/using-labels-and-milestones-to-track-work)
  label 与 milestone 的官方概念+操作。Use for: 给个人项目做任务分类、版本节奏管理。
- [拉取请求文档](https://docs.github.com/zh/pull-requests) / [分支概念](https://docs.github.com/zh/pull-requests/reference/branches)
  PR 全生命周期官方参考。Use for: 分支模型、开 PR/review/merge 操作细节。
- [关于自动合并 pull request](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/incorporating-changes-in-a-pull-request/automatic-pull-request-merge)
  auto-merge + required checks 组合。Use for: PR 与 CI 联动的实战案例。

### 课程与认证

- [GitHub Skills（skills.github.com → learn.github.com）](https://skills.github.com/)
  官方交互式课程："Automate workflows with GitHub Actions" 等，在真实 fork 仓库上练习。Use for: 动手练习场。
- [GitHub Actions 认证（learn.github.com/certification/ACTIONS）](https://learn.github.com/certification/ACTIONS)
  官方认证考纲，本身就是一份高质量学习清单（工作流、secrets、environments、故障排查）。Use for: 校准课程覆盖是否全面。

## Wisdom (Communities)

- [GitHub Community Support](https://github.com/orgs/community/discussions)
  官方社区论坛，GitHub 员工常回复，Actions 疑难首选。Use for: workflow 报错、平台行为确认。
- [Actions 板块 · GitHub Community](https://github.com/community/community/discussions/categories/actions)
  专门讨论 Actions 的子板块。Use for: CI/CD 具体坑。
- [r/github](https://www.reddit.com/r/github/) / [r/devops](https://www.reddit.com/r/devops/)
  活跃度高的实践社区。Use for: 工作流风格、团队规范讨论。
- 中文：V2EX  Programmer 板块、掘金 GitHub 主题
  Use for: 中文语境下的经验与坑（信任度低于官方，需交叉验证）。

## Gaps（待补）

- Issue 模板（issue_template.md）与 branch protection 详细文档待协作线课程开始前补充调研
- 部署目标尚未确定（Vercel vs 自有服务器），相关官方文档等 Lesson 部署课时再针对性收集
