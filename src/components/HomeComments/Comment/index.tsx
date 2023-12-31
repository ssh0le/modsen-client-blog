'use client';

import Image from 'next/image';
import { memo } from 'react';

import { Comment as IComment } from '@/types';
import { CustomText, Heading } from '@UI';

import styles from './styles.module.scss';

const { comment, userInfo, user } = styles;

const Comment = ({ author, avatar, message, city }: IComment) => {
  return (
    <div className={comment}>
      <Heading type="h4">{message}</Heading>
      <div className={user}>
        <Image src={avatar} alt={author} />
        <div className={userInfo}>
          <Heading type="h4">{author}</Heading>
          <CustomText color="medium-gray" weight="400">
            {city}
          </CustomText>
        </div>
      </div>
    </div>
  );
};

export default memo(Comment);
