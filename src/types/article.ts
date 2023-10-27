export interface ArticleBlock {
  heading: string;
  content: ArticleContent[];
}

export type ArticleContent = ArticleContentList | ArticleContentParagraph;

export interface ArticleContentList {
  type: 'list';
  options: string[];
}

export interface ArticleContentParagraph {
  type: 'paragraph';
  text: string;
}
