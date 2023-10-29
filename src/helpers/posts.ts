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
