export const offers = [
  {
    type: `Аpartment`,
    price: 120,
    rating: 2.4,
    previewImage: `img/apartment-01.jpg`,
    title: `Beautiful & luxurious studio at great location`,
    isPremium: true,
    isFavorite: true,
    id: 1,
    bedrooms: 4,
    city: {
      name: `Dusseldorf`,
      location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
    },
    description: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
    goods: [`Fridge`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Towels`, `Breakfast`, `Air conditioning`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
    ],
    location: {latitude: 51.228402, longitude: 6.784314, zoom: 16},
    maxAdults: 7
  },
  {
    type: `Private room`,
    price: 80,
    rating: 4,
    previewImage: `img/room.jpg`,
    title: `Wood and stone place`,
    isPremium: false,
    isFavorite: false,
    id: 2,
    bedrooms: 4,
    city: {
      location: {latitude: 52.37454, longitude: 4.897976, zoom: 13},
      name: `Amsterdam`
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    goods: [`Baby seat`, `Towels`, `Washer`, `Breakfast`, `Laptop friendly workspace`, `Fridge`, `Air conditioning`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: false,
      name: `Angelina`
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`
    ],
    location: {latitude: 52.361540000000005, longitude: 4.883976, zoom: 16},
    maxAdults: 5
  },
  {
    type: `Аpartment`,
    price: 132,
    rating: 4,
    previewImage: `img/apartment-02.jpg`,
    title: `Canal View Prinsengracht`,
    isPremium: false,
    isFavorite: false,
    id: 3,
    bedrooms: 1,
    city: {
      location: {latitude: 53.550341, longitude: 10.000654, zoom: 13},
      name: `Hamburg`
    },
    description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    goods: [`Laptop friendly workspace`, `Washer`, `Air conditioning`, `Breakfast`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`
    ],
    location: {latitude: 53.555341000000006, longitude: 9.975654, zoom: 16},
    maxAdults: 2
  },
  {
    type: `Аpartment`,
    price: 180,
    rating: 4.8,
    previewImage: `img/apartment-03.jpg`,
    title: `Nice, cozy, warm big bed apartment`,
    isPremium: true,
    isFavorite: true,
    id: 4,
    bedrooms: 1,
    city: {
      location: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
      name: `Dusseldorf`
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    goods: [`Air conditioning`, `Towels`, `Fridge`, `Breakfast`, `Washer`, `Baby seat`, `Dishwasher`, `Laptop friendly workspace`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`
    ],
    location: {latitude: 51.243402, longitude: 6.791314, zoom: 16},
    maxAdults: 2
  },
  {
    type: `Private room`,
    price: 80,
    rating: 4.2,
    previewImage: `img/room.jpg`,
    title: `Wood and stone place`,
    isPremium: false,
    isFavorite: true,
    id: 5,
    bedrooms: 1,
    city: {
      location: {latitude: 53.550341, longitude: 10.000654, zoom: 13},
      name: `Hamburg`
    },
    description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    goods: [`Baby seat`, `Towels`, `Air conditioning`, `Washer`, `Fridge`, `Coffee machine`, `Laptop friendly workspace`, `Dishwasher`, `Breakfast`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`
    ],
    location: {latitude: 53.550341, longitude: 9.980654000000001, zoom: 16},
    maxAdults: 1
  }
]
;
