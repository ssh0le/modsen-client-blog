import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import Article from '@/components/Article';
import { Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import PostCard from '@/components/PostCard';
import {
  authorsAvatars,
  blogPosts,
  categoriesIcons,
  defaultArticleContent,
  images,
} from '@/constants';
import { BlogPost, LocaleParams } from '@/types';
import { CustomText, List, ListHeading } from '@UI';

import styles from './styles.module.scss';

const {
  innerHeading,
  nextReadHeading,
  postblog,
  main,
  author,
  heading,
  article,
  category,
  list,
} = styles;

const posts = blogPosts.slice(0, 3);

const { blogPostHero } = images;
const { jonathan } = authorsAvatars;

export default async function BlogPost({ params: { lng } }: LocaleParams) {
  const renderPost = (post: BlogPost) => {
    return <PostCard key={post.title} {...post} />;
  };

  const { t } = await useTranslation(lng, 'blogPost');

  return (
    <div className={postblog}>
      <ArticleWrapper className={main}>
        <div className={innerHeading}>
          <div className={author}>
            <div>
              <Image src={jonathan} alt={'Andrew'} />
            </div>
            <div>
              <h3>
                <CustomText color="purple">Andrew Jonson</CustomText>
              </h3>
              <CustomText color="medium-gray">
                Posted on 27th January 2022
              </CustomText>
            </div>
          </div>
          <h1 className={heading}>{t('heading')}</h1>
          <div className={category}>
            <Image src={categoriesIcons.startup} alt={'Startup'} />
            <h4>Startup</h4>
          </div>
        </div>
        <div>
          <Image src={blogPostHero} alt={'Andrew'} />
        </div>
        <div className={article}>
          <Article contentBlocks={defaultArticleContent} />
        </div>
      </ArticleWrapper>
      <ArticleWrapper>
        <div>
          <ListHeading className={nextReadHeading} align="left">
            {t('readNextHeading')}
          </ListHeading>
          <div className={list}>
            <List options={posts} renderItem={renderPost} />
          </div>
        </div>
      </ArticleWrapper>
      <Invitation lng={lng} />
    </div>
  );
}
