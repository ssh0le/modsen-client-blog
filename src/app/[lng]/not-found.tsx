import Link from 'next/link';

import { routePathes } from '@/constants';
import { Button, CustomText, Heading } from '@UI';

import styles from './notFound.module.scss';

const NotFound = () => (
  <section className={styles.wrapper}>
    <Heading type="h1">
      <CustomText color="yellow">404</CustomText>
    </Heading>
    <Link href={routePathes.home}>
      <Button styleType="colored">Back to Home</Button>
    </Link>
  </section>
);

export default NotFound;
