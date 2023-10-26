import Image from 'next/image';

import { Comment as IComment } from '@/types';

import { CustomText } from '../UI';

import styles from './styles.module.scss';

const { comment, userInfo, user } = styles;

const Comment = ({ author, avatar, message, city }: IComment) => {
  return (
    <div className={comment}>
      <h4>{message}</h4>
      <div className={user}>
        <Image src={avatar} alt={author} />
        <div className={userInfo}>
          <h4>{author}</h4>
          <div>
            <CustomText color="medium-gray" weight="400">
              {city}
            </CustomText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
