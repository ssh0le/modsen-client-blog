import AuthorCard from '@/components/AuthorCard';
import { Author } from '@/types';
import { List } from '@UI';

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
