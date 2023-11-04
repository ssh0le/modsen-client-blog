import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import {
  AuthorAndDate,
  BodyText,
  Button,
  CustomText,
  DisplayText,
} from '@/components/UI';
import { altTexts, images, routePathes } from '@/constants';
import { getHomePost, getLocaleCategories } from '@/helpers';

import { HomeHeroProps } from './interfaces';
import styles from './styled.module.scss';

const { homeHero } = images;

const { hero, overlay, content, host, image } = styles;

export const HomeHero = async ({ language }: HomeHeroProps) => {
  const { t } = await useTranslation(language, 'home');
  const { t: tCommon } = await useTranslation(language, 'common');
  const { description, author, date, id, title, categoryId } = getHomePost();
  const categoriesMap = getLocaleCategories(
    tCommon('categories', { returnObjects: true }),
  );

  return (
    <ArticleWrapper contentClass={hero}>
      <div className={image}>
        <div className={overlay}></div>
        <Image placeholder="blur" src={homeHero} alt={altTexts.homeHero} />
      </div>
      <div className={content}>
        <span className={host}>
          {t('cap')}
          <CustomText color="white" weight="900">
            {categoriesMap.get(categoryId)}
          </CustomText>
        </span>
        <DisplayText>{title}</DisplayText>
        <AuthorAndDate
          color="white"
          author={author}
          date={date}
          authorColor="yellow"
          size="16"
        />
        <BodyText>{description}</BodyText>
      </div>
      <Link href={`${language}/${routePathes.blog}/${id}`}>
        <Button styleType="colored">{tCommon('readMoreButton')}</Button>
      </Link>
    </ArticleWrapper>
  );
};
