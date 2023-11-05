import { useTranslation } from '@i18n/index';

import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import PostSearch from '@/components/PostSearch';
import { categories } from '@/constants';
import { getLocaleCategories } from '@/helpers';
import { Category } from '@/types';
import { BodyText, Cap, DisplayText } from '@UI';

import { CategoryPageProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, heading } = styles;

export async function generateStaticParams() {
  return categories.map((categoryId) => ({ categoryId }));
}

export const dynamicParams = false;

export default async function Category({
  params: { lng: language, categoryId },
}: CategoryPageProps) {
  const { t } = await useTranslation(language, 'category');
  const { t: tCommon } = await useTranslation(language, 'common');

  const categories = getLocaleCategories(
    tCommon('categories', { returnObjects: true }),
  );

  const categoryName = categories.get(categoryId);
  const subheadingMessage = tCommon('commonDescription');

  return (
    <div className={wrapper}>
      <section className={heading}>
        <DisplayText>{categoryName}</DisplayText>
        <BodyText type="body1">{subheadingMessage}</BodyText>
        <Cap>
          {t('routePrefix')}
          {categoryName}
        </Cap>
      </section>

      <ArticleWrapper>
        <PostSearch language={language} categoryId={categoryId} />
      </ArticleWrapper>
    </div>
  );
}
