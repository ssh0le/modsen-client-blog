import { LocaleParams } from '@/types';

export interface AuthorPageProps extends LocaleParams {
  params: {
    authorId: string;
    lng: string;
  };
}
