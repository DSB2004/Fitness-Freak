import './style/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Store from './hook/store';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './pages/app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


