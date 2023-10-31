import { ReactNode } from 'react';

export interface BaseLayoutProps {
  children: ReactNode;
  params: { lng: string };
}
