import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import { AuthorAndDate, BodyText, Button, DisplayText } from '@/components/UI';
import { images, routePathes } from '@/constants';
import { getHomePost } from '@/helpers';

import { HomeHeroProps } from './interfaces';
import styles from './styled.module.scss';

const { homeHero } = images;

const { hero, overlay, content, host, image } = styles;

export const HomeHero = async ({ lng }: HomeHeroProps) => {
  const { t } = await useTranslation(lng, 'home');
  const { t: tCommon } = await useTranslation(lng, 'common');
  const { description, author, date, id, title } = getHomePost();

  return (
    <ArticleWrapper contentClass={hero}>
      <div className={image}>
        <div className={overlay}></div>
        <Image src={homeHero} alt="Home hero" />
      </div>
      <div className={content}>
        <div>
          <span className={host}>
            {t('cap')}
            <span>startup</span>
          </span>
        </div>
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
      <Link href={`${lng}/${routePathes.blog}/${id}`}>
        <Button styleType="colored">{tCommon('readMoreButton')}</Button>
      </Link>
    </ArticleWrapper>
  );
};
