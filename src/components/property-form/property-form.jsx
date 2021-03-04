import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {updateComments} from "../store/api/api-actions";
import {CommentLength} from "../../const";
import {stars} from "../../const";
import Error from "../error/error";
import {setIsError} from "../store/action-creators";

const PropertyForm = () => {
  const {id} = useParams();
  const [data, setData] = useState({
    review: ``,
    rating: ``
  });
  const dispatch = useDispatch();
  const {isDisabled, isError} = useSelector((state) => state.PROPERTY);

  useEffect(() => {
    if (!isDisabled && !isError) {
      setData(() => ({
        review: ``,
        rating: ``
      }));
    }
  }, [isDisabled, isError]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => dispatch(setIsError(false)), 3000);
    }
  }, [isError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(updateComments({
      comment: data.review,
      rating: data.rating
    }, id));
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      {
        isError && <Error/>
      }
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          stars.map((star) => {
            return (
              <React.Fragment key={star}>
                <input
                  onChange={handleFieldChange}
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={`${star}`}
                  id={`${star}-stars`}
                  type="radio"
                  disabled={isDisabled}
                  checked={star === data.rating}
                />
                <label
                  htmlFor={`${star}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title="perfect"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlink="true" href="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })
        }
      </div>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={CommentLength.MAX}
        disabled={isDisabled}
        value={data.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={data.review.length < CommentLength.MIN || !data.rating}
        >Submit</button>
      </div>
    </form>
  );
};

export default PropertyForm;
