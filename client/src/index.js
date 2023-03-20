import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import { Inventory } from 'components/pages/Inventory';
import { AddInventory } from 'components/pages/AddInventory';

import './index.css';
import reportWebVitals from './reportWebVitals';

const routerConfig = createBrowserRouter([
  {
    text: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    text: 'Inventory',
    path: '/inventory',
    element: <Inventory />,
  },
  {
    text: 'Add Inventory',
    path: '/add-inventory',
    element: <AddInventory />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
