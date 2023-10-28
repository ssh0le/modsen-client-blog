import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { defaultReasonText, postText } from '@/constants';
import { LocaleComponentProps } from '@/types';
import { BodyText, Cap, CustomText, Heading, Pattern } from '@UI';

import { ArticleWrapper } from '../../ArticleWrapper';

import styles from './styles.module.scss';

const { wrapper, mission, pattern, missionItem, missionItemBody, missionBody } =
  styles;

export const Missions = async ({ lng }: LocaleComponentProps) => {
  const { t } = await useTranslation(lng, 'home');
  const { t: tCommon } = await useTranslation(lng, 'common');

  return (
    <ArticleWrapper contentClass={mission} wrapperClass={wrapper}>
      <div className={pattern}>
        <Pattern />
      </div>
      <div className={missionBody}>
        <div className={missionItem}>
          <Cap>{t('aboutCap')}</Cap>
          <div className={missionItemBody}>
            <Heading type="h2">{t('aboutHeading')}</Heading>
            <BodyText>{postText}</BodyText>
            <Link href={'#'}>
              <CustomText color="purple" weight="700">
                {tCommon('readMoreButton')}
              </CustomText>
            </Link>
          </div>
        </div>
        <div className={missionItem}>
          <Cap>{t('missionCap')}</Cap>
          <div className={missionItemBody}>
            <Heading type="h3">{t('missionHeading')}</Heading>
            <BodyText>{defaultReasonText}</BodyText>
          </div>
        </div>
      </div>
    </ArticleWrapper>
  );
};
