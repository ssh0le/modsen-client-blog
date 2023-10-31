import { Footer, Header } from '@blocks';
import type { Metadata } from 'next';

import { BaseLayoutProps } from './interfaces';
import styles from './layoutStyles.module.scss';

const { wrapper } = styles;

export default async function RootLayout({
  children,
  params: { lng },
}: BaseLayoutProps) {
  return (
    <>
      <Header lng={lng} />
      <main className={wrapper}>{children}</main>
      <Footer lng={lng} />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Modsen Clien Blog',
};
