# NOTES

## 用户偏好
- 分课时微课模式（沿用 Superpowers 学习节奏）：每课 = 知识讲解 + Quiz（提取练习）+ Action Step（真实仓库动手）
- 中文交流；课程案例围绕 JS/TS Web 全栈项目
- 使命锚点：**一个人也能 ship 产品**（先个人跑通，再推广到 2-10 人团队）
- 2026-09-20：用户明确要求协作编码线**重点学 Issue 和 PR**，已更新 MISSION.md

## 课程地图（双线，编号全局递增）

### CI/CD 线
- [x] 0001 你的第一条 GitHub Actions 流水线（push 触发 + 自动测试）
- [ ] 0002 触发器进阶与状态视角（on: 全家桶、workflow_dispatch、badge、通知）
- [ ] 0003 secrets 与自动部署（自动部署到线上）
- [ ] 0004 release 自动化（版本发布，知识线）

### 协作编码线（Issue / PR 重点）
- [ ] 0005 Issue 驱动开发：给自己的项目立项（label / milestone / 关连 PR）
- [ ] 0006 PR 完整闭环：branch → PR → review → merge（+ `closes #N` 联动 Issue）
- [ ] 0007 团队落地包：branch protection + required checks + Issue/PR 模板

> 顺序说明：先 CI 后协作 —— CI 变绿是 PR 合并的前提条件，学完 0001 后 0005/0006 的
> Lesson 里能直接用到真实 checks，两条线在 0007 汇合。可按用户意愿调换。

## reference 目录
- actions-quickref.html — Actions 工作流 YAML 骨架 + 触发事件 + 常用 action
- （待建）issue-pr-quickref.html — Issue/PR 术语与操作速查、`closes #` 关键字表

## 工作笔记
- Lesson 0001 的 Action Step 要求用户在真实仓库操作；下次会话先问结果，卡住就现场排障，
  通过后再写学习记录并解锁 0002。
- 部署目标未定（Vercel / 自有服务器），上 0003 前需确认。
