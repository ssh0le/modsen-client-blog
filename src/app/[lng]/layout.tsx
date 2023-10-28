import { Footer, Header } from '@blocks';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Inter, Sen } from 'next/font/google';

import { languages } from '../i18n/settings';

import '@/styles/global.scss';
import { AppLayoutProps } from './interfaces';

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
        <main>
          <Header lng={lng} />
          {children}
          <Footer lng={lng} />
        </main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'BLog',
  description: 'Modsen Clien Blog',
};
