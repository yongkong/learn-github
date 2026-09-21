// 学习进度：纯逻辑，可在测试中注入任意 storage 实现（无需 jsdom）
export type ProgressState = {
  /** lessonId -> 是否完成 */
  lessons: Record<string, boolean>;
  /** quizId -> 最好成绩 0..1 */
  quizzes: Record<string, number>;
};

export const STORAGE_KEY = 'learn-github-progress';

export const emptyProgress = (): ProgressState => ({ lessons: {}, quizzes: {} });

type Readable = { getItem(k: string): string | null };
type Writable = { setItem(k: string, v: string): void };

/** 安全解析，损坏/缺失时回退空态 */
export function loadProgress(storage: Readable): ProgressState {
  const raw = storage.getItem(STORAGE_KEY);
  if (!raw) return emptyProgress();
  try {
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      lessons: parsed.lessons ?? {},
      quizzes: parsed.quizzes ?? {},
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(storage: Writable, state: ProgressState): void {
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function completedCount(state: ProgressState): number {
  return Object.values(state.lessons).filter(Boolean).length;
}

/** 完成度百分比（total 为全站课时总数） */
export function completionPercent(state: ProgressState, total: number): number {
  if (total <= 0) return 0;
  return Math.round((completedCount(state) / total) * 100);
}
