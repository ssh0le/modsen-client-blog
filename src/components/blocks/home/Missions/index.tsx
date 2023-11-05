import { ArticleWrapper } from '@blocks';
import { useTranslation } from '@i18n/index';
import Link from 'next/link';

import { defaultReasonText, postText } from '@/constants';
import { createLinkToAbout } from '@/helpers';
import { LocaleComponentProps } from '@/types';
import { BodyText, Cap, CustomText, DecorationBar, Heading } from '@UI';

import styles from './styles.module.scss';

const { wrapper, mission, pattern, missionItem, missionItemBody, missionBody } =
  styles;

export const Missions = async ({ language }: LocaleComponentProps) => {
  const { t } = await useTranslation(language, 'home');
  const { t: tCommon } = await useTranslation(language, 'common');

  return (
    <ArticleWrapper contentClass={mission} wrapperClass={wrapper}>
      <div className={pattern}>
        <DecorationBar />
      </div>
      <section className={missionBody}>
        <section className={missionItem}>
          <Cap>{t('aboutCap')}</Cap>
          <div className={missionItemBody}>
            <Heading type="h2">{t('aboutHeading')}</Heading>
            <BodyText>{postText}</BodyText>
            <Link href={createLinkToAbout(language)}>
              <CustomText color="purple" weight="700">
                {tCommon('readMoreButton')}
              </CustomText>
            </Link>
          </div>
        </section>
        <section className={missionItem}>
          <Cap>{t('missionCap')}</Cap>
          <div className={missionItemBody}>
            <Heading type="h3">{t('missionHeading')}</Heading>
            <BodyText>{defaultReasonText}</BodyText>
          </div>
        </section>
      </section>
    </ArticleWrapper>
  );
};
