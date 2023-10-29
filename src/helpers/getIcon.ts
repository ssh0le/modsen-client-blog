import { categoriesIcons } from '@/constants';

export const getCategoryIcon = (categoryName: string): string => {
  if (categoryName in categoriesIcons) {
    return categoriesIcons[categoryName as keyof typeof categoriesIcons];
  } else {
    return categoriesIcons.startup;
  }
};
