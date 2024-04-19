import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Example from './pages/Example.jsx';
import { Ex_Bin2Dec, Ex_BRPreviewer, Ex_Calculator, Ex_Counter, Ex_ChristmasLights } from './components/examples/Import_ex.js';
import { C_Bin2Dec, C_BRPreviewer, C_Calculator,C_Counter, C_ChristmasLigths } from './components/code/Import_c';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Bin2Dec',
    element: <Example exampleTitle="Bin2Dec" example={<Ex_Bin2Dec/>} code={<C_Bin2Dec/>} />
  },
  {
    path: '/BRPreviewer',
    element: <Example exampleTitle="Border radius previewer" example={<Ex_BRPreviewer/>} code={<C_BRPreviewer/>}/>
  },
  {
    path: '/Calculator',
    element: <Example exampleTitle="Calculator" example={<Ex_Calculator/>} code={<C_Calculator/>} />
  },
  {
    path: '/Counter',
    element: <Example exampleTitle="Counter" example={<Ex_Counter/>} code={<C_Counter/>} />
  },
  {
    path: '/ChristmasLigths',
    element: <Example exampleTitle="Christmas Ligths" example={<Ex_ChristmasLights/>} code={<C_ChristmasLigths/>} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>,
)
