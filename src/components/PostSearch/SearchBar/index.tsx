import { useTranslation } from '@/app/i18n/client';

import { SearchBarProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

const SearchBar = ({ language, ...remainedProps }: SearchBarProps) => {
  const { t } = useTranslation(language, 'category');

  return (
    <div className={wrapper}>
      <input
        {...remainedProps}
        placeholder={t('searchPlaceholder')}
        type="text"
      />
      <button>{t('searchButtonText')}</button>
    </div>
  );
};

export default SearchBar;
