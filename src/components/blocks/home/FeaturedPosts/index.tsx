import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { routePathes } from '@/constants';
import { getFeaturedPost, getPosts } from '@/helpers';
import { LocaleComponentProps } from '@/types';
import { AuthorAndDate, BodyText, Button, CustomText, Heading } from '@UI';

import { ArticleWrapper } from '../../ArticleWrapper';

import styles from './styles.module.scss';

const {
  selectedPost,
  selectedPostBody,
  selectedPostContent,
  allPosts: allPostsStyle,
  allPostsHeading,
  postsList,
  postListItem,
  posts: postsStyles,
  imageContainer,
} = styles;

export const FeaturedPosts = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'home');
  const { t: tCommon } = await useTranslation(lng, 'common');

  const { image, title, description, id } = getFeaturedPost();
  const allPosts = getPosts(4, id);

  return (
    <ArticleWrapper contentClass={postsStyles}>
      <div className={selectedPost}>
        <Heading type="h2">{t('recommendedPostHeading')}</Heading>
        <div className={selectedPostBody}>
          <div className={imageContainer}>
            <Image src={image} alt="Post" />
          </div>
          <div className={selectedPostContent}>
            <AuthorAndDate author="John Doe" date={new Date()} />
            <Heading type="h3">{title}</Heading>
            <BodyText>{description}</BodyText>
          </div>
          <Link href={`${lng}${routePathes.blog}/${id}`}>
            <Button styleType="colored">{tCommon('readMoreButton')}</Button>
          </Link>
        </div>
      </div>
      <div className={allPostsStyle}>
        <div className={allPostsHeading}>
          <Heading type="h2">{t('allPosts')}</Heading>
          <Link href={`${lng}${routePathes.blog}`}>
            <CustomText color="purple">{t('showAll')}</CustomText>
          </Link>
        </div>
        <ul className={postsList}>
          {allPosts.map(({ author, date, title }, index) => (
            <li key={index} className={postListItem}>
              <AuthorAndDate author={author} date={date} color="medium-gray" />
              <Heading type="h4">{title}</Heading>
            </li>
          ))}
        </ul>
      </div>
    </ArticleWrapper>
  );
};
