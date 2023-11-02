import { ReactNode } from 'react';

import { LocaleParams } from '@/types';

export interface AppLayoutProps extends LocaleParams {
  children: ReactNode;
}

export interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}
