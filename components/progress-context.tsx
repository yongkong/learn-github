'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  type ProgressState,
  emptyProgress,
  loadProgress,
  saveProgress,
} from '@/lib/progress';

type ProgressApi = {
  state: ProgressState;
  ready: boolean;
  isLessonComplete: (id: string) => boolean;
  setLessonComplete: (id: string, done: boolean) => void;
  recordQuiz: (id: string, score: number) => void;
  quizScore: (id: string) => number | undefined;
};

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(emptyProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(loadProgress(window.localStorage));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveProgress(window.localStorage, state);
  }, [state, ready]);

  const setLessonComplete = useCallback((id: string, done: boolean) => {
    setState((prev) => ({
      ...prev,
      lessons: { ...prev.lessons, [id]: done },
    }));
  }, []);

  const recordQuiz = useCallback((id: string, score: number) => {
    setState((prev) => {
      const best = Math.max(prev.quizzes[id] ?? 0, score);
      return { ...prev, quizzes: { ...prev.quizzes, [id]: best } };
    });
  }, []);

  const value = useMemo<ProgressApi>(
    () => ({
      state,
      ready,
      isLessonComplete: (id) => !!state.lessons[id],
      setLessonComplete,
      recordQuiz,
      quizScore: (id) => state.quizzes[id],
    }),
    [state, ready, setLessonComplete, recordQuiz],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressApi {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress 必须在 <ProgressProvider> 内使用');
  return ctx;
}
