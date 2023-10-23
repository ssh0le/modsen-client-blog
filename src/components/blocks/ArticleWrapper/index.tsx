import { SectionWrapperProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper } = styles;

export const ArticleWrapper = ({
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <article className={`${className ?? ''} ${wrapper} `}>{children}</article>
  );
};
