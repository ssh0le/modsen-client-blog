import { LinkInfo } from '@/types/linkInfo';

import { mediaIcons } from './images';
import { routePathes } from './routePaths';

const { home, blog, about, contact, privacyPolicy } = routePathes;

export const headerLinks: LinkInfo[] = [
  {
    title: 'Home',
    path: home,
  },
  {
    title: 'Blog',
    path: blog,
  },
  {
    title: 'About Us',
    path: about,
  },
  {
    title: 'Contact us',
    path: contact,
  },
];

export const footerLinks: LinkInfo[] = [
  ...headerLinks,
  {
    title: 'Privacy Policy',
    path: privacyPolicy,
  },
];

const { facebook, instagram, twitter, linkedin } = mediaIcons;

export const mediaLinks: LinkInfo[] = [
  {
    title: facebook,
    path: '#',
  },
  {
    title: instagram,
    path: '#',
  },
  {
    title: twitter,
    path: '#',
  },
  {
    title: linkedin,
    path: '#',
  },
];
