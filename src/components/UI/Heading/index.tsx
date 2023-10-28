import React from 'react';

import { HeadingProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

export const Heading = ({ type, children, className }: HeadingProps) => {
  return (
    <div className={wrapper}>
      {React.createElement(type, { className }, children)}
    </div>
  );
};
