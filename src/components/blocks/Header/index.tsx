'use client';

import { useState } from 'react';

import { useTranslation } from '@/app/i18n/client';
import LinkList from '@/components/LinkList';
import Modal from '@/components/VideoModal';
import { blogName, headerLinks } from '@/constants';
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

export const Header = ({ lng }: LocaleComponentProps) => {
  const { t } = useTranslation(lng, 'header');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <section className={`${wrapper} ${isOpen ? active : ''}`}>
      <header className={header}>
        <Heading type="h4" className={blogNameStyle}>
          {blogName}
        </Heading>
        <div className={controls}>
          <nav>
            <LinkList
              lng={lng}
              links={createLocaleLinks(
                headerLinks,
                t('links', { returnObjects: true }),
              )}
            />
          </nav>
          <Modal lng={lng} />
          <LanguageSwitcher lng={lng} />
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
