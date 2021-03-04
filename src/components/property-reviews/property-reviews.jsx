import React from "react";
import PropTypes from "prop-types";
import PropertyForm from "../property-form/property-form";
import {ReviewsPropTypes} from "../../props";
import PropertyReviewItem from "../property-review-item/property-review-item";
import {useSelector} from "react-redux";

const PropertyReviews = ({reviews}) => {

  const {authInfo} = useSelector((state) => state.USER);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <PropertyReviewItem review={review} key={review.id}/>)
        }
      </ul>
      {
        authInfo && <PropertyForm/>
      }
    </section>
  );
};

PropertyReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewsPropTypes),
  id: PropTypes.string
};

export default PropertyReviews;
