'use client';

import { useTranslation } from '@i18n/client';

import { Result, SearchResultsProps } from './interfaces';
import styles from './styles.module.scss';

const {
  wrapper,
  result: resultStyle,
  resultWrapper,
  noResults,
  selected,
} = styles;

const SearchResults = <T extends Result>({
  results,
  onClick,
  language,
}: SearchResultsProps<T>) => {
  const { t } = useTranslation(language, 'category');
  if (!results) {
    return null;
  }

  const handleResultClick = (result: T) => () => {
    onClick(result);
  };

  return (
    <>
      {results.length > 0 ? (
        <ul className={wrapper}>
          {results.map((result) => {
            const { id, name, isSelected } = result;
            return (
              <li
                className={`${resultWrapper}`}
                key={id}
                onClick={handleResultClick(result)}
              >
                <div className={`${resultStyle} ${isSelected ? selected : ''}`}>
                  {name}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <section className={noResults}>{t('notFoundTags')}</section>
      )}
    </>
  );
};

export default SearchResults;
