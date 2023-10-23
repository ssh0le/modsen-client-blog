import { CapProps } from './interfaces';
import styles from './styles.module.scss';

const { cap } = styles;

export const Cap = ({ className, children }: CapProps) => {
  return <span className={`${cap} ${className ?? ''}`}>{children}</span>;
};
