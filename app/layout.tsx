import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { ProgressProvider } from '@/components/progress-context';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s · Learn GitHub',
    default: 'Learn GitHub · GitHub 协作与 CI/CD 学习网站',
  },
  description: '面向个人开发与团队协作的 GitHub 特有能力学习站：Issue、Pull Request、Actions、团队治理。',
  metadataBase: new URL('https://learn-github.vercel.app'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <ProgressProvider>{children}</ProgressProvider>
        </RootProvider>
      </body>
    </html>
  );
}
