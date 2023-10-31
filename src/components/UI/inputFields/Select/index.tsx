import styles from '../styles.module.scss';

import { SelectProps } from './interfaces';

const { input } = styles;

const placeholderValue = '';

export const Select = (props: SelectProps) => {
  const { options, placeholder, ...remainedProps } = props;
  return (
    <select className={input} {...remainedProps}>
      {placeholder && (
        <option key={placeholderValue} value={placeholderValue}>
          {placeholder}
        </option>
      )}
      {options.map(({ value, key }) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
};
