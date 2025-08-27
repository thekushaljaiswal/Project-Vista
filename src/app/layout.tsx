import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import SplashProvider from '@/components/providers/splash-provider';
import PageTransition from '@/components/layout/PageTransition';
import BackToTop from '@/components/layout/BackToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Project Vista',
  description: 'A showcase of amazing projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <SplashProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <PageTransition>
                <main className="flex-1">{children}</main>
              </PageTransition>
              <Footer />
            </div>
            <BackToTop />
            <Toaster />
          </SplashProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
