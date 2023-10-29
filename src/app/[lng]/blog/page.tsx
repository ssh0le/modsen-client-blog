import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import { CategoryList, Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import BlogPostCard from '@/components/BlogPostCard';
import InfinityScroll from '@/components/InfinityScroll';
import { blogPosts, images, postText } from '@/constants';
import { LocaleParams } from '@/types';
import {
  AuthorAndDate,
  BodyText,
  Button,
  Cap,
  Heading,
  ListHeading,
} from '@UI';

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
  wrapper,
} = styles;
const { blogHero } = images;

export default async function Blog({ params: { lng } }: LocaleParams) {
  const { t } = await useTranslation(lng, 'blog');
  const { t: tCommon } = await useTranslation(lng, 'common');

  return (
    <div className={blog}>
      <InfinityScroll>
        <ArticleWrapper contentClass={hero} wrapperClass={wrapper}>
          <div className={content}>
            <Cap>{t('recommendedPostHeading')}</Cap>
            <div className={message}>
              <Heading type="h2">{t('header')}</Heading>
              <AuthorAndDate
                author="James West"
                date={new Date()}
                authorColor="purple"
              />
              <BodyText>{postText}</BodyText>
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
              <Heading type="h2" className={controlInactive}>
                {t('prevArrow')}
              </Heading>
              <Heading type="h4">{t('nextArrow')}</Heading>
            </div>
          </div>
        </ArticleWrapper>

        <CategoryList title={t('categoriesHeader')} headingAlign="left" />

        <Invitation lng={lng} />
      </InfinityScroll>
    </div>
  );
}
