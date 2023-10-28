import { useTranslation } from '@/app/i18n';
import InfinityScroll from '@/components/InfinityScroll';
import Heading from '@/components/UI/Heading';
import { InputArea } from '@/components/UI/inputFields/InputArea';
import { blogEmail, blogPhone, contactStatics } from '@/constants';
import { LocaleParams } from '@/types';
import { BodyText, Button, Cap, CustomText, InputField, Select } from '@UI';

import styles from './styles.module.scss';

const { content, heading, contactInfo, infoHeading, form, map, contact } =
  styles;

const Contact = async ({ params: { lng } }: LocaleParams) => {
  const { t } = await useTranslation(lng, 'contact');
  return (
    <article className={contact}>
      <InfinityScroll>
        <section className={content}>
          <section className={heading}>
            <Cap>
              <CustomText weight="900">{t('headingCap')}</CustomText>
            </Cap>
            <h1>{t('heading')}</h1>
            <BodyText>{contactStatics.subheading}</BodyText>
          </section>
          <div>
            <section className={contactInfo}>
              <div>
                <div className={infoHeading}>{t('workingHoursHeading')}</div>
                <Heading type="h5">{t('workingHoursDays')}</Heading>
                <Heading type="h5">{t('workingHoursTime')}</Heading>
                <BodyText>{t('workingHoursSupport')}</BodyText>
              </div>
              <div>
                <div className={infoHeading}>{t('contactHeading')}</div>
                <Heading type="h5">{blogPhone}</Heading>
                <BodyText>{blogEmail}</BodyText>
              </div>
            </section>
            <form action="#" className={form}>
              <InputField placeholder={t('formUserName')} />
              <InputField placeholder={t('formUserEmail')} />
              <Select
                placeholder={t('formQuery')}
                options={t('formQueryOptions', { returnObjects: true })}
              />
              <InputArea rows={5} placeholder={t('formMessage')} />
              <Button styleType="colored">{t('sendButtonText')}</Button>
            </form>
          </div>
        </section>
        <section className={map}></section>
      </InfinityScroll>
    </article>
  );
};

export default Contact;
