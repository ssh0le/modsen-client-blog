import { BlogPost } from '@/types';

type BlogPostProps = Pick<BlogPost, 'description' | 'image' | 'title' | 'id'>;

export interface BlogPostCardProps extends BlogPostProps {
  categoryId: string;
  locale: string;
}
