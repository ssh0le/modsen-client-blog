'use client';

import Image from 'next/image';
import { memo } from 'react';

import { categoryDescription } from '@/constants';
import { getCategoryIcon } from '@/helpers/getIcon';

import { BodyText, Heading } from '../UI';

import { CategoryCardProps } from './interfaces';
import styles from './styled.module.scss';

const { container, minimal, image } = styles;

const CategoryCard = ({ displayType = 'often', name }: CategoryCardProps) => {
  const isMinimal = displayType === 'minimal';

  return (
    <section className={`${container} ${isMinimal ? minimal : ''}`}>
      <div className={image}>
        <Image src={getCategoryIcon(name)} alt={name} />
      </div>
      <Heading type="h3">{name}</Heading>
      {!isMinimal && <BodyText>{categoryDescription}</BodyText>}
    </section>
  );
};

export default memo(CategoryCard);
