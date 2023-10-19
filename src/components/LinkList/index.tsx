import Link from 'next/link';

import { LinkInfo } from '@/types/linkInfo';

import styles from './styled.module.scss';

const { linkList } = styles;

const LinkList = ({ links }: { links: LinkInfo[] }) => {
  return (
    <ul className={linkList}>
      {links.map(({ title, path }) => (
        <Link key={path} href={path}>
          {title}
        </Link>
      ))}
    </ul>
  );
};

export default LinkList;
