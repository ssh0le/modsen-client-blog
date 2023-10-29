import { BodyTextProps } from './interfaces';
import styles from './styles.module.scss';

const { body1, body2 } = styles;

export const BodyText = ({ children, type = 'body1' }: BodyTextProps) => {
  return <p className={type === 'body1' ? body1 : body2}>{children}</p>;
};
