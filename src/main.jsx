import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { DataProvider } from '../src/Context/ApiData';
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById('root'));
root.render(

  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>

  </StrictMode>
);
