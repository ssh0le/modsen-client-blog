import { StyleResolver } from '@/helpers';

import { CustomTextProps } from './interfaces';
import styles from './styles.module.scss';

const styleResolver = new StyleResolver(styles);

export const CustomText = ({
  color = 'black',
  children,
  size = '16',
  weight = '400',
  ...restProps
}: CustomTextProps) => {
  return (
    <span
      className={`${styleResolver.getColor(color)} ${styleResolver.getWeight(
        weight,
      )} ${styleResolver.getFontSize(size)}`}
      {...restProps}
    >
      {children}
    </span>
  );
};
