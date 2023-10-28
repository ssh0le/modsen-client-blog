import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import AuthorAndDate from '@/components/AuthorAndDate';
import { CategoryList, Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import BlogPostCard from '@/components/BlogPostCard';
import InfinityScroll from '@/components/InfinityScroll';
import { blogPosts, images } from '@/constants';
import { LocaleParams } from '@/types';
import { Button, Cap, ListHeading } from '@UI';

import styles from './styles.module.scss';

const {
  message,
  content,
  hero,
  blog,
  listHeading,
  blogposts,
  controlInactive,
  blogpostsControls,
  controlsContainer,
} = styles;
const { blogHero } = images;

export default async function Blog({ params: { lng } }: LocaleParams) {
  const { t } = await useTranslation(lng, 'blog');
  const { t: tCommon } = await useTranslation(lng, 'common');

  return (
    <div className={blog}>
      <InfinityScroll>
        <ArticleWrapper className={hero}>
          <div className={content}>
            <Cap>{t('recommendedPostHeading')}</Cap>
            <div className={message}>
              <h2>{t('header')}</h2>
              <AuthorAndDate
                author="James West"
                date={new Date()}
                authorColor="purple"
              />
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <Button styleType="colored">{tCommon('readMoreButton')}</Button>
          </div>
          <div>
            <Image src={blogHero} alt="Blog hero image" />
          </div>
        </ArticleWrapper>

        <ArticleWrapper>
          <div className={blogposts}>
            <ListHeading className={listHeading} align="left">
              {t('postHeader')}
            </ListHeading>
            {blogPosts.map((blogpost, key) => (
              <BlogPostCard key={key} {...blogpost} />
            ))}
          </div>
          <div className={blogpostsControls}>
            <div className={controlsContainer}>
              <h2 className={controlInactive}>{t('prevArrow')}</h2>
              <h4>{t('nextArrow')}</h4>
            </div>
          </div>
        </ArticleWrapper>
        <CategoryList title={t('categoriesHeader')} headingAlign="left" />
        <Invitation lng={lng} />
      </InfinityScroll>
    </div>
  );
}
