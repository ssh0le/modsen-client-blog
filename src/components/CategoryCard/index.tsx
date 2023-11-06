'use client';

import Image from 'next/image';
import { memo } from 'react';

import { getCategoryIcon } from '@/helpers';
import { BodyText, Heading } from '@UI';

import { CategoryCardProps } from './interfaces';
import styles from './styled.module.scss';

const { container, minimal, image } = styles;

const CategoryCard = ({
  displayType = 'often',
  name,
  description,
  id,
}: CategoryCardProps) => {
  const isMinimalDisplayType = displayType === 'minimal';

  return (
    <section className={`${container} ${isMinimalDisplayType ? minimal : ''}`}>
      <div className={image}>
        <Image src={getCategoryIcon(id)} alt={name} />
      </div>
      <Heading type="h3">{name}</Heading>
      {!isMinimalDisplayType && <BodyText>{description}</BodyText>}
    </section>
  );
};

export default memo(CategoryCard);
