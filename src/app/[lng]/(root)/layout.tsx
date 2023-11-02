import { Header } from '@blocks';
import type { Metadata } from 'next';
import { lazy, Suspense } from 'react';

import { Loader } from '@/components/UI';
import { metaDataHome } from '@/constants';

import { BaseLayoutProps } from './interfaces';
import styles from './layoutStyles.module.scss';

const Footer = lazy(() => import('@/components/blocks/Footer'));

const { wrapper } = styles;

export default async function RootLayout({
  children,
  params: { lng },
}: BaseLayoutProps) {
  return (
    <>
      <Header lng={lng} />
      <main className={wrapper}>{children}</main>
      <Suspense fallback={<Loader />}>
        <Footer lng={lng} />
      </Suspense>
    </>
  );
}

export const metadata: Metadata = metaDataHome;
