import { StaticImageData } from 'next/image';

export interface Author {
  photo: StaticImageData;
  name: string;
  position: string;
}
