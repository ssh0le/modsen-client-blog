import { useTranslation } from '@/app/i18n';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { blogEmail, blogPhone, contactStatics, mapConfig } from '@/constants';
import { getLocaleMapMarkers } from '@/helpers';
import { LocaleParams } from '@/types';
import { BodyText, Cap, CustomText, Heading } from '@UI';

import styles from './styles.module.scss';

const {
  content,
  heading,
  contactInfo,
  infoHeading,
  map,
  contact,
  contactInfoColumn,
} = styles;

const Contact = async ({ params: { lng } }: LocaleParams) => {
  const { t } = await useTranslation(lng, 'contact');
  const markers = getLocaleMapMarkers(
    mapConfig.markers,
    t('markerDescription', { returnObjects: true }),
  );
  return (
    <article className={contact}>
      <section className={content}>
        <section className={heading}>
          <Cap>
            <CustomText weight="900">{t('headingCap')}</CustomText>
          </Cap>
          <Heading type="h1">{t('heading')}</Heading>
          <BodyText>{contactStatics.subheading}</BodyText>
        </section>

        <section className={contactInfo}>
          <div className={contactInfoColumn}>
            <div className={infoHeading}>{t('workingHoursHeading')}</div>
            <Heading type="h5">{t('workingHoursDays')}</Heading>
            <Heading type="h5">{t('workingHoursTime')}</Heading>
            <BodyText>{t('workingHoursSupport')}</BodyText>
          </div>

          <div className={contactInfoColumn}>
            <div className={infoHeading}>{t('contactHeading')}</div>
            <Heading type="h5">{blogPhone}</Heading>
            <BodyText>{blogEmail}</BodyText>
          </div>
        </section>

        <ContactForm lng={lng} />
      </section>

      <section className={map}>
        <Map markers={markers} />
      </section>
    </article>
  );
};

export default Contact;
