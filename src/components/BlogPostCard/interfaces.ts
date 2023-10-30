import { BlogPost } from '@/types';

export interface BlogPostCardProps
  extends Pick<BlogPost, 'description' | 'image' | 'title' | 'id'> {
  categoryName: string;
  locale: string;
}
