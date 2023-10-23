import { CustomText } from '../UI';

import { AuthorAndDateProps } from './interfaces';

const AuthorAndDate = (props: AuthorAndDateProps) => {
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
      {date.toLocaleString()}
    </CustomText>
  );
};

export default AuthorAndDate;
