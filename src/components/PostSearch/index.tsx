'use client';

import Link from 'next/link';
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useTranslation } from '@/app/i18n/client';
import { blogPosts } from '@/constants';
import { createLinkToCategory } from '@/helpers';
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
  tagsList: tagsListStyle,
  noPosts,
  postsList,
} = styles;

const PostSearch = ({ language, categoryId }: PostSearchProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const [showResult, setShowResults] = useState<boolean>(false);
  const { t } = useTranslation(language, 'category');
  const { t: tCommon } = useTranslation(language, 'common');

  const resultsDropDownRef = useRef<HTMLDivElement | null>(null);

  const localeTags = t('tags', { returnObjects: true }) as ITag[];

  useEffect(() => {
    const handleBodyClick: EventListenerOrEventListenerObject = (event) => {
      const resultsDropdown = resultsDropDownRef.current;
      if (resultsDropdown && resultsDropdown.contains(event.target as Node)) {
        return;
      }
      setShowResults(false);
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  const filteredByCategoryPosts = useMemo(
    () =>
      blogPosts.filter(
        ({ categoryId: postCategoryId }) => postCategoryId === categoryId,
      ),
    [categoryId],
  );

  const filteredByTagsPosts = useMemo(
    () =>
      selectedTags.length > 0
        ? filteredByCategoryPosts.filter(({ tags }) =>
            tags.some((tag) => selectedTags.includes(tag)),
          )
        : filteredByCategoryPosts,
    [filteredByCategoryPosts, selectedTags],
  );

  const categoriesArray = useMemo(
    () =>
      tCommon('categories', {
        returnObjects: true,
      }) as Category[],
    [],
  );

  const foundedTags = useMemo(() => searchTags(localeTags, query), [query]);

  const searchResultTagList = foundedTags.map((tag) => ({
    ...tag,
    isSelected: selectedTags.includes(tag.id),
  }));

  const renderBlogPost = useCallback(
    (post: BlogPost) => (
      <BlogPostCard locale={language} key={post.id} {...post} />
    ),
    [language],
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (value.length > 0) {
      setShowResults(true);
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
  };

  const handleSearchFocus = () => {
    setShowResults(true);
  };

  return (
    <section className={content}>
      {filteredByTagsPosts.length > 0 ? (
        <div className={postsList}>
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
        <section className={search} ref={resultsDropDownRef}>
          <SearchBar
            language={language}
            onChange={handleQueryChange}
            value={query}
            onMouseUp={handleSearchFocus}
          />
          {showResult && query.length !== 0 && (
            <div className={resultsStyle}>
              <SearchResults
                results={searchResultTagList}
                language={language}
                onClick={handleResultClick}
              />
            </div>
          )}
        </section>

        <div className={categoryWrapper}>
          <DropDown
            heading={
              <ListHeading className={categoryHeading} align="left">
                {t('categoriesHeading')}
              </ListHeading>
            }
          >
            <section className={categoryList}>
              {categoriesArray.map(({ id, name }) => (
                <Link key={id} href={createLinkToCategory(language, id)}>
                  <CategoryCard id={id} name={name} displayType="minimal" />
                </Link>
              ))}
            </section>
          </DropDown>
        </div>

        <div className={tagsWrapper}>
          <ListHeading className={tagsHeading} align="left">
            {t('tagsHeading')}
          </ListHeading>

          <section className={tagsListStyle}>
            {localeTags.map((tag) => {
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
