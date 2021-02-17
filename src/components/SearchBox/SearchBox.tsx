import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import styles from './SearchBox.module.scss';

export const PLACEHOLDER = 'Type here to search';

export type SearchBoxProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setSearchTerm(target.value);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon="search" className={styles.icon} />
      <input
        type="search"
        placeholder={PLACEHOLDER}
        className={styles.inputField}
        value={searchTerm}
        onChange={handleSearchTermChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default SearchBox;
