'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { languages } from '@/app/i18n/settings';

import styles from './styles.module.scss';

const { wrapper, active, delimeter } = styles;

const LanguageSwitch = ({ lng }: { lng: string }) => {
  const pathname = usePathname().slice(3);
  return (
    <div className={wrapper}>
      {languages.map((l, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <div key={l + index} className={delimeter}></div>}
            <span key={index + l} className={`${lng === l ? active : ''}`}>
              <Link replace href={`/${l}/${pathname}`}>
                {l}
              </Link>
            </span>
          </Fragment>
        );
      })}
    </div>
  );
};

export default LanguageSwitch;
