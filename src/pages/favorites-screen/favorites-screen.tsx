import OfferCard from '../../components/offer-card/offer-card';
import type { Offer } from '../../types/types';

type FavoritesScreenProps = {
  offers: Offer[];
}

export default function FavoritesScreen ({ offers }: FavoritesScreenProps): JSX.Element {
  const groupedOffersByCity = offers.reduce<Record<string, Offer[]>>((acc, offer) => {
    if (offer.isFavorite) {
      const cityName = offer.city.name;
      if (!acc[cityName]) {
        acc[cityName] = [];
      }
      acc[cityName].push(offer);
    }
    return acc;
  }, {});

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
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
                    {groupedOffers.map((offer) => <OfferCard key={offer.id} {...offer} place="favorites" />)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}
