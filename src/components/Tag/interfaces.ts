import { Tag } from '@/types';

export interface TagProps {
  isSelected: boolean;
  tag: Tag;
  onClick: (tag: Tag) => void;
}
