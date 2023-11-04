export interface SearchResultsProps<T> {
  results?: T[];
  onClick: (result: T) => void;
  language: string;
}

export interface Result {
  name: string;
  id: string;
  isSelected: boolean;
}
