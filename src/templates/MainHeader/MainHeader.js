import React from 'react';
import logo from './logo.svg';
import styles from './MainHeader.module.css';
import MainNav from '../MainNav';

const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <img src={logo} className={styles.logo} alt="logo" />

      <MainNav />
    </header>
  );
};

export default MainHeader;
