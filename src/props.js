import PropTypes from "prop-types";

const OfferPropTypes = PropTypes.shape({
  type: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  previewImage: PropTypes.string,
  title: PropTypes.string,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  id: PropTypes.number,
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
    name: PropTypes.string
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  }),
  images: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number
  }),
  maxAdults: PropTypes.number
});

const ReviewsPropTypes = PropTypes.shape({
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  })
});

const NearbyOffersPropTypes = PropTypes.shape({
  type: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  previewImage: PropTypes.string,
  title: PropTypes.string,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  id: PropTypes.number,
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  }),
});

const UserInfoPropTypes = PropTypes.shape({
  avatarUrl: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  isPro: PropTypes.bool,
  name: PropTypes.string
});

export {
  OfferPropTypes,
  ReviewsPropTypes,
  NearbyOffersPropTypes,
  UserInfoPropTypes
}
;
