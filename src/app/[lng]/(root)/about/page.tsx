import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import AboutReason from '@/components/AboutReason';
import AuthorCard from '@/components/AuthorCard';
import { Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import {
  aboutStatics,
  altTexts,
  authors,
  images,
  reasonImages,
} from '@/constants';
import { createLocaleMissions, createLocaleResults } from '@/helpers';
import { Author, LocaleParams } from '@/types';
import {
  BodyText,
  Cap,
  DecorationBar,
  DisplayText,
  Heading,
  List,
  ListHeading,
} from '@UI';

import styles from './styles.module.scss';

const {
  about,
  headingContainer,
  heading,
  description,
  missions: missionStyles,
  result,
  hero,
  mission,
  heroContent,
  results,
  heroImage,
  pattern,
} = styles;

const { mainHeadingMessage, overview, missionVision, reasons } = aboutStatics;

const { aboutHero } = images;

export default async function About({
  params: { lng: language },
}: LocaleParams) {
  const renderAuthor = (author: Author) => (
    <AuthorCard key={author.id} {...author} />
  );
  const { t } = await useTranslation(language, 'about');
  const { t: tCommon } = await useTranslation(language, 'common');

  const blogResults = createLocaleResults(
    overview,
    t('results', { returnObjects: true }),
  );

  const missions = createLocaleMissions(
    missionVision,
    t('missions', { returnObjects: true }),
  );

  const misionSubheading = tCommon('commonDescription');

  return (
    <div className={about}>
      <ArticleWrapper>
        <section className={headingContainer}>
          <section className={heading}>
            <Cap>{t('headingCap')}</Cap>
            <Heading type="h1">{t('heading')}</Heading>
          </section>
          <section className={description}>
            <BodyText>{mainHeadingMessage}</BodyText>
          </section>
        </section>

        <section className={hero}>
          <section className={heroImage}>
            <Image
              placeholder="blur"
              src={aboutHero}
              alt={altTexts.aboutHero}
            />
            <section className={heroContent}>
              <section className={results}>
                {blogResults.map(({ heading, subheading }, index) => (
                  <div className={result} key={index}>
                    <DisplayText>{heading}</DisplayText>
                    <BodyText>{subheading}</BodyText>
                  </div>
                ))}
              </section>
              <div className={pattern}>
                <DecorationBar direction="reverse" />
              </div>
            </section>
          </section>

          <section className={missionStyles}>
            {missions.map(({ cap, heading, description }, index) => (
              <div className={mission} key={index}>
                <Cap>{cap}</Cap>
                <Heading type="h3">{heading}</Heading>
                <BodyText>{description}</BodyText>
              </div>
            ))}
          </section>
        </section>
      </ArticleWrapper>

      {reasons.map((reason, index) => (
        <AboutReason
          key={reason.heading}
          image={reasonImages[index]}
          {...reason}
          heading={t('reasonHeading1')}
          subheading={misionSubheading}
          isReversed={index % 2 === 0}
        />
      ))}

      <ArticleWrapper>
        <ListHeading>{t('authorsList')}</ListHeading>
        <List options={authors.slice(0, 8)} renderItem={renderAuthor} />
      </ArticleWrapper>

      <Invitation language={language} />
    </div>
  );
}
