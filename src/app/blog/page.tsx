import Image from 'next/image';

import { CategoryList, Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import BlogPost from '@/components/BlogPost';
import { blogPosts, images } from '@/constants';
import { Button, Cap, CustomText, ListHeading } from '@UI';

import styles from './styles.module.scss';

const {
  message,
  content,
  hero,
  blog,
  listHeading,
  blogposts,
  controlInactive,
  blogpostsControls,
  controlsContainer,
} = styles;
const { blogHero } = images;

export default function Home() {
  return (
    <div className={blog}>
      <ArticleWrapper className={hero}>
        <div className={content}>
          <Cap>Featured Post</Cap>
          <div className={message}>
            <h2>Step-by-step guide to choosing great font pairs</h2>
            <CustomText weight="500" size="14">
              By <CustomText color="purple">James West</CustomText> | May 23,
              2022
            </CustomText>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <Button styleType="colored">Read More &gt;</Button>
        </div>
        <div>
          <Image src={blogHero} alt="Blog hero image" />
        </div>
      </ArticleWrapper>
      <ArticleWrapper>
        <div className={blogposts}>
          <ListHeading className={listHeading} align="left">
            All posts
          </ListHeading>
          {blogPosts.map((blogpost, key) => (
            <BlogPost key={key} {...blogpost} />
          ))}
        </div>
        <div className={blogpostsControls}>
          <div className={controlsContainer}>
            <h2 className={controlInactive}>&lt; Prev</h2>
            <h4>Next &gt;</h4>
          </div>
        </div>
      </ArticleWrapper>
      <CategoryList title="All categories" headingAlign="left" />
      <Invitation />
    </div>
  );
}
