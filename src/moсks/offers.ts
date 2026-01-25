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
    city: {
      name: 'Amsterdam'
    }
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
    city: {
      name: 'Paris'
    }
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
    city: {
      name: 'Paris'
    }
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
    city: {
      name: 'Amsterdam'
    }
  },
];

export default offers;
