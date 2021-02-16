const Settings = {
  RENT_PLACES_COUNT: 312,
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  PLACES_OPTIONS: [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]
};

const WIDTH_PER_STAR = 20;

const CardType = {
  CITIES: {
    article: `cities__place-card`,
    img: {
      class: `cities`,
      width: 260,
      height: 200
    },
    info: ``
  },
  FAVORITE: {
    article: `favorites__card`,
    img: {
      class: `favorites`,
      width: 150,
      height: 110
    },
    info: `favorites__card-info`
  },
  NEARBY: {
    article: `near-places__card`,
    img: {
      class: `near-places`,
      width: 260,
      height: 200
    },
    info: ``
  }
};

const MapStyle = {
  width: `100%`,
  height: `100%`
};

export {
  Settings,
  WIDTH_PER_STAR,
  CardType,
  MapStyle
};
