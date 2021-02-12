import React from "react";
import PropTypes from "prop-types";
import PropertyForm from "../property-form/property-form";
import {ReviewsPropTypes} from "../../props";
import PropertyReviewItem from "../property-review-item/property-review-item";

const PropertyReviews = ({reviews}) => {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <PropertyReviewItem review={review} key={review.id}/>)
        }
      </ul>
      <PropertyForm/>
    </section>
  );
};

PropertyReviews.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  }),
  description: PropTypes.string,
  reviews: PropTypes.arrayOf(ReviewsPropTypes)
};

export default PropertyReviews;
