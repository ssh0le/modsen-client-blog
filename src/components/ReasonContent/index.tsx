import { ReasonContentProps } from './interfaces';
import styles from './styles.module.scss';

const ReasonContent = ({
  heading,
  subheading,
  description,
}: ReasonContentProps) => {
  return (
    <div className={styles.wrapper}>
      <h2>{heading}</h2>
      <h4>{subheading}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ReasonContent;
