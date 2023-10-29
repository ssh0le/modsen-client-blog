import Image from 'next/image';

import { BlogPost } from '@/types';

import { Cap, CustomText } from '../UI';

import styles from './styled.module.scss';

const { blogtitle, blogpost, info, imageContainer } = styles;

const BlogPostCard = (props: BlogPost) => {
  const { image, title, description, tag } = props;

  return (
    <div className={blogpost}>
      <section className={imageContainer}>
        <Image src={image} alt={title} />
      </section>

      <section className={info}>
        <Cap>
          <CustomText color="purple">{tag}</CustomText>
        </Cap>
        <h2 className={blogtitle}>{title}</h2>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default BlogPostCard;
