import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AppRoute} from '../../const/const';
import { getAuthorizationStatus } from '../../utils/utils';
import type { City, Offer } from '../../types/types';


type AppProps = {
  city: City;
  offers: Offer[]
}

export default function App({ city, offers }: AppProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<MainScreen city={city} offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <LoginScreen />
              </PrivateRoute>
            )}
          />
          <Route
            path={`${AppRoute.Property}/:id`}
            element={<PropertyScreen />}
          />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
