import { ImageDecorationProps } from './interfaces';
import styles from './styles.module.scss';

const { rectange, circle, wrapper } = styles;

export const ImageDecoration = ({ type, children }: ImageDecorationProps) => {
  return (
    <div className={wrapper}>
      {children}
      <div className={type === 'circle' ? circle : rectange}></div>
    </div>
  );
};
