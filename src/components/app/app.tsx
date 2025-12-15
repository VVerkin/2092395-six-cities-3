import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen offersCount={offersCount} />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/favorites' element={<FavoritesScreen />} />
        <Route path='/offer/:id' element={<PropertyScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
