import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import city from './moсks/city';
import offers from './moсks/offers';
import reviews from './moсks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App city={city} offers={offers} reviews={reviews}/>
  </React.StrictMode>
);
