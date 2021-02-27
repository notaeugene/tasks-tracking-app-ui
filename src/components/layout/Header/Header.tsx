import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import ActionButton from '../../common/ActionButton/ActionButton';
import SearchBox from '../../SearchBox/SearchBox';

import styles from './Header.module.scss';

export type HeaderPros = {
  onProjectCreate: () => void;
};

export const MENU_LINKS = [
  { name: 'My Projects', path: '/' },
  { name: 'Summary', path: '/summary' },
];

const Header: React.FC<HeaderPros> = ({ onProjectCreate }) => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.linksWrapper}>
        {MENU_LINKS.map(({ path, name }, index) => (
          <Link
            to={path}
            key={index}
            className={classNames(styles.link, {
              [styles.linkActive]: location.pathname === path,
            })}
          >
            {name}
          </Link>
        ))}
      </div>
      <SearchBox onSearch={() => {}} />
      <div className={styles.actionButtons}>
        <ActionButton icon="plus" onClick={onProjectCreate} />
        <ActionButton icon="bell" onClick={() => {}} />
        <ActionButton icon="cog" onClick={() => {}} />
      </div>
    </header>
  );
};

export default Header;
