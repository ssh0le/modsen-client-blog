import {
  ArticleWrapper,
  AuthorList,
  CategoryList,
  FeaturedPosts,
  HomeComments,
  HomeHero,
  Invitation,
  Missions,
  Reason,
} from '@blocks';
import { useTranslation } from '@i18n/index';
import Image from 'next/image';

import InfinityScroll from '@/components/InfinityScroll';
import { altTexts, authors, logos } from '@/constants';
import { LocaleParams } from '@/types';
import { BodyText, Heading, ListHeading } from '@UI';

import styles from './pageStyles.module.scss';

const { sponsors, home, title } = styles;

export default async function Home({
  params: { lng: language },
}: LocaleParams) {
  const { t } = await useTranslation(language, 'home');

  return (
    <div className={home}>
      <InfinityScroll>
        <HomeHero language={language} />

        <FeaturedPosts language={language} />

        <Missions language={language} />

        <CategoryList title={t('categoriesList')} locale={language} />

        <Reason language={language} />

        <ArticleWrapper>
          <ListHeading>{t('authorsHeading')}</ListHeading>
          <AuthorList authors={authors.slice(0, 4)} />
        </ArticleWrapper>

        <ArticleWrapper contentClass={sponsors}>
          <div className={title}>
            <BodyText type="body2">{t('sponsorsCap')}</BodyText>
            <Heading type="h4">{t('sponsorsHeading')}</Heading>
          </div>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`${altTexts.homeSponsorPrfix}${index + 1}`}
            />
          ))}
        </ArticleWrapper>

        <HomeComments language={language} />

        <Invitation language={language} />
      </InfinityScroll>
    </div>
  );
}
