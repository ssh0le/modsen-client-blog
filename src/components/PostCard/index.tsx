import Image from 'next/image';

import AuthorAndDate from '../AuthorAndDate';
import { BlogPostProps } from '../BlogPostCard/interfaces';

import styles from './styles.module.scss';

const { content, wrapper, imageContainer, postImage } = styles;

const PostCard = (props: BlogPostProps) => {
  const { image, author, date, description, title } = props;

  return (
    <div className={wrapper}>
      <div className={imageContainer}>
        <Image className={postImage} src={image} alt={title} />
      </div>
      <div className={content}>
        <AuthorAndDate author={author} date={date} color={'dark-gray'} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
