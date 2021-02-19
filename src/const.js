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

export {
  WIDTH_PER_STAR,
  MapStyle,
  Type,
  PLACES_OPTIONS,
  CITIES
};
