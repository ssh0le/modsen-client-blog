'use client';

import Link from 'next/link';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { useTranslation } from '@/app/i18n/client';
import { blogPosts, tags } from '@/constants';
import { createLinkToCategory, getLocaleCategories } from '@/helpers';
import { searchTags } from '@/helpers/searchTags';
import { BlogPost, Category, Tag as ITag } from '@/types';

import BlogPostCard from '../BlogPostCard';
import CategoryCard from '../CategoryCard';
import Tag from '../Tag';
import { CustomText, List, ListHeading } from '../UI';

import DropDown from './DropDown';
import { PostSearchProps } from './interfaces';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import styles from './styles.module.scss';

const {
  content,
  categoryList,
  categoryHeading,
  categoryWrapper,
  tagsWrapper,
  tagsHeading,
  search,
  resultsStyle,
  tagsList,
  noPosts,
} = styles;

const PostSearch = ({ lng, categoryId }: PostSearchProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const [showResult, setShowResults] = useState<boolean>(false);
  const { t } = useTranslation(lng, 'category');
  const { t: tCommon } = useTranslation(lng, 'common');

  useEffect(() => {
    const hideResults = () => {
      setShowResults(false);
    };

    document.addEventListener('click', hideResults);

    return () => document.removeEventListener('click', hideResults);
  }, []);

  const filteredByCategoryPosts = useMemo(
    () =>
      blogPosts.filter(
        ({ categoryId: postCategoryId }) => postCategoryId === categoryId,
      ),
    [categoryId],
  );

  const filteredByTagsPosts =
    selectedTags.length > 0
      ? filteredByCategoryPosts.filter(({ tags }) =>
          tags.some((tag) => selectedTags.includes(tag)),
        )
      : filteredByCategoryPosts;

  const categories = tCommon('categories', {
    returnObjects: true,
  }) as Category[];

  const categoriesMap = getLocaleCategories(categories);

  const name = categoriesMap.get(categoryId)!;

  const results = searchTags(query);

  const renderBlogPost = (post: BlogPost) => (
    <BlogPostCard locale={lng} categoryName={name} key={post.id} {...post} />
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (value.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const toggleTag = ({ id }: ITag) => {
    if (!selectedTags.includes(id)) {
      setSelectedTags((prevTags) => [...prevTags, id]);
    } else {
      setSelectedTags((prevTags) => prevTags.filter((tagId) => tagId !== id));
    }
  };

  const handleTagClick = (tag: ITag) => {
    toggleTag(tag);
  };

  const handleResultClick = (tag: ITag) => {
    toggleTag(tag);
    setQuery('');
  };

  return (
    <section className={content}>
      {filteredByTagsPosts.length > 0 ? (
        <div>
          <ListHeading>{t('resultsHeading')}</ListHeading>
          <List
            options={filteredByTagsPosts}
            renderItem={renderBlogPost}
            direction="column"
          />
        </div>
      ) : (
        <div className={noPosts}>
          <CustomText>{t('notFoundMessage')}</CustomText>
        </div>
      )}

      <aside>
        <div className={search}>
          <SearchBar lng={lng} onChange={handleQueryChange} value={query} />
          {showResult && query.length !== 0 && (
            <div className={resultsStyle}>
              <SearchResults
                results={results.map((result) => ({
                  ...result,
                  isSelected: selectedTags.includes(result.id),
                }))}
                lng={lng}
                onClick={handleResultClick}
              />
            </div>
          )}
        </div>

        <div className={categoryWrapper}>
          <DropDown
            heading={
              <ListHeading className={categoryHeading} align="left">
                {t('categoriesHeading')}
              </ListHeading>
            }
          >
            <section className={categoryList}>
              {categories.map(({ id, name }) => (
                <Link key={id} href={createLinkToCategory(lng, id)}>
                  <CategoryCard name={name} displayType="minimal" />
                </Link>
              ))}
            </section>
          </DropDown>
        </div>

        <div className={tagsWrapper}>
          <ListHeading className={tagsHeading} align="left">
            {t('tagsHeading')}
          </ListHeading>

          <section className={tagsList}>
            {tags.map((tag) => {
              const { id } = tag;
              return (
                <Tag
                  onClick={handleTagClick}
                  key={id}
                  tag={tag}
                  isSelected={selectedTags.includes(id)}
                />
              );
            })}
          </section>
        </div>
      </aside>
    </section>
  );
};

export default PostSearch;
