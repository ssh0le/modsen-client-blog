import { DisplayTextProps } from './interfaces';
import styles from './styles.module.scss';

export const DisplayText = ({ children }: DisplayTextProps) => {
  return <span className={styles.display}>{children}</span>;
};
