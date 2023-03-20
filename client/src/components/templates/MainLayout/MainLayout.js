import React from 'react';
import { MainHeader } from 'components/templates/MainHeader';
import styles from './MainLayout.module.css';

function MainLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      <MainHeader />
      <main className={styles.mainLayoutBody}>{children}</main>
      <footer>This is the application footer</footer>
    </div>
  );
}

export default MainLayout;
