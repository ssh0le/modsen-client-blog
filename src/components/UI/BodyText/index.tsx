import { BodyTextProps } from './interfaces';
import styles from './styles.module.scss';

const { body1 } = styles;

export const BodyText = ({ children }: BodyTextProps) => {
  return <span className={body1}>{children}</span>;
};
