import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { defaultReasonText, postText } from '@/constants';
import { createLinkToAbout } from '@/helpers';
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
      <section className={missionBody}>
        <section className={missionItem}>
          <Cap>{t('aboutCap')}</Cap>
          <div className={missionItemBody}>
            <Heading type="h2">{t('aboutHeading')}</Heading>
            <BodyText>{postText}</BodyText>
            <Link href={createLinkToAbout(lng)}>
              <CustomText color="purple" weight="700">
                {tCommon('readMoreButton')}
              </CustomText>
            </Link>
          </div>
        </section>
        <div className={missionItem}>
          <Cap>{t('missionCap')}</Cap>
          <div className={missionItemBody}>
            <Heading type="h3">{t('missionHeading')}</Heading>
            <BodyText>{defaultReasonText}</BodyText>
          </div>
        </div>
      </section>
    </ArticleWrapper>
  );
};
