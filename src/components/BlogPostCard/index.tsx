'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import { createLinkToPostWithLocale, getCategoryName } from '@/helpers';

import { BodyText, Cap, CustomText, Heading } from '../UI';

import styles from './styled.module.scss';
import { BlogPostCardProps } from './types';

const { blogtitle, blogpost, info, imageContainer } = styles;

const BlogPostCard = (props: BlogPostCardProps) => {
  const { image, title, description, categoryId, id, locale } = props;

  return (
    <Link href={createLinkToPostWithLocale(locale, id)}>
      <div className={blogpost}>
        <section className={imageContainer}>
          <Image src={image} alt={title} />
        </section>

        <section className={info}>
          <Cap>
            <CustomText color="purple">
              {getCategoryName(categoryId)}
            </CustomText>
          </Cap>
          <Heading type="h2" className={blogtitle}>
            {title}
          </Heading>
          <BodyText>{description}</BodyText>
        </section>
      </div>
    </Link>
  );
};

export default memo(BlogPostCard, (nextProps, prevProps) => {
  return nextProps.id === prevProps.id;
});
