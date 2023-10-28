import { Color, FontSize, Weight } from '@/types';

export interface AuthorAndDateProps {
  author: string;
  date: Date;
  color?: Color;
  authorColor?: Color;
  size?: FontSize;
  weight?: Weight;
}
