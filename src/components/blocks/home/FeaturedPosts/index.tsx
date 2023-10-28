import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import { images, postText, staticHeading } from '@/constants';
import { LocaleComponentProps, Post } from '@/types';
import { AuthorAndDate, Button, CustomText, Heading } from '@UI';

import { ArticleWrapper } from '../../ArticleWrapper';

import styles from './styles.module.scss';

const post: Post = {
  author: 'John Deo',
  date: new Date(2021, 7, 23),
  title: '8 Figma design systems that you can download for free today.',
};

const posts = [post, post, post, post];

const { post1 } = images;
const {
  selectedPost,
  selectedPostBody,
  selectedPostContent,
  allPosts,
  allPostsHeading,
  postsList,
  postListItem,
  posts: postsStyles,
} = styles;

export const FeaturedPosts = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'home');
  const { t: tCommon } = await useTranslation(lng, 'common');

  return (
    <ArticleWrapper contentClass={postsStyles}>
      <div className={selectedPost}>
        <Heading type="h2">{t('recommendedPostHeading')}</Heading>
        <div className={selectedPostBody}>
          <Image src={post1} alt="Post" />
          <div className={selectedPostContent}>
            <AuthorAndDate author="John Doe" date={new Date()} />
            <Heading type="h3">{staticHeading}</Heading>
            <p>{postText}</p>
          </div>
          <Button styleType="colored">{tCommon('readMoreButton')}</Button>
        </div>
      </div>
      <div className={allPosts}>
        <div className={allPostsHeading}>
          <Heading type="h2">{t('allPosts')}</Heading>
          <CustomText color="purple">{t('showAll')}</CustomText>
        </div>
        <ul className={postsList}>
          {posts.map(({ author, date, title }, index) => (
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
