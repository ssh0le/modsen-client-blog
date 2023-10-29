import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import AuthorCard from '@/components/AuthorCard';
import { Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import InfinityScroll from '@/components/InfinityScroll';
import ReasonContent from '@/components/ReasonContent';
import { aboutStatics, authors, images } from '@/constants';
import { createLocaleMissions, createLocaleResults } from '@/helpers';
import { Author, LocaleParams } from '@/types';
import {
  BodyText,
  Cap,
  DisplayText,
  Heading,
  ImageDecoration,
  List,
  ListHeading,
  Pattern,
} from '@UI';

import styles from './styles.module.scss';

const {
  about,
  reason,
  headingContainer,
  heading,
  description,
  alt,
  missions,
  result,
  hero,
  mission,
  heroContent,
  results,
  heroImage,
} = styles;

const { mainHeadingMessage, overview, missionVision, reasons } = aboutStatics;

const { reason1, reason2, aboutHero } = images;

export default async function About({ params: { lng } }: LocaleParams) {
  const renderAuthor = (author: Author) => <AuthorCard {...author} />;
  const { t } = await useTranslation(lng, 'about');

  return (
    <div className={about}>
      <InfinityScroll>
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
              <Image src={aboutHero} alt="Reason" />
              <div className={heroContent}>
                <div className={results}>
                  {createLocaleResults(
                    overview,
                    t('results', { returnObjects: true }),
                  ).map(({ heading, subheading }, index) => (
                    <div className={result} key={index}>
                      <DisplayText>{heading}</DisplayText>
                      <span>{subheading}</span>
                    </div>
                  ))}
                </div>
                <Pattern direction="reverse" />
              </div>
            </div>
            <section className={missions}>
              {createLocaleMissions(
                missionVision,
                t('missions', { returnObjects: true }),
              ).map(({ cap, heading, description }, index) => (
                <div className={mission} key={index}>
                  <Cap>{cap}</Cap>
                  <Heading type="h3">{heading}</Heading>
                  <BodyText>{description}</BodyText>
                </div>
              ))}
            </section>
          </section>
        </ArticleWrapper>

        <ArticleWrapper contentClass={reason}>
          <ReasonContent {...reasons[0]} heading={t('reasonHeading1')} />
          <ImageDecoration type="rectangle">
            <Image src={reason1} alt="Our team" />
          </ImageDecoration>
        </ArticleWrapper>

        <ArticleWrapper contentClass={`${reason} ${alt}`}>
          <ImageDecoration type="circle">
            <Image src={reason2} alt="Our team" />
          </ImageDecoration>
          <ReasonContent {...reasons[1]} heading={t('reasonHeading2')} />
        </ArticleWrapper>

        <ArticleWrapper>
          <ListHeading>{t('authorsList')}</ListHeading>
          <List options={authors.slice(0, 8)} renderItem={renderAuthor} />
        </ArticleWrapper>
        <Invitation lng={lng} />
      </InfinityScroll>
    </div>
  );
}
