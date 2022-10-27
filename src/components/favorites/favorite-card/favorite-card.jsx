
import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {cardItemPropsType} from '../../prop-types/prop-types-card';

const WIDTH_OF_STARS = 20;

const FavoriteCard = (props) => {
  const {item} = props;
  const {src, price, title, placeType, rating} = item;
  const history = useHistory();
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a onClick={(evt) => {
          evt.preventDefault();
          history.push(`/offer/:id`);
        }} >
          <img className="place-card__image" src={src} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * WIDTH_OF_STARS}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#"> {title} </a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  item: cardItemPropsType.isRequired,
};

export default FavoriteCard;
