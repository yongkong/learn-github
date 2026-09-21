import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Quiz } from '@/components/quiz';
import { ProgressProvider } from '@/components/progress-context';

function renderQuiz(over: Partial<React.ComponentProps<typeof Quiz>> = {}) {
  const props: React.ComponentProps<typeof Quiz> = {
    id: 't-q1',
    question: '工作流文件放在哪个目录？',
    options: [
      { label: '.github/workflows/', correct: true },
      { label: '.gitlab/configs/' },
      { label: '.action/workflows/' },
    ],
    explain: '固定约定目录。',
    ...over,
  };
  render(
    <ProgressProvider>
      <Quiz {...props} />
    </ProgressProvider>,
  );
}

describe('<Quiz> 交互', () => {
  it('答对显示 ✅ 并展示解析', async () => {
    renderQuiz();
    await userEvent.click(screen.getByRole('button', { name: '.github/workflows/' }));
    expect(screen.getByText(/^✅/)).toBeInTheDocument();
    expect(screen.getByText('固定约定目录。')).toBeInTheDocument();
  });

  it('答错显示 ❌、标出正确项并提供重试', async () => {
    renderQuiz();
    await userEvent.click(screen.getByRole('button', { name: '.gitlab/configs/' }));
    expect(screen.getByText(/^❌/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '再试一次' })).toBeInTheDocument();
  });

  it('作答后选项锁定，不可重复作答', async () => {
    renderQuiz();
    const opt = screen.getByRole('button', { name: '.github/workflows/' });
    await userEvent.click(opt);
    expect(opt).toBeDisabled();
  });
});
