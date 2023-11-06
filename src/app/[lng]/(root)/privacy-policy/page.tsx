import { useTranslation } from '@i18n/index';

import ArticleBlock from '@/components/Article/ArticleContent';
import { privacyStatics } from '@/constants';
import { LocaleParams } from '@/types';
import { BodyText, CustomText, Heading } from '@UI';

import styles from './styles.module.scss';

const { article, description, heading: headingText } = privacyStatics;
const { heading, descriptionStyle, textWrapper } = styles;

const PrivacyPolicy = async ({ params: { lng: language } }: LocaleParams) => {
  const { t } = await useTranslation(language, 'privacy');
  return (
    <>
      <section className={heading}>
        <Heading type="h1">{t('heading')}</Heading>
        <CustomText>{t('lastUpdate')}</CustomText>
      </section>

      <section className={descriptionStyle}>
        <div className={textWrapper}>
          <Heading type="h1">{headingText}</Heading>
          <BodyText>{description}</BodyText>
          <ArticleBlock heading={article.heading} items={article.items} />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
