import { ArticleWrapper } from '@blocks';
import { useTranslation } from '@i18n/index';
import Link from 'next/link';

import { routePathes } from '@/constants';
import { BodyText, Button, Heading } from '@UI';

import { InvitationProps } from './interfaces';
import styles from './styles.module.scss';

export const Invitation = async ({ language }: InvitationProps) => {
  const { t } = await useTranslation(language, 'common');

  return (
    <ArticleWrapper contentClass={styles.invitation}>
      <Heading type="h2">{t('joinInvitation')}</Heading>
      <BodyText>{t('commonDescription')}</BodyText>
      <Link href={`/${language}${routePathes.contact}`}>
        <Button styleType="colored">{t('joinInvitationButton')}</Button>
      </Link>
    </ArticleWrapper>
  );
};
