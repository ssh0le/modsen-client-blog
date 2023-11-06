import { ArticleWrapper } from '@blocks';
import { useTranslation } from '@i18n/index';
import Image from 'next/image';
import Link from 'next/link';

import { altTexts, defaultReasonText, images } from '@/constants';
import { createLinkToAbout } from '@/helpers';
import { LocaleComponentProps } from '@/types';
import { BodyText, Button, Cap, Heading } from '@UI';

import styles from './styles.module.scss';

const { reason } = images;
const { reason: reasonStyle, message, messageBody, imageContainer } = styles;

export const Reason = async ({ language }: LocaleComponentProps) => {
  const { t } = await useTranslation(language, 'home');

  return (
    <ArticleWrapper contentClass={reasonStyle}>
      <div className={imageContainer}>
        <Image placeholder="blur" src={reason} alt={altTexts.homeReason} />
      </div>
      <section className={message}>
        <div className={messageBody}>
          <Cap>{t('blogReasonCap')}</Cap>
          <Heading type="h1">{t('blogReasonHeading')}</Heading>
          <BodyText>{defaultReasonText}</BodyText>
          <Link href={createLinkToAbout(language)}>
            <Button styleType="colored">{t('blogReasonButton')}</Button>
          </Link>
        </div>
      </section>
    </ArticleWrapper>
  );
};
