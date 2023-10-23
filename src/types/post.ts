import { StaticImageData } from 'next/image';

export interface Post {
  author: string;
  date: Date;
  title: string;
}

export interface BlogPost {
  tag: string;
  title: string;
  description: string;
  image: StaticImageData;
  date: Date;
  author: string;
}
