import Image from 'next/image';

import { mediaIcons } from '@/constants';
import { Author } from '@/types';

import './styled.scss';

const AuthorCard = ({ position, photo, name }: Author) => {
  return (
    <div className="author-card-container">
      <div className="card-avatar">
        <Image src={photo} alt={`${name} photo`} />
      </div>
      <div className="author-card-info">
        <h3>{name}</h3>
        <div>
          <span>{position}</span>
        </div>
      </div>
      <div className="author-media-links">
        {Object.entries(mediaIcons).map(([mediaName, icon]) => (
          <Image key={mediaName} src={icon} alt={mediaName} />
        ))}
      </div>
    </div>
  );
};

export default AuthorCard;
