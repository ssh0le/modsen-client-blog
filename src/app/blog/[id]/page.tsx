import Image from 'next/image';

import { Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import PostCard from '@/components/PostCard';
import {
  authorsAvatars,
  blogPosts,
  categoriesIcons,
  images,
  staticHeding,
  staticList,
  staticParagraph,
} from '@/constants';
import { BlogPost } from '@/types';
import { CustomText, List, ListHeading } from '@UI';

import styles from './styles.module.scss';

const { innerHeading, postblog, main, author, heading, article, list } = styles;

const posts = blogPosts.slice(0, 3);

const { blogPostHero } = images;
const { jonathan } = authorsAvatars;

export default function BlogPost() {
  const renderPost = (post: BlogPost) => {
    return <PostCard key={post.title} {...post} />;
  };

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
          <h1 className={heading}>
            Step-by-step guide to choosing great font pairs
          </h1>
          <div>
            <Image src={categoriesIcons.startup} alt={'Startup'} />
            <h4>Startup</h4>
          </div>
        </div>
        <div>
          <Image src={blogPostHero} alt={'Andrew'} />
        </div>
        <div className={article}>
          <h2>{staticHeding}</h2>
          <p>{staticParagraph}</p>
          <h2>{staticHeding}</h2>
          <p>{staticParagraph}</p>
          <p>{staticParagraph}</p>
          <ul>
            {staticList.map((listItem, key) => (
              <li key={key}>
                <h2>
                  <CustomText>{listItem}</CustomText>
                </h2>
              </li>
            ))}
          </ul>
          <p>{staticParagraph}</p>
          <h2>{staticHeding}</h2>
          <p>{staticParagraph}</p>
        </div>
      </ArticleWrapper>
      <ArticleWrapper>
        <div>
          <ListHeading align="left">What to read next</ListHeading>
          <div className={list}>
            <List options={posts} renderItem={renderPost} />
          </div>
        </div>
      </ArticleWrapper>
      <Invitation />
    </div>
  );
}
