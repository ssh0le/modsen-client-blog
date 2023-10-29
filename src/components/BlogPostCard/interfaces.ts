import { BlogPost } from '@/types';

export interface BlogPostCardProps
  extends Pick<BlogPost, 'description' | 'image' | 'title'> {
  categoryName: string;
}
