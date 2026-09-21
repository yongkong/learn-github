'use client';

import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useProgress } from '@/components/progress-context';

export function LessonComplete({ id }: { id: string }) {
  const { ready, isLessonComplete, setLessonComplete } = useProgress();
  const done = ready && isLessonComplete(id);

  return (
    <button
      type="button"
      disabled={!ready}
      onClick={() => setLessonComplete(id, !done)}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer',
        done
          ? 'border-emerald-500 bg-emerald-500/15 text-emerald-600'
          : 'border-black/15 dark:border-white/20 hover:border-primary/60',
      )}
    >
      {done ? <CheckCircle2 size={16} /> : <Circle size={16} />}
      {done ? '已完成本课' : '标记本课完成'}
    </button>
  );
}
