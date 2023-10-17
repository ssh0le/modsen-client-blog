import type { Metadata } from 'next';
import { Inter, Sen } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';
import styles from './page.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['700', '400'],
  variable: '--font-inter',
});
const sen = Sen({ subsets: ['latin'], variable: '--font-sen' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const { mainContent } = styles;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sen.variable}`}>
        <main className={mainContent}>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
