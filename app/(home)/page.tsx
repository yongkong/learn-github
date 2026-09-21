import Link from 'next/link';
import { ArrowRight, BookOpen, GitPullRequest, Workflow, Users } from 'lucide-react';
import { gitConfig } from '@/lib/shared';

const modules = [
  {
    icon: BookOpen,
    title: 'Issue 体系',
    desc: '用 Issue 规划产品：分类、里程碑、搜索过滤、模板，与 PR 联动。',
    href: '/docs/issue/what-is-issue',
  },
  {
    icon: GitPullRequest,
    title: 'Pull Request 与 Review',
    desc: 'fork → 分支 → PR → review → 合并的完整闭环，含冲突与 auto-merge。',
    href: '/docs/pr/git-vs-github',
  },
  {
    icon: Workflow,
    title: 'Actions 与 CI/CD',
    desc: '五层概念到自动部署：让每次提交自动跑测试、绿灯才上线。',
    href: '/docs/actions/concepts',
  },
  {
    icon: Users,
    title: '团队治理与 Release',
    desc: '保护分支、CODEOWNERS、组织权限、版本发布——把实践推广给团队。',
    href: '/docs/governance/branch-protection',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center px-6 py-20">
      <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
        GitHub 协作 · CI/CD · DevOps
      </span>
      <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
        学得会、用得上的 GitHub 实战课
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        不讲 git 命令，只讲 <b>GitHub 特有的能力</b>：Issue、Pull Request、Actions、团队治理。
        面向个人开发与 2–10 人小团队，每课配即时自测与真实动手清单。
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90"
        >
          开始学习 <ArrowRight size={18} />
        </Link>
        <a
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
          className="inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium hover:border-primary/60"
        >
          查看源码
        </a>
      </div>

      <div className="mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-2">
        {modules.map((m) => (
          <Link
            key={m.title}
            href={m.href}
            className="group rounded-2xl border border-black/10 dark:border-white/15 p-6 text-left transition-colors hover:border-primary/60"
          >
            <m.icon className="mb-3 text-primary" size={26} />
            <h3 className="m-0 text-lg font-semibold">{m.title}</h3>
            <p className="mt-1 mb-0 text-sm text-muted-foreground">{m.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
