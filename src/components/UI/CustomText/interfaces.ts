import { InputHTMLAttributes, ReactNode } from 'react';

import { Color, FontSize, Weight } from '@/types';

export interface CustomTextProps
  extends Omit<InputHTMLAttributes<HTMLSpanElement>, 'size' | 'className'> {
  color?: Color;
  weight?: Weight;
  size?: FontSize;
  children: ReactNode;
}
