import { useTranslation } from '@/app/i18n';
import ArticleBlock from '@/components/Article/ArticleContent';
import { BodyText, CustomText } from '@/components/UI';
import Heading from '@/components/UI/Heading';
import { privacyStatics } from '@/constants';
import { LocaleParams } from '@/types';

import styles from './styles.module.scss';

const { article, description, heading: headingText } = privacyStatics;
const { heading, descriptionStyle } = styles;

const PrivacyPolicy = async ({ params: { lng } }: LocaleParams) => {
  const { t } = await useTranslation(lng, 'privacy');
  return (
    <div>
      <section className={heading}>
        <h1>{t('heading')}</h1>
        <span>
          <CustomText>{t('lastUpdate')}</CustomText>
        </span>
      </section>
      <section className={descriptionStyle}>
        <div>
          <Heading type="h1">{headingText}</Heading>
          <BodyText>{description}</BodyText>
          <ArticleBlock heading={article.heading} items={article.items} />
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
