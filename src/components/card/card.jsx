import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {cardItemPropsType} from '../prop-types/prop-types-card';

const WIDTH_OF_STARS = 20;

const CardItem = (props) => {
  const {item, onMouseEnter, onMouseLeave} = props;
  const {src, isPremium, price, title, placeType, isFavorite, rating, id} = item;
  const history = useHistory();
  const premiumSticker = <div className="place-card__mark"> <span>Premium</span> </div>;
  const favoriteButton = `place-card__bookmark-button--active`;

  const handleMouseEnter = () => {
    onMouseEnter(item);
  }

  const handleMouseLeave = () => {
    onMouseLeave();
  }


  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isPremium && premiumSticker}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a onClick={(evt) => {
          evt.preventDefault();
          history.push(`/offer/${id}`);
        }} >
          <img className="place-card__image" src={src} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && favoriteButton} button`} type="button">
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
          <a onClick={(evt) => {
            evt.preventDefault();
            history.push(`/offer/${id}`);
          }}> {title} </a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>

  );
};

CardItem.defaultProps = {
  articleClass: () => undefined,
  item: {},
  onMouseEnter: () => undefined,
  onMouseLeave: () => undefined,
};

CardItem.propTypes = {
  item: cardItemPropsType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};


export default CardItem;
