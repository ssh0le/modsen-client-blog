import Link from 'next/link';

import { LinkListProps } from './interfaces';
import styles from './styled.module.scss';

const { linkList } = styles;

const LinkList = ({ links, lng }: LinkListProps) => {
  return (
    <ul className={linkList}>
      {links.map(({ title, path }) => (
        <Link key={path} href={`/${lng}/${path}`}>
          {title}
        </Link>
      ))}
    </ul>
  );
};

export default LinkList;
