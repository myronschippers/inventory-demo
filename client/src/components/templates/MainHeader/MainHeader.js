import React from 'react';
import { MainNav } from 'components/templates/MainNav';
import logo from './logo.svg';
import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <img src={logo} className={styles.logo} alt="logo" />

      <MainNav />
    </header>
  );
};

export default MainHeader;
