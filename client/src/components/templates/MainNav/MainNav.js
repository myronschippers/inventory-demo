import React from 'react';
import { NAV_LIST } from './constants';
import styles from './MainNav.module.css';

const MainNav = () => {
  return (
    <ul className={styles.navList}>
      {NAV_LIST.map((navItem) => {
        return (
          <li key={navItem.text} className={styles.navItem}>
            <a href={navItem.path} className={styles.navLink}>
              {navItem.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default MainNav;
