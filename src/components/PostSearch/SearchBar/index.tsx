import { MouseEvent } from 'react';

import { useTranslation } from '@/app/i18n/client';

import { SearchBarProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

const SearchBar = ({ lng, ...remainedProps }: SearchBarProps) => {
  const { t } = useTranslation(lng, 'category');

  const handleMouseDown = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={wrapper} onMouseUp={handleMouseDown}>
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
