import { Header } from '@blocks';
import type { Metadata } from 'next';
import { lazy, Suspense } from 'react';

import { metaDataHome } from '@/constants';
import { Loader } from '@UI';

import { BaseLayoutProps } from './interfaces';
import styles from './layoutStyles.module.scss';

const Footer = lazy(() => import('@/components/blocks/Footer'));

const { wrapper } = styles;

export default async function RootLayout({
  children,
  params: { lng: language },
}: BaseLayoutProps) {
  return (
    <>
      <Header language={language} />
      <main className={wrapper}>{children}</main>
      <Suspense fallback={<Loader />}>
        <Footer language={language} />
      </Suspense>
    </>
  );
}

export const metadata: Metadata = metaDataHome;
