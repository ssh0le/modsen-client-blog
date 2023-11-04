import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { routePathes } from '@/constants';
import {
  createLinkToPostWithLocale,
  getFeaturedPost,
  getPosts,
} from '@/helpers';
import { LocaleComponentProps } from '@/types';
import { AuthorAndDate, BodyText, Button, CustomText, Heading } from '@UI';

import { ArticleWrapper } from '../../ArticleWrapper';

import MinimalBlogPost from './MinimalBlogPost';
import styles from './styles.module.scss';

const {
  selectedPost,
  selectedPostBody,
  selectedPostContent,
  allPosts: allPostsStyle,
  allPostsHeading,
  postsList,
  posts: postsStyles,
  imageContainer,
} = styles;

export const FeaturedPosts = async ({ language }: LocaleComponentProps) => {
  const { t } = await useTranslation(language, 'home');
  const { t: tCommon } = await useTranslation(language, 'common');

  const { image, title, description, id, author, date } = getFeaturedPost();
  const allPosts = getPosts(4, id);

  return (
    <ArticleWrapper contentClass={postsStyles}>
      <section className={selectedPost}>
        <Heading type="h2">{t('recommendedPostHeading')}</Heading>
        <section className={selectedPostBody}>
          <div className={imageContainer}>
            <Image placeholder="blur" src={image} alt={title} />
          </div>
          <div className={selectedPostContent}>
            <AuthorAndDate author={author} date={date} />
            <Heading type="h3">{title}</Heading>
            <BodyText>{description}</BodyText>
          </div>
          <Link href={`${language}${routePathes.blog}/${id}`}>
            <Button styleType="colored">{tCommon('readMoreButton')}</Button>
          </Link>
        </section>
      </section>

      <section className={allPostsStyle}>
        <div className={allPostsHeading}>
          <Heading type="h2">{t('allPosts')}</Heading>
          <Link href={`${language}${routePathes.blog}`}>
            <CustomText color="purple">{t('showAll')}</CustomText>
          </Link>
        </div>
        <ul className={postsList}>
          {allPosts.map(({ author, date, title, id }) => (
            <Link key={id} href={createLinkToPostWithLocale(language, id)}>
              <MinimalBlogPost author={author} date={date} title={title} />
            </Link>
          ))}
        </ul>
      </section>
    </ArticleWrapper>
  );
};
