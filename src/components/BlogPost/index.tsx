import Image from 'next/image';

import { Cap, CustomText } from '../UI';

import { BlogPostProps } from './interfaces';
import styles from './styled.module.scss';

const { blogtitle, blogpost, info } = styles;

const BlogPost = (props: BlogPostProps) => {
  const { image, title, description, tag } = props;
  return (
    <div className={blogpost}>
      <div>
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

export default BlogPost;
