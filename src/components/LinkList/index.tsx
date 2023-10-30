import Link from 'next/link';

import { LinkListProps } from './interfaces';
import styles from './styled.module.scss';

const { linkList } = styles;

const LinkList = ({ links, lng }: LinkListProps) => {
  return (
    <ul className={linkList}>
      {links.map(({ title, path }) => (
        <li key={path}>
          <Link href={`/${lng}${path}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
