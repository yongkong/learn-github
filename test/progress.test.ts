import { describe, expect, it } from 'vitest';
import {
  STORAGE_KEY,
  completedCount,
  completionPercent,
  emptyProgress,
  loadProgress,
  saveProgress,
} from '@/lib/progress';

class MemoryStorage {
  private map = new Map<string, string>();
  getItem(k: string) {
    return this.map.has(k) ? (this.map.get(k) as string) : null;
  }
  setItem(k: string, v: string) {
    this.map.set(k, v);
  }
}

describe('progress 纯逻辑', () => {
  it('空存储回退空态', () => {
    expect(loadProgress(new MemoryStorage())).toEqual(emptyProgress());
  });

  it('损坏 JSON 回退空态而不抛错', () => {
    const s = new MemoryStorage();
    s.setItem(STORAGE_KEY, '{not json');
    expect(loadProgress(s)).toEqual(emptyProgress());
  });

  it('存取往返一致', () => {
    const s = new MemoryStorage();
    const state = { lessons: { a: true, b: false }, quizzes: { a: 1 } };
    saveProgress(s, state);
    expect(loadProgress(s)).toEqual(state);
  });

  it('完成度按 total 计算百分比', () => {
    const state = { lessons: { a: true, b: true, c: false }, quizzes: {} };
    expect(completedCount(state)).toBe(2);
    expect(completionPercent(state, 4)).toBe(50);
    expect(completionPercent(state, 0)).toBe(0);
  });
});
