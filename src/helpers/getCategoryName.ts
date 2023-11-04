import { categoriesNames } from '@/constants';

export const getCategoryName = (categoryId: string) => {
  if (categoryId in categoriesNames) {
    return categoriesNames[categoryId as keyof typeof categoriesNames];
  } else {
    categoriesNames[1];
  }
};
