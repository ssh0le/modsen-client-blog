import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import AuthorCard from '@/components/AuthorCard';
import { Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import ReasonContent from '@/components/ReasonContent';
import { aboutStatics, authors, images } from '@/constants';
import { createLocaleMissions, createLocaleResults } from '@/helpers';
import { Author, LocaleParams } from '@/types';
import { Cap, DisplayText, ImageDecoration, List, ListHeading } from '@UI';

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
  pattern,
  heroImage,
  left,
  right,
} = styles;

const { mainHeadingMessage, overview, missionVision, reasons } = aboutStatics;

const { reason1, reason2, aboutHero } = images;

export default async function About({ params: { lng } }: LocaleParams) {
  const renderAuthor = (author: Author) => <AuthorCard {...author} />;
  const { t } = await useTranslation(lng, 'about');

  return (
    <div className={about}>
      <ArticleWrapper>
        <div className={headingContainer}>
          <div className={heading}>
            <Cap>{t('headingCap')}</Cap>
            <h1>{t('heading')}</h1>
          </div>
          <p className={description}>{mainHeadingMessage}</p>
        </div>
        <div className={hero}>
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
              <div className={pattern}>
                <div className={left}></div>
                <div className={right}></div>
              </div>
            </div>
          </div>
          <div className={missions}>
            {createLocaleMissions(
              missionVision,
              t('missions', { returnObjects: true }),
            ).map(({ cap, heading, description }, index) => (
              <div className={mission} key={index}>
                <Cap>{cap}</Cap>
                <h3>{heading}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </ArticleWrapper>

      <ArticleWrapper className={reason}>
        <ReasonContent {...reasons[0]} heading={t('reasonHeading1')} />
        <ImageDecoration type="rectangle">
          <Image src={reason1} alt="Out team" />
        </ImageDecoration>
      </ArticleWrapper>

      <ArticleWrapper className={`${reason} ${alt}`}>
        <ImageDecoration type="circle">
          <Image src={reason2} alt="Our team" />
        </ImageDecoration>
        <ReasonContent {...reasons[1]} heading={t('reasonHeading2')} />
      </ArticleWrapper>

      <ArticleWrapper>
        <ListHeading>{t('authorsList')}</ListHeading>
        <List options={authors} renderItem={renderAuthor} />
      </ArticleWrapper>
      <Invitation lng={lng} />
    </div>
  );
}
