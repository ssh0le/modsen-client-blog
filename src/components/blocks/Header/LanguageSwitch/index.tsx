'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { languages } from '@/app/i18n/settings';

import styles from './styles.module.scss';

const { wrapper, active, delimeter } = styles;

const LanguageSwitch = ({ language }: { language: string }) => {
  const pathname = usePathname().slice(3);
  return (
    <div className={wrapper}>
      {languages.map((supportedLanguage, index) => {
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
      })}
    </div>
  );
};

export default LanguageSwitch;
