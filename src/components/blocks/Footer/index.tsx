import { useTranslation } from '@i18n/index';

import LinkList from '@/components/LinkList';
import { blogEmail, blogName, blogPhone, footerLinks } from '@/constants';
import { createLocaleLinks } from '@/helpers';
import { LocaleComponentProps } from '@/types';
import { BodyText, CustomText, Heading, MediaLinkList } from '@UI';

import styles from './styled.module.scss';
import SubscribeForm from './SubscribeForm';

const {
  footer,
  wrapper,
  top,
  body,
  bottom,
  blogName: blogNameStyle,
  companyInfo,
  media,
} = styles;

const Footer = async ({ language }: LocaleComponentProps) => {
  const { t } = await useTranslation(language, 'footer');
  const { t: tCommon } = await useTranslation(language, 'common');

  return (
    <div className={wrapper}>
      <footer className={footer}>
        <section className={top}>
          <Heading type="h4" className={blogNameStyle}>
            {blogName}
          </Heading>
          <LinkList
            language={language}
            links={createLocaleLinks(
              footerLinks,
              t('links', { returnObjects: true }),
            )}
          />
        </section>
        <section className={body}>
          <Heading type="h2">
            <CustomText color="white">{t('heading')}</CustomText>
          </Heading>
          <SubscribeForm language={language} />
        </section>
        <section className={bottom}>
          <div className={companyInfo}>
            <BodyText>
              <CustomText color="white">{tCommon('adress')}</CustomText>
            </BodyText>
            <BodyText>
              <CustomText color="white">
                {blogEmail} {blogPhone}
              </CustomText>
            </BodyText>
          </div>
          <MediaLinkList className={media} />
        </section>
      </footer>
    </div>
  );
};

export default Footer;
