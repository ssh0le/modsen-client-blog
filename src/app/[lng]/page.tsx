import { CategoryList, HomeComments, HomeHero, Invitation } from '@blocks';
import Image from 'next/image';
import Link from 'next/link';

import AuthorAndDate from '@/components/AuthorAndDate';
import AuthorCard from '@/components/AuthorCard';
import { Button, Cap } from '@/components/UI';
import { authors } from '@/constants';
import { images, logos } from '@/constants/images';
import { LocaleParams, Post } from '@/types';

import { useTranslation } from '../i18n';

import './styles/page.scss';

const { post1, reason } = images;

const post: Post = {
  author: 'John Deo',
  date: new Date(2021, 7, 23),
  title: '8 Figma design systems that you can download for free today.',
};

const posts = [post, post, post, post];

export default async function Home({ params: { lng } }: LocaleParams) {
  const { t } = await useTranslation(lng, 'home');
  const { t: tCommon } = await useTranslation(lng, 'common');

  return (
    <div className="home flex column">
      <HomeHero lng={lng} />
      <section className="posts flex">
        <div className="selected-post">
          <h2>{t('recommendedPostHeading')}</h2>
          <div className="selected-post-body flex column">
            <Image src={post1} alt="Post" />
            <div className="selected-post-info flex column">
              <AuthorAndDate author="John Doe" date={new Date()} />
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <Button styleType="colored">{tCommon('readMoreButton')}</Button>
          </div>
        </div>
        <div className="all-posts flex column">
          <div className="all-posts-heading flex center">
            <h2>{t('allPosts')}</h2>
            <div>
              <span className="colored">{t('showAll')}</span>
            </div>
          </div>
          <ul className="post-list flex column">
            {posts.map(({ author, date, title }, index) => (
              <li key={index} className="post-list-item flex column">
                <div className="w500">
                  {tCommon('authorPrefix')}
                  <span className="colored">{author}</span> |{' '}
                  {date.toLocaleString()}
                </div>
                <h4>{title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mission">
        <div className="top flex">
          <div className="middle"></div>
          <div className="end"></div>
        </div>
        <div className="mission-body flex">
          <div className="mission-item">
            <Cap>{t('aboutCap')}</Cap>
            <div className="mission-item-body flex">
              <h2>{t('aboutHeading')}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href={'#'} className="colored w700">
                {tCommon('readMoreButton')}
              </Link>
            </div>
          </div>
          <div className="mission-item">
            <Cap>{t('missionCap')}</Cap>
            <div className="mission-item-body">
              <h3>{t('missionHeading')}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CategoryList title={t('categoriesList')} />
      <section className="reason">
        <div className="image-container">
          <Image src={reason} alt="Why we started" />
        </div>
        <div className="message">
          <div className="message-body">
            <Cap>{t('blogReasonCap')}</Cap>
            <h1>{t('blogReasonHeading')}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Button styleType="colored">{t('blogReasonButton')}</Button>
          </div>
        </div>
      </section>
      <section className="authors">
        <h2>{t('authorsHeading')}</h2>
        <div className="flex">
          {authors.slice(0, 4).map(({ name, photo, position }) => (
            <AuthorCard
              key={name}
              name={name}
              photo={photo}
              position={position}
            />
          ))}
        </div>
      </section>
      <section className={'sponsors'}>
        <div>
          <span>{t('sponsorsCap')}</span>
          <h4>{t('sponsorsHeading')}</h4>
        </div>
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`logo${index + 1}`} />
        ))}
      </section>

      <section className="testimonials">
        <HomeComments lng={lng} />
      </section>

      <Invitation lng={lng} />
    </div>
  );
}
