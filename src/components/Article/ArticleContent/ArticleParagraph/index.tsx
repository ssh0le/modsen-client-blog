import { BodyText } from '@/components/UI';

import { ArticleParagraphProps } from './types';

const ArticleParagraph = ({ text }: ArticleParagraphProps) => {
  return <BodyText>{text}</BodyText>;
};

export default ArticleParagraph;
