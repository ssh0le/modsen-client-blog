import { StaticImageData } from 'next/image';

export interface Post {
  author: string;
  date: Date;
  title: string;
}

export interface BlogPost {
  id: string;
  categoryId: string;
  tags: string[];
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

export interface Category {
  id: string;
  name: string;
}

export interface Tag {
  id: string;
  name: string;
}

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

export interface Location {
  lng: number;
  lat: number;
}

export interface MapMarker extends Location {
  description: string;
}

export interface ContactFormFields {
  [key: string]: string;
  userName: string;
  userEmail: string;
  queryTopic: string;
  message: string;
}
