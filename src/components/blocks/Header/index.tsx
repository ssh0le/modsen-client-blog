'use client';

import { useTranslation } from '@i18n/client';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import LinkList from '@/components/LinkList';
import Modal from '@/components/VideoModal';
import { blogName, headerLinks, routePathes } from '@/constants';
import { createLocaleLinks } from '@/helpers';
import { LocaleComponentProps } from '@/types';
import { CustomText, Heading } from '@UI';

import LanguageSwitcher from './LanguageSwitch';
import styles from './styled.module.scss';

const {
  header,
  blogName: blogNameStyle,
  controls,
  active,
  wrapper,
  backdrop,
  burgerBadge,
} = styles;

export const Header = ({ language }: LocaleComponentProps) => {
  const { t } = useTranslation(language, 'header');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <section className={`${wrapper} ${isOpen ? active : ''}`}>
      <header className={header}>
        <Link href={routePathes.home}>
          <Heading type="h4" className={blogNameStyle}>
            {blogName}
          </Heading>
        </Link>
        <div className={controls}>
          <nav>
            <LinkList
              language={language}
              links={createLocaleLinks(
                headerLinks,
                t('links', { returnObjects: true }),
              )}
            />
          </nav>
          <Modal language={language} />
          <LanguageSwitcher language={language} />
        </div>
      </header>
      <div className={burgerBadge} onClick={toggleMenu}>
        <CustomText color="yellow">☰</CustomText>
      </div>
      <div
        onClick={toggleMenu}
        className={`${backdrop} ${isOpen ? active : ''}`}
      ></div>
    </section>
  );
};
