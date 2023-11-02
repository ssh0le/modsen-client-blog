'use client';

import { useEffect } from 'react';

import { errorPageStatics } from '@/constants';
import { Button, Heading } from '@UI';

import styles from './error.module.scss';
import { ErrorPageProps } from './interfaces';

const { message, resetButtonText } = errorPageStatics;

const Error = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleResetClick = (): void => {
    reset();
  };

  return (
    <section className={styles.wrapper}>
      <Heading type="h1">{message}</Heading>
      <Button styleType="colored" onClick={handleResetClick}>
        {resetButtonText}
      </Button>
    </section>
  );
};

export default Error;
