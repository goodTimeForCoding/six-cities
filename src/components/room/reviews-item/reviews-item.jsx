import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const ReviewsItem = (props) => {
  const {item} = props;
  const {comment, rating, user, date} = item;
  const addStars = (stars) => {
    if (stars === 1) {
      return `20%`;
    } else if (stars === 2) {
      return `40%`;
    } else if (stars === 3) {
      return `60%`;
    } else if (stars === 4) {
      return `80%`;
    } else if (stars === 5) {
      return `100%`;
    }
  };
  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: addStars(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dayjs(date).format(`MMMM YYYY`)}</time>
      </div>
    </>
  );
};

export default ReviewsItem;
