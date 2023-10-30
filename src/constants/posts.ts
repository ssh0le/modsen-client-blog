import { BlogPost } from '@/types';

import { blogpostsImages, images } from './images';
import { postText } from './staticText';

const { blogHero } = images;
const { blogPost1, blogPost2, blogPost3, blogPost4 } = blogpostsImages;

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    categoryId: '1',
    tags: ['1', '4', '5'],
    title: 'Step-by-step guide to choosing great font pairs',
    description: postText,
    image: blogPost1,
    author: 'James West',
    date: new Date(2022, 4, 22),
  },
  {
    id: '2',
    tags: ['2', '3', '6'],
    categoryId: '1',
    title: 'Design tips for designers that cover everything you need',
    description: postText,
    image: blogPost1,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '3',
    tags: ['1', '5'],
    categoryId: '2',
    title: 'How to build rapport with your web design clients',
    description: postText,
    image: blogPost2,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '4',
    tags: ['2', '3', '4', '6'],
    categoryId: '2',
    title: 'Logo design trends to avoid in 2022',
    description: postText,
    image: blogPost3,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '5',
    tags: ['2', '5'],
    categoryId: '3',
    title: '8 Figma design systems you can download for free today',
    description: postText,
    image: blogPost4,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '6',
    tags: ['1', '3', '4'],
    categoryId: '3',
    title: 'Font sizes in UI design: The complete guide to follow',
    description: postText,
    image: blogPost1,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '7',
    tags: ['1', '2', '3', '6'],
    categoryId: '3',
    title: 'Step-by-step guide to choosing great font pairs',
    description: postText,
    image: blogHero,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '8',
    tags: ['1', '3', '5'],
    categoryId: '4',
    title: 'Step-by-step guide to choosing great font pairs',
    description: postText,
    image: blogHero,
    author: 'John Doe',
    date: new Date(),
  },
];
