import Header from '../../components/header/header.tsx';
import OfferCard from '../../components/offer-card/offer-card';
import { CITIES, placesOptions } from '../../const/const.ts';

type MainScreenProps = {
    offersCount: number;
}

export default function MainScreen ({ offersCount = 0 }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city}>
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {placesOptions.map((option) => (
                    <li
                      key={option}
                      className="places__option"
                      tabIndex={0}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {Array.from({ length: offersCount }, (_, i) => <OfferCard key={i}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
