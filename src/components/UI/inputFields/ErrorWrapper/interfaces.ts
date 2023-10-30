import { ReactNode } from 'react';

export interface ErrorWrapperProps {
  children: ReactNode;
  error?: string;
}
