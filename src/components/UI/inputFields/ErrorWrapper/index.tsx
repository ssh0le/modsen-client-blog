import { CustomText } from '@UI';

import { ErrorWrapperProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, error: errorWrapper } = styles;

export const ErrorWrapper = ({ children, error }: ErrorWrapperProps) => {
  return (
    <div className={wrapper}>
      {children}
      <div className={errorWrapper}>
        <CustomText size="14">{error}</CustomText>
      </div>
    </div>
  );
};
