import { PatternProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, leftBar, rightBar, reverse } = styles;

export const DecorationBar = ({ direction }: PatternProps) => {
  return (
    <div className={`${wrapper} ${direction === 'reverse' ? reverse : ''}`}>
      <div className={leftBar}></div>
      <div className={rightBar}></div>
    </div>
  );
};
