import { Tag } from '@/types';

export const searchTags = (tags: Tag[], query: string) => {
  return tags.reduce<Tag[]>((results, nextTag) => {
    if (nextTag.name.toLowerCase().includes(query.toLocaleLowerCase())) {
      return [...results, nextTag];
    }
    return results;
  }, []);
};
