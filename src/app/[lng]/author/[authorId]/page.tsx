import Image from 'next/image';
import { Trans } from 'react-i18next/TransWithoutContext';

import { useTranslation } from '@/app/i18n';
import BlogPostCard from '@/components/BlogPostCard';
import {
  authors,
  blogPosts,
  defaultAboutAuthor,
  defaultAuthorIntroduction,
} from '@/constants';
import { BlogPost } from '@/types';
import { BodyText, List, ListHeading, MediaLinkList, Pattern } from '@UI';

import { AuthorPageProps } from './interfaces';
import styles from './styles.module.scss';

const {
  author,
  articleWrapper,
  heroWrapper,
  list,
  heroContentWrapper,
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

  const authorPosts = blogPosts.slice(2);

  const { name, photo } = authors.find((author) => author.id === authorId)!;

  const renderBlogPost = (post: BlogPost) => (
    <BlogPostCard key={post.title} {...post} />
  );

  return (
    <div className={author}>
      <article className={heroWrapper}>
        <div className={heroContentWrapper}>
          <div className={heroContent}>
            <div className={hero}>
              <div className={heroImage}>
                <Image src={photo} alt={'asd'} />
              </div>
              <div className={heroInfo}>
                <h1>
                  <Trans
                    t={t}
                    i18nKey={'greeting'}
                    values={{ name }}
                    defaults={defaultAuthorIntroduction}
                  />
                </h1>
                <BodyText>{defaultAboutAuthor}</BodyText>
                <MediaLinkList className={links} />
              </div>
            </div>
          </div>
          <div className={patternContainer}>
            <Pattern />
          </div>
        </div>
      </article>

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
