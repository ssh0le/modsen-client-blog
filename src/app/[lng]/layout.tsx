import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Inter, Sen } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { languages } from '../i18n/settings';

import '@/styles/global.scss';
import { AppLayoutProps } from './interfaces';
import styles from './styles/layout.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['700', '400', '500', '600', '900'],
  variable: '--font-inter',
});
const sen = Sen({
  subsets: ['latin'],
  weight: ['700', '400', '600'],
  variable: '--font-sen',
});

const { mainContent } = styles;

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: AppLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${inter.variable} ${sen.variable}`}>
        <main className={mainContent}>
          <div>
            <Header lng={lng} />
            {children}
            <Footer lng={lng} />
          </div>
        </main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'BLog',
  description: 'Modsen Clien Blog',
};
