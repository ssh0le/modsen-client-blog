import { LocaleParams } from '@/types';

export interface PostPageProps extends LocaleParams {
  params: {
    postId: string;
    lng: string;
  };
}
