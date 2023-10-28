import AuthorCard from '@/components/AuthorCard';
import { List } from '@/components/UI';
import { Author } from '@/types';

import { AuthorListProps } from './interfaces';

export const AuthorList = ({ authors }: AuthorListProps) => {
  const renderAuthor = ({ id, name, photo, position }: Author) => (
    <AuthorCard
      id={id}
      key={name}
      name={name}
      photo={photo}
      position={position}
    />
  );
  return (
    <>
      <List renderItem={renderAuthor} options={authors} />
    </>
  );
};
