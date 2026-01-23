import { useState } from 'react';

import type { Offer } from '../../types/types';

import OfferCard from '../offer-card/offer-card';

type OfferCardListProps = {
    offers: Offer[];
};

const OfferCardList = ({ offers }: OfferCardListProps): JSX.Element => {

  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
};

export default OfferCardList;
