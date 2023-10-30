import Image from 'next/image';
import Link from 'next/link';

import { mediaLinks } from '@/constants';

import { MediaLinks } from './interfaces';
import styles from './styles.module.scss';

const { media } = styles;

export const MediaLinkList = ({ className }: MediaLinks) => {
  const extraClass = className ?? '';
  return (
    <ul className={`${media} ${extraClass}`}>
      {mediaLinks.map(({ title, path }, index) => (
        <li key={index}>
          <Link href={path}>
            <Image src={title} alt={path} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
