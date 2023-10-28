import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import { defaultReasonText, images } from '@/constants';
import { LocaleComponentProps } from '@/types';
import { BodyText, Button, Cap, Heading } from '@UI';

import { ArticleWrapper } from '../../ArticleWrapper';

import styles from './styles.module.scss';

const { reason } = images;
const { reason: reasonStyle, message, messageBody, imageContainer } = styles;

export const Reason = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'home');

  return (
    <ArticleWrapper contentClass={reasonStyle}>
      <div className={imageContainer}>
        <Image src={reason} alt="Why we started" />
      </div>
      <div className={message}>
        <div className={messageBody}>
          <Cap>{t('blogReasonCap')}</Cap>
          <Heading type="h1">{t('blogReasonHeading')}</Heading>
          <BodyText>{defaultReasonText}</BodyText>
          <Button styleType="colored">{t('blogReasonButton')}</Button>
        </div>
      </div>
    </ArticleWrapper>
  );
};
