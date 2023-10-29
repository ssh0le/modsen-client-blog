import { getPostFormattedDate } from '@/helpers';

import { CustomText } from '..';

import { AuthorAndDateProps } from './interfaces';

export const AuthorAndDate = (props: AuthorAndDateProps) => {
  const {
    author,
    date,
    authorColor = 'purple',
    size = '14',
    weight = '500',
    color = 'black',
  } = props;
  return (
    <CustomText color={color} size={size} weight={weight}>
      By <CustomText color={authorColor}>{author}</CustomText> |{' '}
      {getPostFormattedDate(date)}
    </CustomText>
  );
};
