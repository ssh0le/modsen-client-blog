import { MouseEvent } from 'react';

import { useTranslation } from '@/app/i18n/client';

import { SearchBarProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

const SearchBar = ({ lng, ...remainedProps }: SearchBarProps) => {
  const { t } = useTranslation(lng, 'category');

  const handleInputClick = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={wrapper}>
      <input
        {...remainedProps}
        onClick={handleInputClick}
        placeholder={t('searchPlaceholder')}
        type="text"
      />
      <button>{t('searchButtonText')}</button>
    </div>
  );
};

export default SearchBar;
