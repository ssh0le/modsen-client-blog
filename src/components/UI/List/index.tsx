import { ListProps } from './interfaces';
import styles from './styles.module.scss';

const { list, column } = styles;

export function List<T>({ options, renderItem, direction }: ListProps<T>) {
  const columnClass = direction === 'column' ? column : '';
  return (
    <div className={`${list} ${columnClass}`}>{options.map(renderItem)}</div>
  );
}
