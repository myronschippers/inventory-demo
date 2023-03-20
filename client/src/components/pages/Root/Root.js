import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from 'components/templates/MainLayout';

const Root = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Root;
