import { ReactNode } from 'react';

export interface ImageDecorationProps {
  type: 'rectangle' | 'circle';
  children: ReactNode;
}
