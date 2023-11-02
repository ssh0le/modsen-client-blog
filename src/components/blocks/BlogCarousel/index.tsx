'use client';

import { useCallback, useMemo } from 'react';

import { useTranslation } from '@/app/i18n/client';
import BlogPostCard from '@/components/BlogPostCard';
import { Carousel, Heading, List, ListHeading } from '@/components/UI';
import { getLocaleCategories, getPostAmount, getPostByPages } from '@/helpers';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { BlogPost, ClickHandler, LocaleComponentProps } from '@/types';

import { ArticleWrapper } from '../ArticleWrapper';

import styles from './styles.module.scss';

const {
  listHeading,
  blogposts,
  controlInactive,
  blogpostsControls,
  controlsContainer,
} = styles;

export const BlogCarousel = ({ lng }: LocaleComponentProps) => {
  const { t } = useTranslation(lng, 'blog');
  const { t: tCommon } = useTranslation(lng, 'common');
  const width = useWindowWidth();

  const categoriesMap = useMemo(
    () => getLocaleCategories(tCommon('categories', { returnObjects: true })),
    [],
  );

  const postPerSlide = getPostAmount(width);
  const groupedByPagesPosts = useMemo(
    () => getPostByPages(postPerSlide),
    [postPerSlide],
  );

  const renderPost = useCallback(
    (blogpost: BlogPost) => (
      <BlogPostCard
        locale={lng}
        categoryName={categoriesMap.get(blogpost.categoryId)!}
        key={blogpost.id}
        {...blogpost}
      />
    ),
    [categoriesMap, lng],
  );

  const renderSlide = useCallback(
    (posts: BlogPost[]) => {
      return (
        <List direction="column" options={posts} renderItem={renderPost} />
      );
    },
    [renderPost],
  );

  const renderControls = useCallback(
    (
      onNextClick: ClickHandler,
      onPrevClick: ClickHandler,
      hasNext: boolean,
      hasPrev: boolean,
    ) => {
      return (
        <section className={blogpostsControls}>
          <div className={controlsContainer}>
            <Heading
              type="h4"
              onClick={onPrevClick}
              className={`${hasPrev ? '' : controlInactive}`}
            >
              {t('prevArrow')}
            </Heading>
            <Heading
              type="h4"
              onClick={onNextClick}
              className={`${hasNext ? '' : controlInactive}`}
            >
              {t('nextArrow')}
            </Heading>
          </div>
        </section>
      );
    },
    [],
  );

  return (
    <ArticleWrapper>
      <section className={blogposts}>
        <ListHeading className={listHeading} align="left">
          {t('postHeader')}
        </ListHeading>
        <Carousel
          items={groupedByPagesPosts}
          renderControls={renderControls}
          renderItem={renderSlide}
          className={''}
        />
      </section>
    </ArticleWrapper>
  );
};
