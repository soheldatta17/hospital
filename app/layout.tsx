import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MindfulCare - Mental Health Support',
  description: 'Your journey to mental wellness starts here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {}
          <main className="p-4 min-h-screen">
            {children}
          </main>
          {}
          <footer className="w-full text-center p-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <p className="text-muted-foreground">
              Made with <span className="text-red-500">❤️</span> by Sohel Datta © 2024
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
