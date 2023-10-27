import { InputHTMLAttributes } from 'react';

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: { key: string; value: string }[];
}
