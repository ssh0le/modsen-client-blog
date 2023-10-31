import { breakPoints } from '@/constants';
import { blogPosts } from '@/constants';
import { BlogPost } from '@/types';

export const getFeaturedPost = (): BlogPost => {
  return blogPosts[0];
};

export const getPosts = (amount: number, excludeId?: string) => {
  return blogPosts.filter(({ id }) => id !== excludeId).slice(0, amount);
};

export const getPostById = (postId: string): BlogPost => {
  return blogPosts.find(({ id }) => id === postId)!;
};

export const getHomePost = () => {
  return blogPosts[0];
};

export const getBlogFeaturedPost = () => {
  return blogPosts[6];
};

export const getPostFormattedDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const getPostByPages = (postsPerPage: number) => {
  return blogPosts.reduce<BlogPost[][]>((pagesWithPosts, nextPost, index) => {
    if (index % postsPerPage === 0) {
      return [...pagesWithPosts, [nextPost]];
    } else {
      const lastPage = pagesWithPosts.pop()!;
      return [...pagesWithPosts, [...lastPage, nextPost]];
    }
  }, []);
};

const { mobile, tablet } = breakPoints;

export const getPostAmount = (windowWidth: number) => {
  if (windowWidth < mobile) {
    return 1;
  } else if (windowWidth < tablet) {
    return 2;
  } else {
    return 4;
  }
};
