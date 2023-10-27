import { PatternProps } from './interfaces';
import styles from './styles.module.scss';

const { pattern, left, right, reverse } = styles;

export const Pattern = ({ direction }: PatternProps) => {
  return (
    <div className={`${pattern} ${direction === 'reverse' ? reverse : ''}`}>
      <div className={left}></div>
      <div className={right}></div>
    </div>
  );
};
