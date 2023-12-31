import { useTranslation } from '@i18n/index';
import Image from 'next/image';
import Link from 'next/link';

import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import { altTexts, homeCap, images, routePathes } from '@/constants';
import { getCategoryName, getHomePost } from '@/helpers';
import { AuthorAndDate, BodyText, Button, CustomText, DisplayText } from '@UI';

import { HomeHeroProps } from './interfaces';
import styles from './styled.module.scss';

const { homeHero } = images;

const { hero, overlay, content, host, image } = styles;

export const HomeHero = async ({ language }: HomeHeroProps) => {
  const { t: tCommon } = await useTranslation(language, 'common');
  const { description, author, date, id, title, categoryId } = getHomePost();

  return (
    <ArticleWrapper contentClass={hero}>
      <div className={image}>
        <div className={overlay}></div>
        <Image placeholder="blur" src={homeHero} alt={altTexts.homeHero} />
      </div>
      <div className={content}>
        <span className={host}>
          {homeCap}
          <CustomText color="white" weight="900">
            {getCategoryName(categoryId)}
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
