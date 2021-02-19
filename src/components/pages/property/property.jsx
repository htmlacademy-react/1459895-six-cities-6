import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import PropertyGallery from "../../property-gallery/property-gallery";
import PropertyInsideItem from "../../property-inside-item/property-inside-item";
import PropertyHost from "../../property-host/property-host";
import PropertyReviews from "../../property-reviews/property-reviews";
import Map from "../../map/map";
import PlacesList from "../../places-list/places-list";
import {getRating} from "../../../common";
import {OfferPropTypes, ReviewsPropTypes, NearbyOffersPropTypes} from "../../../props";

const Property = (props) => {
  const {offers, reviews, nearbyOffers, activeLocation} = props;
  const {id} = useParams();
  const offer = offers.find((item) => item.id === +id);
  const {images, isPremium, title, rating, isFavorite, type, bedrooms, maxAdults, price, goods, host, description} = offer;

  const imagesArray = images.length > 6 ? images.splice(0, 6) : images;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              imagesArray.map((image, i) => <PropertyGallery image={image} key={i}/>)
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              isPremium && <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlink="true" href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={getRating(rating)}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  goods.map((good, i) => <PropertyInsideItem good={good} key={i}/>)
                }
              </ul>
            </div>
            <PropertyHost host={host} description={description}/>
            <PropertyReviews reviews={reviews}/>
          </div>
        </div>
        <section className="property__map map">
          <Map offers={nearbyOffers} activeLocation={activeLocation} mapStyle="PROPERTY"/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList type="NEARBY" offers={nearbyOffers}/>
        </section>
      </div>
    </main>
  );
};

Property.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes),
  reviews: PropTypes.arrayOf(ReviewsPropTypes),
  nearbyOffers: PropTypes.arrayOf(NearbyOffersPropTypes),
  activeLocation: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    activeLocation: state.city,
    offers: state.offers,
  };
};

export {Property};
export default connect(mapStateToProps)(Property);
