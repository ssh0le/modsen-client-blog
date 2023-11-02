import { useTranslation } from '@/app/i18n';
import ArticleBlock from '@/components/Article/ArticleContent';
import { BodyText, CustomText, Heading } from '@/components/UI';
import { privacyStatics } from '@/constants';
import { LocaleParams } from '@/types';

import styles from './styles.module.scss';

const { article, description, heading: headingText } = privacyStatics;
const { heading, descriptionStyle, textWrapper } = styles;

const PrivacyPolicy = async ({ params: { lng } }: LocaleParams) => {
  const { t } = await useTranslation(lng, 'privacy');
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
