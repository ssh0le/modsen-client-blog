import styles from '../styles.module.scss';

import { SelectProps } from './interfaces';

const { input } = styles;

export const Select = (props: SelectProps) => {
  const { options, placeholder, ...remainedProps } = props;
  return (
    <select className={input} {...remainedProps}>
      {placeholder && <option key={''}>{placeholder}</option>}
      {options.map(({ key, value }) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
};
