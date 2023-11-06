import Link from 'next/link';

import { notFoundPageStatics, routePathes } from '@/constants';
import { Button, CustomText, Heading } from '@UI';

import styles from './notFound.module.scss';

const { message, backToHomeButton } = notFoundPageStatics;

export default function NotFound() {
  return (
    <section className={styles.wrapper}>
      <Heading type="h1">
        <CustomText color="yellow">{message}</CustomText>
      </Heading>
      <Link href={routePathes.home}>
        <Button styleType="colored">{backToHomeButton}</Button>
      </Link>
    </section>
  );
}
