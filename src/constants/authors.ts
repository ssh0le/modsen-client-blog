import { Author } from '@/types';

import { authorsAvatars } from './images';

const { floyd, dianne, jenny, leslie, guy, eleanor, robert, jacob } =
  authorsAvatars;

export const authors: Author[] = [
  { name: 'Floyd Miles', position: 'Content Writer @Company', photo: floyd },
  {
    name: 'Dianne Russell',
    position: 'Content Writer @Company',
    photo: dianne,
  },
  { name: 'Jenny Wilson', position: 'Content Writer @Company', photo: jenny },
  {
    name: 'Leslie Alexander',
    position: 'Content Writer @Company',
    photo: leslie,
  },
  {
    name: 'Guy Hawkins',
    position: 'Content Writer @Company',
    photo: guy,
  },
  {
    name: 'Eleanor Pena',
    position: 'Content Writer @Company',
    photo: eleanor,
  },
  {
    name: 'Robert Fox',
    position: 'Content Writer @Company',
    photo: robert,
  },
  {
    name: 'Jacob Jones',
    position: 'Content Writer @Company',
    photo: jacob,
  },
];
