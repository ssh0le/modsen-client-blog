import Image from 'next/image';

import { useTranslation } from '@/app/i18n';
import Article from '@/components/Article';
import { Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import PostCard from '@/components/PostCard';
import {
  authorsAvatars,
  blogPosts,
  defaultArticleContent,
  images,
} from '@/constants';
import { blogPostStatics } from '@/constants';
import {
  getCategoryIcon,
  getLocaleCategories,
  getPostById,
  getPostFormattedDate,
  getPosts,
} from '@/helpers';
import { BlogPost } from '@/types';
import { CustomText, Heading, List, ListHeading } from '@UI';

import { PostPageProps } from './interfaces';
import styles from './styles.module.scss';

const {
  innerHeading,
  nextReadHeading,
  postblog,
  main,
  postInfo,
  author: authorStyle,
  heading,
  article,
  category: categoryStyle,
  heroImageContainer,
  list,
} = styles;

const { blogPostHero } = images;
const { jonathan } = authorsAvatars;
const { datePrefix } = blogPostStatics;
const nextPostsLength = 3;

export async function generateStaticParams() {
  return blogPosts.map(({ id }) => ({ postId: id }));
}

export const dynamicParams = false;

async function BlogPost({ params: { lng, postId } }: PostPageProps) {
  const { t } = await useTranslation(lng, 'blogPost');
  const { t: tCommon } = await useTranslation(lng, 'common');

  const categoriesMap = getLocaleCategories(
    tCommon('categories', { returnObjects: true }),
  );

  const renderPost = (post: BlogPost) => {
    return <PostCard key={post.title} {...post} />;
  };

  const { title, author, date, id, categoryId } = getPostById(postId);
  const postCategory = categoriesMap.get(categoryId)!;
  const nextPosts = getPosts(nextPostsLength, id);

  return (
    <div className={postblog}>
      <ArticleWrapper contentClass={main}>
        <section className={innerHeading}>
          <section className={authorStyle}>
            <Image placeholder="blur" src={jonathan} alt={author} />

            <section className={postInfo}>
              <Heading type="h3">
                <CustomText color="purple">{author}</CustomText>
              </Heading>
              <CustomText color="medium-gray">
                {datePrefix}
                {getPostFormattedDate(date)}
              </CustomText>
            </section>
          </section>
          <Heading type="h1" className={heading}>
            {title}
          </Heading>
          <div className={categoryStyle}>
            <Image src={getCategoryIcon(categoryId)} alt={postCategory} />
            <Heading type="h4">{postCategory}</Heading>
          </div>
        </section>
        <div className={heroImageContainer}>
          <Image placeholder="blur" src={blogPostHero} alt={author} />
        </div>
        <section className={article}>
          <Article contentBlocks={defaultArticleContent} />
        </section>
      </ArticleWrapper>

      <ArticleWrapper>
        <ListHeading className={nextReadHeading} align="left">
          {t('readNextHeading')}
        </ListHeading>
        <section className={list}>
          <List options={nextPosts} renderItem={renderPost} />
        </section>
      </ArticleWrapper>

      <Invitation lng={lng} />
    </div>
  );
}

export default BlogPost;
