import React from 'react';
import ReactDOM from 'react-dom/client';
import MirageApi from './services/mirageApi';

import { App } from './App';

import Modal from 'react-modal'
Modal.setAppElement('#root')

MirageApi()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
