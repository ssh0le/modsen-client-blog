import { InputHTMLAttributes } from 'react';

import styles from '../styles.module.scss';

const { input } = styles;

export const InputField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input type="text" className={input} {...props} />;
};
