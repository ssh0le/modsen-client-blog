'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { mediaIcons } from '@/constants';
import { createLinkToAuthor } from '@/helpers';
import { Author } from '@/types';
import { BodyText, Heading } from '@UI';

import styles from './styles.module.scss';

const { container, avatar, links, info } = styles;

const AuthorCard = ({ position, photo, name, id }: Author) => {
  const pathname = usePathname();

  return (
    <Link href={createLinkToAuthor(pathname, id)} className={container}>
      <div className={avatar}>
        <Image src={photo} alt={name} />
      </div>
      <div className={info}>
        <Heading type={'h3'}>{name}</Heading>
        <BodyText type="body2">{position}</BodyText>
      </div>
      <div className={links}>
        {Object.entries(mediaIcons).map(([mediaName, icon]) => (
          <Image key={mediaName} src={icon} alt={mediaName} />
        ))}
      </div>
    </Link>
  );
};

export default AuthorCard;
