# 0003 · 网站上线：从课件到产品闭环

**日期**：2026-09-20/21
**结论**：Learn GitHub 课程站完成并公开上线 → https://github-learn-omega.vercel.app

## 交付清单（对照 spec 的 DoD）

- ✅ 4 模块 24 课 MDX + 首页 + 术语表 + docs 索引，`next build` 生成 84 页全绿
- ✅ 自定义组件 Quiz / LessonComplete / ProgressBar + localStorage 进度系统，单测 7/7
- ✅ 仓库推送至 yongkong/learn-github，含 README（贡献指南式门面）
- ✅ `.github/workflows/ci.yml`：push/PR → pnpm install + test + build，远端 CI 连续 3 次 ✓
- ✅ Vercel 已连接 GitHub 仓库：**push main → 自动构建上线**，本次闭环亲测生效
- ✅ metadataBase/README 回填真实域名（含 og:image 线上验证）

## 踩坑记录（值得写进下一轮迭代）

1. **pnpm 11 的构建白名单换名了**：`onlyBuiltDependencies` 不再被 install 强制校验接受，
   需要 `pnpm-workspace.yaml` 顶层 `allowBuilds: { esbuild: true }`。
   症状：本地碰巧能跑、CI 和 `--frozen-lockfile` 干净安装必炸（ERR_PNPM_IGNORED_BUILDS）。
2. **MDX frontmatter 的 description 含 `on:` 会破 YAML**——必须加引号（triggers.mdx 教训）。
3. **Shiki 不认 ```suggestion 语言**：课件里展示 GitHub suggestion 语法要用 4 反引号围栏包 3 反引号。
4. **Vercel CLI 已登录 + git 集成自动接管部署**，原计划的 Actions deploy workflow 被更简单的方案取代
   （课件 deploy.mdx 讲的 A/B 两种做法，本站就是 A 的活案例）。

## 教学自我验证

这个仓库本身就是一条行走的课程线：Issue 模板 → PR 协作 → CI（ci.yml）→ 分支保护/CODEOWNERS（待开）→ Release（待打 v0.1.0）。下一步实操清单已内嵌在各课「动手清单」里。
