import type { Offer } from '../types/types';


const offers: Offer[] = [
  {
    id: 1,
    price: 100,
    rating: 4.5,
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    type: 'apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
  },
  {
    id: 2,
    price: 200,
    rating: 3.0,
    title: 'Beautiful & luxurious room at great location',
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    type: 'room',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
  },
  {
    id: 3,
    price: 300,
    rating: 5.0,
    title: 'Beautiful & luxurious house at great location',
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-03.jpg',
    type: 'house',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    },
  },
  {
    id: 4,
    price: 400,
    rating: 3.5,
    title: 'Beautiful & luxurious hotel at great location',
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    type: 'hotel',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1
    },
  },
];

export default offers;
