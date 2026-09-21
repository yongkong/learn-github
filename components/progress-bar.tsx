'use client';

import { cn } from '@/lib/cn';
import { useProgress } from '@/components/progress-context';
import { completionPercent } from '@/lib/progress';

export function ProgressBar({ total, className }: { total: number; className?: string }) {
  const { ready, state } = useProgress();
  const pct = ready ? completionPercent(state, total) : 0;
  const done = ready ? Object.values(state.lessons).filter(Boolean).length : 0;

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between text-sm mb-1">
        <span className="font-medium">学习进度</span>
        <span className="text-muted-foreground">
          {done}/{total} 课时 · {pct}%
        </span>
      </div>
      <div
        className="h-2 w-full rounded-full bg-black/10 dark:bg-white/15 overflow-hidden"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
