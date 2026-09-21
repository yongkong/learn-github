import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Quiz } from '@/components/quiz';
import { LessonComplete } from '@/components/lesson-complete';
import { ProgressBar } from '@/components/progress-bar';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Quiz,
    LessonComplete,
    ProgressBar,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
