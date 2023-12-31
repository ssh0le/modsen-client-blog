'use client';

import { ArticleWrapper } from '@blocks';
import { useTranslation } from '@i18n/client';
import { useCallback, useMemo } from 'react';

import BlogPostCard from '@/components/BlogPostCard';
import { getPostAmount, getPostByPages } from '@/helpers';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { BlogPost, ClickHandler, LocaleComponentProps } from '@/types';
import { Carousel, Heading, List, ListHeading } from '@UI';

import styles from './styles.module.scss';

const {
  listHeading,
  blogposts,
  controlInactive,
  blogpostsControls,
  controlsContainer,
} = styles;

const BlogCarousel = ({ language }: LocaleComponentProps) => {
  const { t } = useTranslation(language, 'blog');
  const width = useWindowWidth();

  const postPerSlide = getPostAmount(width);
  const groupedByPagesPosts = useMemo(
    () => getPostByPages(postPerSlide),
    [postPerSlide],
  );

  const renderPost = useCallback(
    (blogpost: BlogPost) => (
      <BlogPostCard locale={language} key={blogpost.id} {...blogpost} />
    ),
    [language],
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

export default BlogCarousel;
