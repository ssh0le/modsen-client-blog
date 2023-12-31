import {
  Category,
  LinkInfo,
  Location,
  MapMarker,
  Mission,
  OverviewResult,
} from '@/types';

export const createLocaleLinks = (
  deafultLinks: LinkInfo[],
  localeTitles: string[],
): LinkInfo[] => {
  return deafultLinks.map((link, index) => ({
    ...link,
    title: localeTitles[index],
  }));
};

export const createLocaleResults = (
  defaultResults: OverviewResult[],
  localeResults: string[],
): OverviewResult[] => {
  return defaultResults.map((result, index) => ({
    ...result,
    subheading: localeResults[index],
  }));
};

export const createLocaleMissions = (
  defaultResults: Mission[],
  localeResults: Omit<Mission, 'description'>[],
): Mission[] => {
  return defaultResults.map((result, index) => ({
    ...result,
    heading: localeResults[index].heading,
    cap: localeResults[index].cap,
  }));
};

export const getLocaleCategories = (categories: Category[]) => {
  const categoriesMap = new Map<string, string>();
  categories.forEach(({ id, name }) => {
    categoriesMap.set(id, name);
  });
  return categoriesMap;
};

export const getLocaleMapMarkers = (
  locations: Location[],
  descriptions: string[],
): MapMarker[] => {
  return locations.map((location, index) => ({
    ...location,
    description: descriptions[index],
  }));
};

export const createAuthorHeading = (author: string) => {
  return `Hey there, I’m ${author} and welcome to my Blog`;
};
