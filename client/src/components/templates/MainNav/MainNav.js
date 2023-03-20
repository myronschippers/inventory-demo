import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from './constants';
import styles from './MainNav.module.css';

const MainNav = () => {
  return (
    <ul className={styles.navList}>
      {NAV_LIST.map((navItem) => {
        return (
          <li key={navItem.text} className={styles.navItem}>
            <Link to={navItem.path} className={styles.navLink}>
              {navItem.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainNav;
