import { ReactNode } from 'react';

import { ClickHandler } from '@/types';

export interface CarouselProps<T> {
  className?: string;
  items: T[];
  renderControls: (
    onNextClick: ClickHandler,
    onPrevClick: ClickHandler,
    hasNext: boolean,
    hasPrev: boolean,
  ) => ReactNode;
  renderItem: (item: T) => ReactNode;
}
