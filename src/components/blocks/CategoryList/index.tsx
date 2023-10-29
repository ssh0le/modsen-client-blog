'use client';

import Link from 'next/link';

import { useTranslation } from '@/app/i18n/client';
import CategoryCard from '@/components/CategoryCard';
import { createLinkToCategory } from '@/helpers';
import { Category } from '@/types';
import { List, ListHeading } from '@UI';

import { ArticleWrapper } from '../ArticleWrapper';

import { CategoryListProps } from './interfaces';
import styles from './styles.module.scss';

const { heading } = styles;

export const CategoryList = ({
  title,
  headingAlign,
  locale,
}: CategoryListProps) => {
  const { t } = useTranslation(locale, 'common');
  const categories: Category[] = t('categories', { returnObjects: true });

  const renderCategory = ({ id, name }: Category) => {
    return (
      <Link key={id} href={createLinkToCategory(locale, id)}>
        <CategoryCard name={name} />
      </Link>
    );
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
