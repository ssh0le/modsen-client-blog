import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import BlogPostCard from '@/components/BlogPostCard';
import { authors, blogPosts, defaultAboutAuthor } from '@/constants';
import { createAuthorHeading } from '@/helpers';
import { BlogPost } from '@/types';
import {
  BodyText,
  DecorationBar,
  Heading,
  List,
  ListHeading,
  MediaLinkList,
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
  params: { lng: language, authorId },
}: AuthorPageProps) => {
  const { t } = await useTranslation(language, 'author');

  const authorPosts = blogPosts.slice(2);

  const { name, photo } = authors.find((author) => author.id === authorId)!;

  const renderBlogPost = (post: BlogPost) => (
    <BlogPostCard locale={language} key={post.title} {...post} />
  );

  return (
    <div className={author}>
      <ArticleWrapper contentClass={heroContent} wrapperClass={heroWrapper}>
        <section className={hero}>
          <div className={heroImage}>
            <Image placeholder="blur" src={photo} alt={name} />
          </div>
          <section className={heroInfo}>
            <Heading type="h1">{createAuthorHeading(name)}</Heading>
            <BodyText>{defaultAboutAuthor}</BodyText>
            <MediaLinkList className={links} />
          </section>
          <div className={patternContainer}>
            <DecorationBar />
          </div>
        </section>
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
