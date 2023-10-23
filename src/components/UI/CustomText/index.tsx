import { CustomTextProps } from './interfaces';
import styles from './styles.module.scss';

const { yellow, purple, black, w500, w600, size14 } = styles;

export const CustomText = ({
  color = 'black',
  children,
  size,
  weight,
}: CustomTextProps) => {
  const colorClass = getColor(color);
  const weightClass = getWeight(weight);
  const sizeClass = size ? size14 : '';
  return (
    <span className={`${colorClass} ${weightClass} ${sizeClass}`}>
      {children}
    </span>
  );
};

const getColor = (color: CustomTextProps['color']): string => {
  switch (color) {
    case 'purple':
      return purple;
    case 'yellow':
      return yellow;
    default:
      return black;
  }
};

const getWeight = (color: CustomTextProps['weight']): string => {
  switch (color) {
    case '500':
      return w500;
    case '600':
      return w600;
    default:
      return '';
  }
};
