import { useTranslation } from '@/app/i18n';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import PostSearch from '@/components/PostSearch';
import { categoryStatics } from '@/constants';
import { Category } from '@/types';
import { BodyText, Cap, DisplayText } from '@UI';

import { CategoryPageProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, heading } = styles;

const { headingMessage } = categoryStatics;

export default async function Category({
  params: { lng, categoryId },
}: CategoryPageProps) {
  const { t } = await useTranslation(lng, 'category');
  const { t: tCommon } = await useTranslation(lng, 'common');

  const categories: Category[] = tCommon('categories', { returnObjects: true });

  const { name } = categories.find(({ id }) => id === categoryId)!;

  return (
    <div className={wrapper}>
      <section className={heading}>
        <DisplayText>{name}</DisplayText>
        <BodyText type="body1">{headingMessage}</BodyText>
        <Cap>
          {t('routePrefix')}
          {name}
        </Cap>
      </section>

      <ArticleWrapper>
        <PostSearch lng={lng} categoryId={categoryId} />
      </ArticleWrapper>
    </div>
  );
}
