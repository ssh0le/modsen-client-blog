import { routePathes } from '@/constants';

const { blog, about, author } = routePathes;

const getLocale = (pathname: string): string => {
  const pathParts = pathname.split('/');
  return pathParts[1];
};

export const createLinkToPost = (pathname: string, postId: string): string => {
  const locale = getLocale(pathname);
  return `/${locale}${blog}/${postId}`;
};

export const createLinkToAuthor = (
  pathname: string,
  authorId: string,
): string => {
  const locale = getLocale(pathname);
  return `/${locale}${author}/${authorId}`;
};

export const createLinkToAbout = (locale: string): string => {
  return `/${locale}${about}`;
};
