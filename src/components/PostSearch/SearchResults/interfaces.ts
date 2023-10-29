export interface SearchResultsProps<T> {
  results?: T[];
  onClick: (result: T) => void;
  lng: string;
}

export interface Result {
  name: string;
  id: string;
  isSelected: boolean;
}
