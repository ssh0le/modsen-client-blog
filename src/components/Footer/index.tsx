import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { blogName, footerLinks, mediaLinks } from '@/constants';
import { createLocaleLinks } from '@/helpers';
import { LocaleComponentProps } from '@/types';

import LinkList from '../LinkList';
import { Button } from '../UI';

import styles from './styled.module.scss';

const {
  footer,
  top,
  body,
  bottom,
  blogName: blogNameStyle,
  input,
  form,
  message,
  companyInfo,
  media,
} = styles;

const Footer = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'footer');

  return (
    <footer className={footer}>
      <div className={top}>
        <h4 className={blogNameStyle}>{blogName}</h4>
        <LinkList
          lng={lng}
          links={createLocaleLinks(
            footerLinks,
            t('links', { returnObjects: true }),
          )}
        />
      </div>
      <div className={body}>
        <h2 className={message}>{t('heading')}</h2>
        <form className={form}>
          <input className={input} type="text" placeholder={t('placeholder')} />
          <Button styleType="colored">{t('subscribeButton')}</Button>
        </form>
      </div>
      <div>
        <div className={bottom}>
          <div className={companyInfo}>
            <span>Finstreet 118 2561 Fintown</span>
            <br />
            <span>Hello@finsweet.com 020 7993 2905</span>
          </div>
          <div className={media}>
            {mediaLinks.map(({ title, path }, index) => (
              <Link key={index} href={path}>
                <Image src={title} alt={path} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
