'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { createLinkToPost } from '@/helpers';
import { BlogPost } from '@/types';

import { AuthorAndDate, BodyText, Heading } from '../UI';

import styles from './styles.module.scss';

const { content, wrapper, imageContainer, postImage } = styles;

const PostCard = (props: BlogPost) => {
  const { image, author, date, description, title, id } = props;

  const pathname = usePathname();

  return (
    <Link href={createLinkToPost(pathname, id)}>
      <div className={wrapper}>
        <section className={imageContainer}>
          <Image className={postImage} src={image} alt={title} />
        </section>
        <section className={content}>
          <AuthorAndDate author={author} date={date} color={'dark-gray'} />
          <Heading type="h3">{title}</Heading>
          <BodyText type="body1">{description}</BodyText>
        </section>
      </div>
    </Link>
  );
};

export default PostCard;
