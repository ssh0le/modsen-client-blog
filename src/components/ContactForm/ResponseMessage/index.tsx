import { Heading } from '@/components/UI';

import { ResponseMessageProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, active } = styles;

const ResponseMessage = ({ children, isActive }: ResponseMessageProps) => {
  return (
    <section className={`${wrapper} ${isActive ? active : ''}`}>
      <Heading type="h4">{children}</Heading>
    </section>
  );
};

export default ResponseMessage;
