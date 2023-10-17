import { headerLinks } from '@/constants';

import LinkList from '../LinkList';
import { Button } from '../UI/Button';

import styles from './styled.module.scss';

const { header, blogName, controls } = styles;

const Header = () => {
  return (
    <header className={header}>
      <h4 className={blogName}>Modsen Client Blog</h4>
      <div className={controls}>
        <nav>
          <LinkList links={headerLinks} />
        </nav>
        <Button>Video about us</Button>
      </div>
    </header>
  );
};

export default Header;
