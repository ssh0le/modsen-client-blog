import { StaticImageData } from 'next/image';

export interface AboutReasonProps {
  image: StaticImageData;
  isReversed: boolean;
  heading: string;
  subheading: string;
  description: string;
}
