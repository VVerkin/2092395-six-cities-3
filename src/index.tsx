import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFER_CARDS_COUNT } from './pages/const/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={OFFER_CARDS_COUNT} />
  </React.StrictMode>
);
