import Image from 'next/image';

import { BodyText, Cap, CustomText, Heading } from '../UI';

import { BlogPostCardProps } from './interfaces';
import styles from './styled.module.scss';

const { blogtitle, blogpost, info, imageContainer } = styles;

const BlogPostCard = (props: BlogPostCardProps) => {
  const { image, title, description, categoryName } = props;

  return (
    <div className={blogpost}>
      <section className={imageContainer}>
        <Image src={image} alt={title} />
      </section>

      <section className={info}>
        <Cap>
          <CustomText color="purple">{categoryName}</CustomText>
        </Cap>
        <Heading type="h2" className={blogtitle}>
          {title}
        </Heading>
        <BodyText>{description}</BodyText>
      </section>
    </div>
  );
};

export default BlogPostCard;
