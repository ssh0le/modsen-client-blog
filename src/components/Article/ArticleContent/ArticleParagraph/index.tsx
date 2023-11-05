import { BodyText } from '@UI';

import { ArticleParagraphProps } from './types';

const ArticleParagraph = ({ text }: ArticleParagraphProps) => {
  return <BodyText type="body1">{text}</BodyText>;
};

export default ArticleParagraph;
