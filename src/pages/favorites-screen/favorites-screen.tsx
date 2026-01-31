import OfferCard from '../../components/offer-card/offer-card';
import type { Offer } from '../../types/types';

type FavoritesScreenProps = {
  offers: Offer[];
};

const FavoritesScreen = ({ offers }: FavoritesScreenProps): JSX.Element => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const groupedOffersByCity = favoriteOffers.reduce<Record<string, Offer[]>>((acc, offer) => {
    const cityName = offer.city.name;
    acc[cityName] = [...(acc[cityName] || []), offer];
    return acc;
  }, {});

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {Object.keys(groupedOffersByCity).length > 0 ? (
              <ul className="favorites__list">
                {Object.entries(groupedOffersByCity).map(([cityName, groupedOffers]) => (
                  <li className="favorites__locations-items" key={cityName}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedOffers.map((offer) => (
                        <OfferCard key={offer.id} {...offer} place="favorites" />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
};

export default FavoritesScreen;
