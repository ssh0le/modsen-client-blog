import ArticleBlock from './ArticleContent';
import { ArticleProps } from './interfaces';
import styles from './styles.module.scss';

const { articleWrapper } = styles;

const Article = ({ contentBlocks }: ArticleProps) => {
  return (
    <section className={articleWrapper}>
      {contentBlocks.map(({ heading, content }) => (
        <ArticleBlock key={heading} heading={heading} items={content} />
      ))}
    </section>
  );
};

export default Article;
