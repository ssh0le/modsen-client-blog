import Image from 'next/image';
import { Trans } from 'react-i18next/TransWithoutContext';

import { useTranslation } from '@/app/i18n';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import BlogPostCard from '@/components/BlogPostCard';
import {
  authors,
  blogPosts,
  defaultAboutAuthor,
  defaultAuthorIntroduction,
} from '@/constants';
import { getLocaleCategories } from '@/helpers';
import { BlogPost } from '@/types';
import {
  BodyText,
  Heading,
  List,
  ListHeading,
  MediaLinkList,
  Pattern,
} from '@UI';

import { AuthorPageProps } from './interfaces';
import styles from './styles.module.scss';

const {
  author,
  articleWrapper,
  heroWrapper,
  list,
  hero,
  patternContainer,
  heroImage,
  heroInfo,
  heroContent,
  links,
} = styles;

export async function generateStaticParams() {
  return authors.map(({ id }) => ({ authorId: id }));
}

export const dynamicParams = false;

const AuthorDetails = async ({
  params: { lng, authorId },
}: AuthorPageProps) => {
  const { t } = await useTranslation(lng, 'author');
  const { t: tCommon } = await useTranslation(lng, 'common');

  const categories = getLocaleCategories(
    tCommon('categories', { returnObjects: true }),
  );

  const authorPosts = blogPosts.slice(2);

  const { name, photo } = authors.find((author) => author.id === authorId)!;

  const renderBlogPost = (post: BlogPost) => (
    <BlogPostCard
      locale={lng}
      categoryName={categories.get(post.categoryId)!}
      key={post.title}
      {...post}
    />
  );

  return (
    <div className={author}>
      <ArticleWrapper contentClass={heroContent} wrapperClass={heroWrapper}>
        <div className={hero}>
          <div className={heroImage}>
            <Image placeholder="blur" src={photo} alt={name} />
          </div>
          <div className={heroInfo}>
            <Heading type="h1">
              <Trans
                t={t}
                i18nKey={'greeting'}
                values={{ name }}
                defaults={defaultAuthorIntroduction}
              />
            </Heading>
            <BodyText>{defaultAboutAuthor}</BodyText>
            <MediaLinkList className={links} />
          </div>
          <div className={patternContainer}>
            <Pattern />
          </div>
        </div>
      </ArticleWrapper>

      <article className={articleWrapper}>
        <ListHeading align="left">{t('postHeading')}</ListHeading>
        <List
          options={authorPosts}
          renderItem={renderBlogPost}
          direction="column"
          className={list}
        />
      </article>
    </div>
  );
};

export default AuthorDetails;
