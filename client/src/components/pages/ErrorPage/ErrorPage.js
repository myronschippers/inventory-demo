import React from 'react';
import { MainLayout } from 'components/templates/MainLayout';

const ErrorPage = () => {
  return (
    <MainLayout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </MainLayout>
  );
};

export default ErrorPage;
