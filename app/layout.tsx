import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harshith Gowda | AI Engineer & Independent Builder',
  description: 'AI Engineer specializing in autonomous agents, LLM fine-tuning, algorithmic trading systems, and document intelligence pipelines. Building OpenClaw, ClawTrader, and production ML systems.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLM', 'Autonomous Agents', 'Trading Bots', 'Python', 'TypeScript', 'Bangalore', 'Europe'],
  authors: [{ name: 'Harshith Gowda' }],
  creator: 'Harshith Gowda',
  publisher: 'Harshith Gowda',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshithgowda.dev',
    title: 'Harshith Gowda | AI Engineer & Independent Builder',
    description: 'AI Engineer specializing in autonomous agents, LLM fine-tuning, algorithmic trading systems, and document intelligence pipelines.',
    siteName: 'Harshith Gowda Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshith Gowda | AI Engineer & Independent Builder',
    description: 'AI Engineer specializing in autonomous agents, LLM fine-tuning, algorithmic trading systems, and document intelligence pipelines.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}