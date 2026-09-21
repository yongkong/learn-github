# 0001 — 入学基线与课程开局

日期：2026-09-20

## 基线（用于计算最近发展区）
- Git：solo 流，add/commit/push 直推 main；分支/PR/冲突处理经验少
- CI/CD：零基础，未写过 workflow YAML
- 技术栈：JS/TS Web 全栈；GitHub 免费个人账户（yongkong）
- 有 Superpowers 微课学习经验（Lesson + Quiz + Action Step 模式），适应提取练习节奏

## 使命决策
- 锚点选定：「一个人也能 ship 产品」优先，团队规范推广为第二阶段
- 用户主动要求：协作编码线**重点学 Issue 和 PR**（砍掉 Projects/Discussions 等重项目管理）
- 课程顺序决策：先 CI 线（0001）后协作线 —— CI 绿是 PR required checks 的前提，两线在「团队落地包」一课汇合

## 已交付
- Lesson 0001：最小 Actions CI（概念五层模型 + 逐行读 YAML + 4 题自测 + 真实仓库动手清单）
- reference/actions-quickref.html：骨架/事件/字段/上下文/排障速查

## 待验证（下次会话检查 storage strength）
- Lesson 0001 Action Step 是否完成：真实仓库有没有变绿过一次、有没有亲手弄红过一次
- 抽查两个概念：workflow 文件放哪；checkout 为什么要手动写
- 若用户对 YAML 编辑不熟，0002 前插一节缩进/多行字符串的坑（`|` vs `>`）
