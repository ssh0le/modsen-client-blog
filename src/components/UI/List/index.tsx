import { ListProps } from './interfaces';
import styles from './styles.module.scss';

const { list, column } = styles;

export function List<T>({
  options,
  renderItem,
  direction,
  className,
}: ListProps<T>) {
  return (
    <section
      className={`${list} ${direction === 'column' ? column : ''} ${
        className ?? ''
      }`}
    >
      {options.map(renderItem)}
    </section>
  );
}
