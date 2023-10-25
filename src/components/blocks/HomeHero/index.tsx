import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import { Button } from '@/components/UI';
import { images } from '@/constants';

import { HomeHeroProps } from './interfaces';
import styles from './styled.module.scss';

const { homeHero } = images;

const { hero, overlay, content, host, display, author, image } = styles;

export const HomeHero = async ({ lng }: HomeHeroProps) => {
  const { t } = await useTranslation(lng, 'home');
  const { t: tCommon } = await useTranslation(lng, 'common');
  return (
    <ArticleWrapper className={hero}>
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
        <div className={display}>
          <span>{t('heading')}</span>
        </div>
        <span>
          By <span className={author}>James West</span> | May 23, 2022
        </span>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <Button styleType="colored">{tCommon('readMoreButton')}</Button>
    </ArticleWrapper>
  );
};
