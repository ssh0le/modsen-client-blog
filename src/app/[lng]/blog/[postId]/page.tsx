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
import { getPostById, getPostFormattedDate, getPosts } from '@/helpers';
import { BlogPost } from '@/types';
import { CustomText, Heading, List, ListHeading } from '@UI';

import { PostPageProps } from './interfaces';
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

const { blogPostHero } = images;
const { jonathan } = authorsAvatars;
const { datePrefix, category } = blogPostStatics;
const nextPostsLength = 3;

export async function generateStaticParams() {
  return blogPosts.map(({ id }) => ({ postId: id }));
}

async function BlogPost({ params: { lng, postId } }: PostPageProps) {
  const renderPost = (post: BlogPost) => {
    return <PostCard key={post.title} {...post} />;
  };

  const { t } = await useTranslation(lng, 'blogPost');

  const { title, author, date, id } = getPostById(postId);
  const nextPosts = getPosts(nextPostsLength, id);

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
                <CustomText color="medium-gray">
                  {datePrefix}
                  {getPostFormattedDate(date)}
                </CustomText>
              </div>
            </div>
            <Heading type="h1" className={heading}>
              {title}
            </Heading>
            <div className={categoryStyle}>
              <Image src={categoriesIcons.startup} alt={category} />
              <Heading type="h4">{category}</Heading>
            </div>
          </div>
          <div>
            <Image src={blogPostHero} alt={author} />
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
              <List options={nextPosts} renderItem={renderPost} />
            </div>
          </div>
        </ArticleWrapper>

        <Invitation lng={lng} />
      </InfinityScroll>
    </div>
  );
}

export default BlogPost;
