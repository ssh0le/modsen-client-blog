import { ReactNode } from 'react';

export interface CustomTextProps {
  color?: 'yellow' | 'purple' | 'black';
  weight?: '500' | '600';
  size?: '14';
  children: ReactNode;
}
