'use client';

import { FC, useEffect } from 'react';

import { Button, Heading } from '@UI';

import styles from './error.module.scss';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleResetClick = (): void => {
    reset();
  };

  return (
    <section className={styles.wrapper}>
      <Heading type="h1">Something went wrong...</Heading>
      <Button styleType="colored" onClick={handleResetClick}>
        Try to reset
      </Button>
    </section>
  );
};

export default Error;
