import { ListProps } from './interfaces';
import styles from './styles.module.scss';

const { list } = styles;

export function List<T>({ options, renderItem }: ListProps<T>) {
  return <div className={list}>{options.map(renderItem)}</div>;
}
