import {
  CategoryList,
  FeaturedPosts,
  HomeComments,
  HomeHero,
  Invitation,
  Missions,
  Reason,
} from '@blocks';
import { AuthorList } from '@blocks';
import Image from 'next/image';

import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import InfinityScroll from '@/components/InfinityScroll';
import { BodyText, Heading, ListHeading } from '@/components/UI';
import { altTexts, authors } from '@/constants';
import { logos } from '@/constants/images';
import { LocaleParams } from '@/types';

import { useTranslation } from '../../i18n';

import styles from './pageStyles.module.scss';

const { sponsors, home, title } = styles;

export default async function Home({ params: { lng } }: LocaleParams) {
  const { t } = await useTranslation(lng, 'home');

  return (
    <div className={home}>
      <InfinityScroll>
        <HomeHero lng={lng} />

        <FeaturedPosts lng={lng} />

        <Missions lng={lng} />

        <CategoryList title={t('categoriesList')} locale={lng} />

        <Reason lng={lng} />

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

        <HomeComments lng={lng} />

        <Invitation lng={lng} />
      </InfinityScroll>
    </div>
  );
}
