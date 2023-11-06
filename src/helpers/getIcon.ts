import { categoriesIcons } from '@/constants';

export const getCategoryIcon = (categoryKey: string): string => {
  if (categoryKey in categoriesIcons) {
    return categoriesIcons[categoryKey as keyof typeof categoriesIcons];
  } else {
    return categoriesIcons[0];
  }
};
