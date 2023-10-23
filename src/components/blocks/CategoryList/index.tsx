import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants';
import { Category } from '@/types';
import { List, ListHeading } from '@UI';

import { ArticleWrapper } from '../ArticleWrapper';

import { CategoryListProps } from './interfaces';
import styles from './styles.module.scss';

const { heading } = styles;

export const CategoryList = ({ title, headingAlign }: CategoryListProps) => {
  const renderCategory = (category: Category) => {
    return <CategoryCard key={category} name={category} />;
  };
  return (
    <ArticleWrapper>
      <ListHeading className={heading} align={headingAlign}>
        {title}
      </ListHeading>
      <List options={categories} renderItem={renderCategory} />
    </ArticleWrapper>
  );
};
