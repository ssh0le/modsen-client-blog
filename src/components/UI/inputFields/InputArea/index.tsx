import { TextareaHTMLAttributes } from 'react';

import styles from '../styles.module.scss';

const { input } = styles;

export const InputArea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
) => {
  return <textarea className={input} {...props} />;
};
