'use client';

import { ArticleWrapper } from '@blocks';
import { useTranslation } from '@i18n/client';
import Link from 'next/link';
import { useCallback } from 'react';

import CategoryCard from '@/components/CategoryCard';
import { createLinkToCategory } from '@/helpers';
import { Category } from '@/types';
import { List, ListHeading } from '@UI';

import { CategoryListProps } from './interfaces';
import styles from './styles.module.scss';

const { heading } = styles;

const CategoryList = ({ title, headingAlign, locale }: CategoryListProps) => {
  const { t } = useTranslation(locale, 'common');
  const categories: Category[] = t('categories', { returnObjects: true });
  const categoryDescription = t('commonDescription');

  const renderCategory = useCallback(
    ({ id, name }: Category) => {
      return (
        <Link key={id} href={createLinkToCategory(locale, id)}>
          <CategoryCard id={id} name={name} description={categoryDescription} />
        </Link>
      );
    },
    [locale],
  );
  return (
    <ArticleWrapper>
      <ListHeading className={heading} align={headingAlign}>
        {title}
      </ListHeading>
      <List options={categories} renderItem={renderCategory} />
    </ArticleWrapper>
  );
};

export default CategoryList;
