import { InitOptions } from 'i18next';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'ru'];
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS): InitOptions {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
