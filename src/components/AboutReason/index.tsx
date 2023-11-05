import { ArticleWrapper } from '@blocks';
import Image from 'next/image';

import { altTexts } from '@/constants';
import { BodyText, Heading, ImageDecoration } from '@UI';

import { AboutReasonProps } from './interfaces';
import styles from './styles.module.scss';

const { reason, content, alt } = styles;

const AboutReason = (props: AboutReasonProps) => {
  const { image, heading, subheading, description, isReversed } = props;
  return (
    <ArticleWrapper contentClass={`${reason} ${isReversed ? alt : ''}`}>
      <ImageDecoration type={isReversed ? 'rectangle' : 'circle'}>
        <Image src={image} alt={altTexts.aboutTeam} />
      </ImageDecoration>
      <section className={content}>
        <Heading type="h2">{heading}</Heading>
        <Heading type="h4">{subheading}</Heading>
        <BodyText>{description}</BodyText>
      </section>
    </ArticleWrapper>
  );
};

export default AboutReason;
