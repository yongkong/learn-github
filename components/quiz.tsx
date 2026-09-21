'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { useProgress } from '@/components/progress-context';

export type QuizOption = {
  label: string;
  correct?: boolean;
};

export type QuizProps = {
  /** 全局唯一 id，用于记录成绩，建议 "<lesson>-q1" 形式 */
  id: string;
  question: string;
  options: QuizOption[];
  /** 答题后展示的解析 */
  explain?: string;
};

export function Quiz({ id, question, options, explain }: QuizProps) {
  const [picked, setPicked] = useState<number | null>(null);
  const { recordQuiz } = useProgress();

  const correctIndex = options.findIndex((o) => o.correct);
  const answered = picked !== null;
  const isCorrect = answered && picked === correctIndex;

  function choose(i: number) {
    if (answered) return;
    setPicked(i);
    recordQuiz(id, i === correctIndex ? 1 : 0);
  }

  function retry() {
    setPicked(null);
  }

  return (
    <div className="my-6 rounded-xl border border-black/10 dark:border-white/15 bg-white/40 dark:bg-white/5 p-5">
      <p className="m-0 font-semibold">{question}</p>
      <div className="mt-3 flex flex-col gap-2">
        {options.map((opt, i) => {
          const showCorrect = answered && i === correctIndex;
          const showWrong = answered && i === picked && i !== correctIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => choose(i)}
              disabled={answered}
              className={cn(
                'text-left rounded-lg border px-3 py-2 text-sm transition-colors',
                'border-black/15 dark:border-white/15 hover:border-primary/60',
                !answered && 'cursor-pointer',
                showCorrect && 'border-emerald-500 bg-emerald-500/15 font-semibold',
                showWrong && 'border-red-500 bg-red-500/15',
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-3 text-sm">
          <p className={cn('m-0 font-semibold', isCorrect ? 'text-emerald-600' : 'text-red-600')}>
            {isCorrect ? '✅ 正确。' : '❌ 不对，绿色为正确答案。'}
          </p>
          {explain && <p className="m-0 mt-1 text-muted-foreground">{explain}</p>}
          {!isCorrect && (
            <button
              type="button"
              onClick={retry}
              className="mt-2 text-xs underline cursor-pointer"
            >
              再试一次
            </button>
          )}
        </div>
      )}
    </div>
  );
}
