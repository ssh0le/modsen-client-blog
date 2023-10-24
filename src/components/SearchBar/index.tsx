import { categoryStatics } from '@/constants';

import styles from './styles.module.scss';

const { wrapper } = styles;

const SearchBar = () => {
  return (
    <div className={wrapper}>
      <input placeholder={categoryStatics.searchPlaceholder} type="text" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
