'use client';

import Image from 'next/image';
import { useCallback } from 'react';

import { useTranslation } from '@/app/i18n/client';
import Comment from '@/components/blocks/HomeComments/Comment';
import { BodyText, Cap, Carousel, Heading } from '@/components/UI';
import {
  altTexts,
  comments,
  controlsIcons,
  defaultCommentHeading,
} from '@/constants';
import {
  ClickHandler,
  Comment as IComment,
  LocaleComponentProps,
} from '@/types';

import { ArticleWrapper } from '../ArticleWrapper';

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
  wrapper,
} = styles;

const { rightArrow } = controlsIcons;
const { leftArrowAlt, rightArrowAlt } = altTexts;

export const HomeComments = ({ lng }: LocaleComponentProps) => {
  const renderComment = (comment: IComment) => <Comment {...comment} />;

  const { t } = useTranslation(lng, 'home');

  const renderCarouselControls = useCallback(
    (
      onNext: ClickHandler,
      onPrev: ClickHandler,
      hasNext: boolean,
      hasPrev: boolean,
    ) => {
      return (
        <section className={controls}>
          <div
            className={`${arrow} ${hasPrev ? active : ''} ${left}`}
            onClick={onPrev}
          >
            <Image src={rightArrow} alt={leftArrowAlt} />
          </div>
          <div
            className={`${arrow} ${hasNext ? active : ''} ${right}`}
            onClick={onNext}
          >
            <Image src={rightArrow} alt={rightArrowAlt} />
          </div>
        </section>
      );
    },
    [],
  );

  return (
    <ArticleWrapper wrapperClass={wrapper} contentClass={testimonials}>
      <section className={description}>
        <Cap>{t('reviewsCap')}</Cap>
        <Heading type="h2">{t('reviewsHeading')}</Heading>
        <BodyText>{defaultCommentHeading}</BodyText>
      </section>
      <div className={delimiterContainer}>
        <div className={delimiter}></div>
      </div>
      <section className={corouselWrapper}>
        <Carousel
          renderControls={renderCarouselControls}
          renderItem={renderComment}
          items={comments}
          className={corousel}
        />
      </section>
    </ArticleWrapper>
  );
};
