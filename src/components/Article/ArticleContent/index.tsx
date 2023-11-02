import { Heading } from '@/components/UI';

import ArticleList from './ArticleList';
import ArticleParagraph from './ArticleParagraph';
import { ArticleBlockProps } from './interfaces';
import styles from './styles.module.scss';

const { description, heading: headingStyle } = styles;

const ArticleBlock = ({ heading, items }: ArticleBlockProps) => {
  return (
    <section>
      <Heading type="h2" className={headingStyle}>
        {heading}
      </Heading>
      <div className={description}>
        {items.map((item, index) => {
          if (item.type === 'list') {
            return <ArticleList key={index} options={item.options} />;
          } else {
            return <ArticleParagraph key={index} text={item.text} />;
          }
        })}
      </div>
    </section>
  );
};

export default ArticleBlock;
