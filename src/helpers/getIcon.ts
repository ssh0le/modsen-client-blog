import { categoriesIcons } from '@/constants';
import { Category } from '@/types';

export const getCategoryIcon = (categoryName: Category): string => {
  if (categoryName in categoriesIcons) {
    return categoriesIcons[categoryName];
  } else {
    return categoriesIcons.startup;
  }
};
