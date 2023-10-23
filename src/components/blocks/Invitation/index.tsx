import { Button } from '@/components/UI';

import { ArticleWrapper } from '../ArticleWrapper';

import styles from './styles.module.scss';

export const Invitation = () => {
  return (
    <ArticleWrapper className={styles.invitation}>
      <div>
        <h2>Join our team to be a part of our story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Button styleType="colored">Join Now</Button>
      </div>
    </ArticleWrapper>
  );
};
