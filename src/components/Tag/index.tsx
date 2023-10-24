import { TagProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, active } = styles;

const Tag = ({ children, isSelected }: TagProps) => {
  const extraClass = isSelected ? active : '';
  return <div className={`${wrapper} ${extraClass}`}>{children}</div>;
};

export default Tag;
