export interface LocaleParams {
  params: {
    lng: string;
  };
}

export interface LocaleComponentProps {
  lng: string;
  results?: string[];
}
