import { useTranslation } from '@/app/i18n';
import { Button } from '@/components/UI';

import { ArticleWrapper } from '../ArticleWrapper';

import { InvitationProps } from './interfaces';
import styles from './styles.module.scss';

export const Invitation = async ({ lng }: InvitationProps) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <ArticleWrapper className={styles.invitation}>
      <div>
        <h2>{t('joinInvitation')}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Button styleType="colored">{t('joinInvitationButton')}</Button>
      </div>
    </ArticleWrapper>
  );
};
