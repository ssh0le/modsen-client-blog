import { Author } from '@/types';

import { authorsAvatars } from './images';

const { floyd, dianne, jenny, leslie, guy, eleanor, robert, jacob, andrew } =
  authorsAvatars;

export const authors: Author[] = [
  {
    id: '1',
    name: 'Floyd Miles',
    position: 'Content Writer @Company',
    photo: floyd,
  },
  {
    id: '2',
    name: 'Dianne Russell',
    position: 'Content Writer @Company',
    photo: dianne,
  },
  {
    id: '3',
    name: 'Jenny Wilson',
    position: 'Content Writer @Company',
    photo: jenny,
  },
  {
    id: '4',
    name: 'Leslie Alexander',
    position: 'Content Writer @Company',
    photo: leslie,
  },
  {
    id: '5',
    name: 'Guy Hawkins',
    position: 'Content Writer @Company',
    photo: guy,
  },
  {
    id: '6',
    name: 'Eleanor Pena',
    position: 'Content Writer @Company',
    photo: eleanor,
  },
  {
    id: '7',
    name: 'Robert Fox',
    position: 'Content Writer @Company',
    photo: robert,
  },
  {
    id: '8',
    name: 'Jacob Jones',
    position: 'Content Writer @Company',
    photo: jacob,
  },
  {
    id: '9',
    name: 'Andrew Jonhson',
    position: 'Content Writer @Company',
    photo: andrew,
  },
];
