const nearbyOffers = [
  {
    type: `Аpartment`,
    price: 120,
    rating: 2.4,
    previewImage: `img/apartment-01.jpg`,
    title: `Beautiful & luxurious studio at great location`,
    isPremium: true,
    isFavorite: true,
    id: 1,
    city: {
      name: `Dusseldorf`,
      location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
    },
    location: {latitude: 51.233402, longitude: 6.791314, zoom: 16},
  },
  {
    type: `Private room`,
    price: 80,
    rating: 3.8,
    previewImage: `img/room.jpg`,
    title: `Wood and stone place`,
    isPremium: false,
    isFavorite: false,
    id: 2,
    city: {
      name: `Dusseldorf`,
      location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
    },
    location: {latitude: 51.243402, longitude: 6.791314, zoom: 16},
  },
  {
    type: `Аpartment`,
    price: 160,
    rating: 4,
    previewImage: `img/apartment-02.jpg`,
    title: `Canal View Prinsengracht`,
    isPremium: true,
    isFavorite: true,
    id: 3,
    city: {
      name: `Dusseldorf`,
      location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
    },
    location: {latitude: 51.228402, longitude: 6.784314, zoom: 16},
  }
];

export {
  nearbyOffers
};
