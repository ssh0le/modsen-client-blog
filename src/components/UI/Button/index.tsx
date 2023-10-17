import { ButtonProps } from './interfaces';
const { button, colored } = styles;

import styles from './styled.module.scss';

export const Button = (props: ButtonProps) => {
  const { styleType, children, ...remainedProps } = props;

  return (
    <button
      className={`${button} ${styleType === 'colored' ? colored : ''}`}
      {...remainedProps}
    >
      {children}
    </button>
  );
};
