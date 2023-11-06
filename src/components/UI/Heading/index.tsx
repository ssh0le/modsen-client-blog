import React from 'react';

import { HeadingProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

export const Heading = ({
  type,
  children,
  className,
  onClick,
}: HeadingProps) => {
  return (
    <div className={wrapper} onClick={onClick}>
      {React.createElement(type, { className }, children)}
    </div>
  );
};
