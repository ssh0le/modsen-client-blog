import Image from 'next/image';

import { BlogPostProps } from '../BlogPostCard/interfaces';
import { AuthorAndDate, BodyText, Heading } from '../UI';

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
        <Heading type="h3">{title}</Heading>
        <BodyText type="body1">{description}</BodyText>
      </div>
    </div>
  );
};

export default PostCard;
