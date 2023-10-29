import { BlogPost } from '@/types';

import { blogpostsImages } from './images';
import { postText } from './staticText';

const { blogPost1, blogPost2, blogPost3, blogPost4 } = blogpostsImages;

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    tag: 'Startup',
    title: 'Step-by-step guide to choosing great font pairs',
    description: postText,
    image: blogPost1,
    author: 'James West',
    date: new Date(2022, 4, 22),
  },
  {
    id: '2',
    tag: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    description: postText,
    image: blogPost1,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '3',
    tag: 'BUSINESS',
    title: 'How to build rapport with your web design clients',
    description: postText,
    image: blogPost2,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '4',
    tag: 'Startup',
    title: 'Logo design trends to avoid in 2022',
    description: postText,
    image: blogPost3,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '5',
    tag: 'TECHNOLOGY',
    title: '8 Figma design systems you can download for free today',
    description: postText,
    image: blogPost4,
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: '6',
    tag: 'ECONOMY',
    title: 'Font sizes in UI design: The complete guide to follow',
    description: postText,
    image: blogPost1,
    author: 'John Doe',
    date: new Date(),
  },
];
