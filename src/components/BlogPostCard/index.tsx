import Image from 'next/image';

import { Cap, CustomText } from '../UI';

import { BlogPostProps } from './interfaces';
import styles from './styled.module.scss';

const { blogtitle, blogpost, info, imageContainer } = styles;

const BlogPostCard = (props: BlogPostProps) => {
  const { image, title, description, tag, imageSize } = props;
  const imageExtraClass = imageSize === 'minimal' ? '' : '';

  return (
    <div className={blogpost}>
      <div className={`${imageContainer} ${imageExtraClass}`}>
        <Image src={image} alt={'Blog post image'} />
      </div>
      <div className={info}>
        <Cap>
          <CustomText color="purple">{tag}</CustomText>
        </Cap>
        <h2 className={blogtitle}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
