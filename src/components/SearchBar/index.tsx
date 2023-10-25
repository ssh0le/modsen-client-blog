import { useTranslation } from '@/app/i18n';
import { LocaleComponentProps } from '@/types';

import styles from './styles.module.scss';

const { wrapper } = styles;

const SearchBar = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'category');
  return (
    <div className={wrapper}>
      <input placeholder={t('searchPlaceholder')} type="text" />
      <button>{t('searchButtonText')}</button>
    </div>
  );
};

export default SearchBar;
