import { Heading } from '@/components/UI';

import styles from './styles.module.scss';
import { ArticleListProps } from './types';

const { list } = styles;

const ArticleList = ({ options }: ArticleListProps) => {
  return (
    <ul className={list}>
      {options.map((option) => (
        <li key={option}>
          <Heading type="h4">{option}</Heading>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
