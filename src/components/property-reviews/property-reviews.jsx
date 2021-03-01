import React from "react";
import PropTypes from "prop-types";
import PropertyForm from "../property-form/property-form";
import {ReviewsPropTypes, UserInfoPropTypes} from "../../props";
import PropertyReviewItem from "../property-review-item/property-review-item";
import {connect} from "react-redux";

const PropertyReviews = ({reviews, authInfo, id}) => {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <PropertyReviewItem review={review} key={review.id}/>)
        }
      </ul>
      {
        authInfo && <PropertyForm id={id}/>
      }
    </section>
  );
};

PropertyReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewsPropTypes),
  authInfo: UserInfoPropTypes,
  id: PropTypes.string
};

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
});

export default connect(mapStateToProps)(PropertyReviews);
