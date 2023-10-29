import { ListProps } from './interfaces';
import styles from './styles.module.scss';

const { list, column } = styles;

export function List<T>({
  options,
  renderItem,
  direction,
  className,
}: ListProps<T>) {
  const columnClass = direction === 'column' ? column : '';
  const extraClass = className ?? '';
  return (
    <section className={`${list} ${columnClass} ${extraClass}`}>
      {options.map(renderItem)}
    </section>
  );
}
