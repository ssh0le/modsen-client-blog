import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { CategoryList, Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import { BlogCarousel } from '@/components/blocks/BlogCarousel';
import { createLinkToPostWithLocale, getBlogFeaturedPost } from '@/helpers';
import { LocaleParams } from '@/types';
import { AuthorAndDate, BodyText, Button, Cap, Heading } from '@UI';

import styles from './styles.module.scss';

const { message, content, hero, blog, imageContainer, wrapper } = styles;

export default async function Blog({ params: { lng } }: LocaleParams) {
  const { t } = await useTranslation(lng, 'blog');
  const { t: tCommon } = await useTranslation(lng, 'common');

  const { title, description, image, author, date, id } = getBlogFeaturedPost();

  return (
    <div className={blog}>
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
        <div className={imageContainer}>
          <Image src={image} alt={title} />
        </div>
      </ArticleWrapper>

      <BlogCarousel lng={lng} />

      <CategoryList
        title={t('categoriesHeader')}
        headingAlign="left"
        locale={lng}
      />

      <Invitation lng={lng} />
    </div>
  );
}
