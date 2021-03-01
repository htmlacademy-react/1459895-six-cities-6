const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const PLACES_OPTIONS = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

const WIDTH_PER_STAR = 20;

const Type = {
  CITIES: {
    article: `cities__place-card`,
    img: {
      class: `cities`,
      width: 260,
      height: 200
    },
    info: ``,
    divClass: `cities__places-list`
  },
  FAVORITE: {
    article: `favorites__card`,
    img: {
      class: `favorites`,
      width: 150,
      height: 110
    },
    info: `favorites__card-info`,
    divClass: `favorites__places`
  },
  NEARBY: {
    article: `near-places__card`,
    img: {
      class: `near-places`,
      width: 260,
      height: 200
    },
    info: ``,
    divClass: `near-places__list`
  }
};

const MapStyle = {
  MAIN: {
    width: `100%`,
    height: `100%`
  },
  PROPERTY: {
    width: `1144px`,
    height: `579px`,
    margin: `0 auto`
  }
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const AppRoute = {
  MAIN: `/`,
  PROPERTY: `/property`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  OFFER: `/offer`,
  NOT_FOUND: `/not-found`
};

const APIRoute = {
  LOGIN: `/login`,
  OFFERS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
  LOGOUT: `/logout`,
  NEARBY: `/nearby`
};

const CommentLength = {
  MIN: 50,
  MAX: 300
};

const stars = [5, 4, 3, 2, 1];

export {
  WIDTH_PER_STAR,
  MapStyle,
  Type,
  PLACES_OPTIONS,
  CITIES,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
  CommentLength,
  stars
};
