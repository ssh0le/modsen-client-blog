import { ReactNode } from 'react';

import { Color, FontSize, Weight } from '@/types';

export interface CustomTextProps {
  color?: Color;
  weight?: Weight;
  size?: FontSize;
  children: ReactNode;
}
