'use client';

import Image from 'next/image';

import { useTranslation } from '@/app/i18n/client';
import Comment from '@/components/Comment';
import { Cap, Carousel } from '@/components/UI';
import { comments, controlsIcons, defaultCommentHeading } from '@/constants';
import {
  ClickHandler,
  Comment as IComment,
  LocaleComponentProps,
} from '@/types';

import styles from './styles.module.scss';

const {
  controls,
  arrow,
  active,
  testimonials,
  description,
  delimiterContainer,
  delimiter,
  corouselWrapper,
  left,
  right,
  corousel,
} = styles;

const { rightArrow } = controlsIcons;

export const HomeComments = ({ lng }: LocaleComponentProps) => {
  const renderComment = (comment: IComment) => <Comment {...comment} />;

  const { t } = useTranslation(lng, 'home');

  const renderCarouselControls = (
    onNext: ClickHandler,
    onPrev: ClickHandler,
    hasNext: boolean,
    hasPrev: boolean,
  ) => {
    return (
      <div className={controls}>
        <div
          className={`${arrow} ${hasPrev ? active : ''} ${left}`}
          onClick={onPrev}
        >
          <Image src={rightArrow} alt="Left arrow" />
        </div>
        <div
          className={`${arrow} ${hasNext ? active : ''} ${right}`}
          onClick={onNext}
        >
          <Image src={rightArrow} alt="Right arrow" />
        </div>
      </div>
    );
  };

  return (
    <div className={testimonials}>
      <div className={description}>
        <Cap>{t('reviewsCap')}</Cap>
        <h2>{t('reviewsHeading')}</h2>
        <p>{defaultCommentHeading}</p>
      </div>
      <div className={delimiterContainer}>
        <div className={delimiter}></div>
      </div>
      <div className={corouselWrapper}>
        <Carousel
          renderControls={renderCarouselControls}
          renderItem={renderComment}
          items={comments}
          className={corousel}
        />
      </div>
    </div>
  );
};
