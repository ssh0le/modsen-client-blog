import { SectionWrapperProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, content } = styles;

export const ArticleWrapper = ({
  children,
  wrapperClass,
  contentClass,
}: SectionWrapperProps) => {
  return (
    <article className={`${wrapper} ${wrapperClass}`}>
      <div className={`${content} ${contentClass}`}>{children}</div>
    </article>
  );
};
