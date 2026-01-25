export const OFFER_CARDS_COUNT: number = 10;

export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const placesOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const STARS_COUNT = 5;
export const MAX_PERCENT_STARS_WIDTH = 100;

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
