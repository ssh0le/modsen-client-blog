import { ReactNode } from 'react';

export interface ListProps<T> {
  options: T[];
  renderItem: (item: T) => ReactNode;
  direction?: 'column';
}
