import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {reviewersPropsType} from '../../prop-types/prop-types-card';
import PropTypes from 'prop-types';

const ReviewsList = (props) => {
  const {reviewers} = props;
  const reviewsAmount = reviewers.length;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ul className="reviews__list">
        {reviewers.map((item) => {
          return (
            <li className="reviews__item" key={item.id}>
              <ReviewsItem item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
ReviewsList.propTypes = {
  reviewers: reviewersPropsType,
};

export default ReviewsList;
