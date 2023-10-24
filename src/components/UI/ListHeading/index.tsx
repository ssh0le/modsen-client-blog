import { ListHeadingProps } from './interfaces';
import styles from './styles.module.scss';

const { centerAlign, heading } = styles;

export const ListHeading = ({
  align = 'center',
  className,
  children,
}: ListHeadingProps) => {
  const alignClass = align === 'center' ? centerAlign : '';
  return (
    <h2 className={`${alignClass} ${heading} ${className ?? ''}`}>
      {children}
    </h2>
  );
};
