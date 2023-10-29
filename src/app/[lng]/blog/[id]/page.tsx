import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import Article from '@/components/Article';
import { Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import InfinityScroll from '@/components/InfinityScroll';
import PostCard from '@/components/PostCard';
import {
  authorsAvatars,
  blogPosts,
  categoriesIcons,
  defaultArticleContent,
  images,
} from '@/constants';
import { blogPostStatics } from '@/constants';
import { BlogPost, LocaleParams } from '@/types';
import { CustomText, Heading, List, ListHeading } from '@UI';

import styles from './styles.module.scss';

const {
  innerHeading,
  nextReadHeading,
  postblog,
  main,
  author: authorStyle,
  heading,
  article,
  category: categoryStyle,
  list,
} = styles;

const posts = blogPosts.slice(0, 3);

const { blogPostHero } = images;
const { jonathan } = authorsAvatars;
const { author, postDate, category } = blogPostStatics;

async function BlogPost({ params: { lng } }: LocaleParams) {
  const renderPost = (post: BlogPost) => {
    return <PostCard key={post.title} {...post} />;
  };

  const { t } = await useTranslation(lng, 'blogPost');

  return (
    <div className={postblog}>
      <InfinityScroll>
        <ArticleWrapper contentClass={main}>
          <div className={innerHeading}>
            <div className={authorStyle}>
              <div>
                <Image src={jonathan} alt={author} />
              </div>
              <div>
                <Heading type="h3">
                  <CustomText color="purple">{author}</CustomText>
                </Heading>
                <CustomText color="medium-gray">{postDate}</CustomText>
              </div>
            </div>
            <Heading type="h1" className={heading}>
              {t('heading')}
            </Heading>
            <div className={categoryStyle}>
              <Image src={categoriesIcons.startup} alt={'Startup'} />
              <Heading type="h4">{category}</Heading>
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
      </InfinityScroll>
    </div>
  );
}

export default BlogPost;
