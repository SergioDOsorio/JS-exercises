import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Example from './pages/Example.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Bin2Dec',
    element: <Example exampleTitle="Bin2Dec" example="Ex_Bin2Dec" code="C_Bin2Dec"/>
  },
  {
    path: '/BRPreviewer',
    element: <Example />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>,
)
