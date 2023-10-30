import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { BodyText, Button, Heading } from '@/components/UI';
import { defaultSubheading, routePathes } from '@/constants';

import { ArticleWrapper } from '../ArticleWrapper';

import { InvitationProps } from './interfaces';
import styles from './styles.module.scss';

export const Invitation = async ({ lng }: InvitationProps) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <ArticleWrapper contentClass={styles.invitation}>
      <div>
        <Heading type="h2">{t('joinInvitation')}</Heading>
        <BodyText>{defaultSubheading}</BodyText>
        <Link href={`/${lng}${routePathes.contact}`}>
          <Button styleType="colored">{t('joinInvitationButton')}</Button>
        </Link>
      </div>
    </ArticleWrapper>
  );
};
