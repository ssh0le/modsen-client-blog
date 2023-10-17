import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'colored' | 'base';
  children: ReactNode;
}
