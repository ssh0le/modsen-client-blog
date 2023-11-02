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
  DisplayText,
  Heading,
  List,
  ListHeading,
  Pattern,
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

export default async function About({ params: { lng } }: LocaleParams) {
  const renderAuthor = (author: Author) => (
    <AuthorCard key={author.id} {...author} />
  );
  const { t } = await useTranslation(lng, 'about');

  const blogResults = createLocaleResults(
    overview,
    t('results', { returnObjects: true }),
  );

  const missions = createLocaleMissions(
    missionVision,
    t('missions', { returnObjects: true }),
  );

  return (
    <div className={about}>
      <ArticleWrapper>
        <section className={headingContainer}>
          <div className={heading}>
            <Cap>{t('headingCap')}</Cap>
            <Heading type="h1">{t('heading')}</Heading>
          </div>
          <div className={description}>
            <BodyText>{mainHeadingMessage}</BodyText>
          </div>
        </section>
        <section className={hero}>
          <div className={heroImage}>
            <Image
              placeholder="blur"
              src={aboutHero}
              alt={altTexts.aboutHero}
            />
            <section className={heroContent}>
              <div className={results}>
                {blogResults.map(({ heading, subheading }, index) => (
                  <div className={result} key={index}>
                    <DisplayText>{heading}</DisplayText>
                    <BodyText>{subheading}</BodyText>
                  </div>
                ))}
              </div>
              <div className={pattern}>
                <Pattern direction="reverse" />
              </div>
            </section>
          </div>

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
          isReversed={index % 2 === 0}
        />
      ))}

      <ArticleWrapper>
        <ListHeading>{t('authorsList')}</ListHeading>
        <List options={authors.slice(0, 8)} renderItem={renderAuthor} />
      </ArticleWrapper>

      <Invitation lng={lng} />
    </div>
  );
}
