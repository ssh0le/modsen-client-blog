export interface LocaleParams {
  params: {
    lng: string;
  };
}

export interface LocaleComponentProps {
  language: string;
  results?: string[];
}
