import { BlogPost } from '@/types';

import { blogpostsImages } from './images';

const { blogPost1, blogPost2, blogPost3, blogPost4 } = blogpostsImages;

export const blogPosts: BlogPost[] = [
  {
    tag: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: blogPost1,
  },
  {
    tag: 'BUSINESS',
    title: 'How to build rapport with your web design clients',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: blogPost2,
  },
  {
    tag: 'Startup',
    title: 'Logo design trends to avoid in 2022',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: blogPost3,
  },
  {
    tag: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: blogPost4,
  },
  {
    tag: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: blogPost1,
  },
];
