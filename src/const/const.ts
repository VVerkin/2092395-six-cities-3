const OFFER_CARDS_COUNT: number = 10;

const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const placesOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Property = '/offer',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export {
  OFFER_CARDS_COUNT,
  CITIES,
  placesOptions,
};
