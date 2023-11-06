'use client';

import { memo, useState } from 'react';

import { CarouselProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, slide, displayWindow, slides } = styles;

const createCarouselStyle = (currentSlide: number) => ({
  transform: `translateX(-${currentSlide * 100}%)`,
});

const GenericCarousel = <T,>({
  renderControls,
  renderItem,
  className,
  items,
}: CarouselProps<T>) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const hasNext = currentSlide < items.length - 1;
  const hasPrev = currentSlide > 0;

  const createControlClickHandler = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      return () => {
        if (hasNext) {
          setCurrentSlide((prevSlide) => prevSlide + 1);
        }
      };
    } else {
      return () => {
        if (hasPrev) {
          setCurrentSlide((prevSlide) => prevSlide - 1);
        }
      };
    }
  };

  return (
    <div className={`${wrapper} ${className}`}>
      <section className={slides}>
        <div
          className={displayWindow}
          style={createCarouselStyle(currentSlide)}
        >
          {items.map((item, index) => (
            <div key={index} className={slide}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </section>
      {renderControls(
        createControlClickHandler('next'),
        createControlClickHandler('prev'),
        hasNext,
        hasPrev,
      )}
    </div>
  );
};

export const Carousel = memo(GenericCarousel) as typeof GenericCarousel;
