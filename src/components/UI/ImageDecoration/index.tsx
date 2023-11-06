import { ImageDecorationProps } from './interfaces';
import styles from './styles.module.scss';

const { rectange, circle, wrapper, imageWrapper } = styles;

export const ImageDecoration = ({ type, children }: ImageDecorationProps) => {
  return (
    <div className={wrapper}>
      <div className={imageWrapper}>{children}</div>
      <div className={type === 'circle' ? circle : rectange}></div>
    </div>
  );
};
