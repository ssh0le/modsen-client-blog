'use client';

import { languages } from '@i18n/settings';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useCallback } from 'react';

import styles from './styles.module.scss';

const { wrapper, active, delimeter } = styles;

const LanguageSwitch = ({ language }: { language: string }) => {
  const pathname = usePathname().slice(3);

  const renderLanguage = useCallback(
    (supportedLanguage: string, index: number) => {
      return (
        <Fragment key={index}>
          {index > 0 && <div className={delimeter}></div>}
          <span
            key={supportedLanguage}
            className={`${language === supportedLanguage ? active : ''}`}
          >
            <Link replace href={`/${supportedLanguage}${pathname}`}>
              {supportedLanguage}
            </Link>
          </span>
        </Fragment>
      );
    },
    [language],
  );
  return <div className={wrapper}>{languages.map(renderLanguage)}</div>;
};

export default LanguageSwitch;
