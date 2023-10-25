'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { languages } from '@/app/i18n/settings';

import styles from './styles.module.scss';

const { wrapper, active, delimeter } = styles;

const LanguageSwitch = ({ lng }: { lng: string }) => {
  const pathname = usePathname().slice(3);
  return (
    <div className={wrapper}>
      {languages.map((l, index) => {
        return (
          <>
            {index > 0 && <div key={l} className={delimeter}></div>}
            <span key={l} className={`${lng === l ? active : ''}`}>
              <Link href={`/${l}/${pathname}`}>{l}</Link>
            </span>
          </>
        );
      })}
    </div>
  );
};

export default LanguageSwitch;
