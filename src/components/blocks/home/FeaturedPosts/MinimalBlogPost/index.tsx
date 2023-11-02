import { AuthorAndDate, Heading } from '@/components/UI';

import { MinimalBlogPostProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

const MinimalBlogPost = ({ author, date, title }: MinimalBlogPostProps) => {
  return (
    <li className={wrapper}>
      <AuthorAndDate author={author} date={date} color="medium-gray" />
      <Heading type="h4">{title}</Heading>
    </li>
  );
};

export default MinimalBlogPost;
