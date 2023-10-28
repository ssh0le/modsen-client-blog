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
import { ListHeading } from '@/components/UI';
import { authors } from '@/constants';
import { logos } from '@/constants/images';
import { LocaleParams } from '@/types';

import { useTranslation } from '../i18n';

import './styles/page.scss';
import styles from './styles/pageStyles.module.scss';

const { sponsors } = styles;

export default async function Home({ params: { lng } }: LocaleParams) {
  const { t } = await useTranslation(lng, 'home');

  return (
    <div className="home flex column">
      <InfinityScroll>
        <HomeHero lng={lng} />

        <FeaturedPosts lng={lng} />

        <Missions lng={lng} />

        <CategoryList title={t('categoriesList')} />

        <Reason lng={lng} />

        <ArticleWrapper>
          <ListHeading>{t('authorsHeading')}</ListHeading>
          <AuthorList authors={authors.slice(0, 4)} />
        </ArticleWrapper>

        <ArticleWrapper contentClass={sponsors}>
          <div>
            <span>{t('sponsorsCap')}</span>
            <h4>{t('sponsorsHeading')}</h4>
          </div>
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt={`logo${index + 1}`} />
          ))}
        </ArticleWrapper>

        <HomeComments lng={lng} />

        <Invitation lng={lng} />
      </InfinityScroll>
    </div>
  );
}
