'use client';

import { memo } from 'react';

import { TagProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, active } = styles;

const Tag = ({ isSelected, onClick, tag }: TagProps) => {
  const extraClass = isSelected ? active : '';

  const handleTagClick = () => onClick(tag);

  return (
    <div onClick={handleTagClick} className={`${wrapper} ${extraClass}`}>
      <b>{tag.name}</b>
    </div>
  );
};

export default memo(
  Tag,
  (
    { tag: { name: nextName }, isSelected: nextIsSelected },
    { tag: { name }, isSelected },
  ) => nextName === name && nextIsSelected === isSelected,
);
