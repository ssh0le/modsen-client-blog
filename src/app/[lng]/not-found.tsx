import Link from 'next/link';

import { notFoundPageStatics, routePathes } from '@/constants';
import { Button, CustomText, Heading } from '@UI';

import styles from './notFound.module.scss';

const { message: code, backToHomeButton } = notFoundPageStatics;

const NotFound = () => (
  <section className={styles.wrapper}>
    <Heading type="h1">
      <CustomText color="yellow">{code}</CustomText>
    </Heading>
    <Link href={routePathes.home}>
      <Button styleType="colored">{backToHomeButton}</Button>
    </Link>
  </section>
);

export default NotFound;
