import { Author } from '@/types';

import { authorsAvatars } from './images';

const { floyd, dianne, jenny, leslie } = authorsAvatars;

export const authors: Author[] = [
  { name: 'Floyd Miles', position: 'Content Writer @Company', photo: floyd },
  { name: 'Dianne Russell', position: 'Content Writer @Company', photo: dianne },
  { name: 'Jenny Wilson', position: 'Content Writer @Company', photo: jenny },
  { name: 'Leslie Alexander', position: 'Content Writer @Company', photo: leslie },
];
