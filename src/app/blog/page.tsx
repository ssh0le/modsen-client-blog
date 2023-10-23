import Image from 'next/image';

import { CategoryList, Invitation } from '@/components/blocks';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import { images } from '@/constants';

const { blogHero } = images;

export default function Home() {
  return (
    <div className="home flex column">
      <ArticleWrapper>
        <div></div>
        <div>
          <Image src={blogHero} alt="Blog hero image" />
        </div>
      </ArticleWrapper>
      <CategoryList title="All categories" headingAlign="left" />
      <Invitation />
    </div>
  );
}
