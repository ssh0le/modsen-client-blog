import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { CategoryList, Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import BlogPostCard from '@/components/BlogPostCard';
import InfinityScroll from '@/components/InfinityScroll';
import {
  createLinkToPostWithLocale,
  getBlogFeaturedPost,
  getPosts,
} from '@/helpers';
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

export default async function Blog({ params: { lng } }: LocaleParams) {
  const { t } = await useTranslation(lng, 'blog');
  const { t: tCommon } = await useTranslation(lng, 'common');

  const { title, description, image, author, date, id } = getBlogFeaturedPost();

  const posts = getPosts(4, id);

  return (
    <div className={blog}>
      <InfinityScroll>
        <ArticleWrapper contentClass={hero} wrapperClass={wrapper}>
          <section className={content}>
            <Cap>{t('recommendedPostHeading')}</Cap>
            <section className={message}>
              <Heading type="h2">{title}</Heading>
              <AuthorAndDate author={author} date={date} authorColor="purple" />
              <BodyText>{description}</BodyText>
            </section>
            <Link href={createLinkToPostWithLocale(lng, id)}>
              <Button styleType="colored">{tCommon('readMoreButton')}</Button>
            </Link>
          </section>
          <div>
            <Image src={image} alt={title} />
          </div>
        </ArticleWrapper>

        <ArticleWrapper>
          <section className={blogposts}>
            <ListHeading className={listHeading} align="left">
              {t('postHeader')}
            </ListHeading>
            {posts.map((blogpost) => (
              <BlogPostCard
                categoryName={'name'}
                key={blogpost.id}
                {...blogpost}
              />
            ))}
          </section>

          <section className={blogpostsControls}>
            <div className={controlsContainer}>
              <Heading type="h2" className={controlInactive}>
                {t('prevArrow')}
              </Heading>
              <Heading type="h4">{t('nextArrow')}</Heading>
            </div>
          </section>
        </ArticleWrapper>

        <CategoryList
          title={t('categoriesHeader')}
          headingAlign="left"
          locale={lng}
        />

        <Invitation lng={lng} />
      </InfinityScroll>
    </div>
  );
}
