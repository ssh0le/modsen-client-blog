import Image from 'next/image';

import { getCategoryIcon } from '@/helpers/getIcon';

import { CategoryCardProps } from './interfaces';
import styles from './styled.module.scss';

const { container, minimal } = styles;

const CategoryCard = ({ displayType = 'often', name }: CategoryCardProps) => {
  const isMinimal = displayType === 'minimal';

  return (
    <div className={`${container} ${isMinimal ? minimal : ''}`}>
      <div>
        <Image src={getCategoryIcon(name)} alt={name} />
      </div>
      <h3>{name}</h3>
      {!isMinimal && (
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      )}
    </div>
  );
};

export default CategoryCard;
