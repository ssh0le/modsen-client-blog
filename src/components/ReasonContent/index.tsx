import { BodyText, Heading } from '../UI';

import { ReasonContentProps } from './interfaces';
import styles from './styles.module.scss';

const ReasonContent = ({
  heading,
  subheading,
  description,
}: ReasonContentProps) => {
  return (
    <section className={styles.wrapper}>
      <Heading type="h2">{heading}</Heading>
      <Heading type="h4">{subheading}</Heading>
      <BodyText>{description}</BodyText>
    </section>
  );
};

export default ReasonContent;
