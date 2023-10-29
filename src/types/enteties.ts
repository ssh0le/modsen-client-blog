import { StaticImageData } from 'next/image';

import { categoriesIcons } from '@/constants';

export interface Post {
  author: string;
  date: Date;
  title: string;
}

export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: StaticImageData;
  date: Date;
  author: string;
}

export interface OverviewResult {
  heading: string;
  subheading: string;
}

export type Category = keyof typeof categoriesIcons;

export interface Author {
  id: string;
  photo: StaticImageData;
  name: string;
  position: string;
}

export interface Mission {
  cap: string;
  heading: string;
  description: string;
}

export interface Comment {
  message: string;
  author: string;
  avatar: StaticImageData;
  city: string;
}

export type ClickHandler = () => void;
