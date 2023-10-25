import { useTranslation } from '@/app/i18n';
import { ArticleWrapper } from '@/components/blocks/ArticleWrapper';
import BlogPostCard from '@/components/BlogPostCard';
import CategoryCard from '@/components/CategoryCard';
import SearchBar from '@/components/SearchBar';
import Tag from '@/components/Tag';
import { blogPosts, categories, tags } from '@/constants';
import { categoryStatics } from '@/constants';
import { BlogPost, LocaleParams } from '@/types';
import { Cap, DisplayText, List, ListHeading } from '@UI';

import styles from './styles.module.scss';

const {
  wrapper,
  heading,
  content,
  categoryList,
  categoryHeading,
  tagsHeading,
  tagsList,
} = styles;

const { headingMessage } = categoryStatics;

export default async function Category({ params: { lng } }: LocaleParams) {
  const category: string = 'Startup';
  const filteredPosts = blogPosts.filter(({ tag }) => tag === category);

  const { t } = await useTranslation(lng, 'category');
  const renderBlogPost = (post: BlogPost) => (
    <BlogPostCard key={post.title} {...post} />
  );

  return (
    <div className={wrapper}>
      <div className={heading}>
        <DisplayText>{category}</DisplayText>
        <p>{headingMessage}</p>
        <Cap>
          {t('routePrefix')}
          {category}
        </Cap>
      </div>
      <ArticleWrapper>
        <div className={content}>
          <div>
            <List
              options={filteredPosts}
              renderItem={renderBlogPost}
              direction="column"
            />
          </div>
          <aside>
            <SearchBar lng={lng} />
            <ListHeading className={categoryHeading} align="left">
              {t('categoriesHeading')}
            </ListHeading>
            <div className={categoryList}>
              {categories.map((cat, index) => (
                <CategoryCard key={index} name={cat} displayType="minimal" />
              ))}
            </div>
            <ListHeading className={tagsHeading} align="left">
              {t('tagsHeading')}
            </ListHeading>
            <div className={tagsList}>
              {tags.map((tag) => (
                <Tag key={tag} isSelected={tag === category}>
                  <b>{tag}</b>
                </Tag>
              ))}
            </div>
          </aside>
        </div>
      </ArticleWrapper>
    </div>
  );
}
