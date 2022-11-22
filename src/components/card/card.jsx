import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {cardItemPropsType} from '../prop-types/prop-types-card';
import {ActionCreator} from '../../redux/action';

const WIDTH_OF_STARS = 20;

const CardItem = (props) => {
  const {item, onMouseEnter, onMouseLeave, onClick, onCardClick} = props;
  const {src, isPremium, price, title, placeType, isFavorite, rating, id} = item;
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
        <a onClick={() => {
          onClick(id);
          onCardClick(id);
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
          <a onClick={() => {
            onClick(id);
            onCardClick(id);
          }}> {title} </a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>

  );
};

CardItem.defaultProps = {
  onMouseEnter: () => undefined,
  onMouseLeave: () => undefined,
  onClick: () => undefined,
  onCardClick: () => undefined,
};

CardItem.propTypes = {
  item: cardItemPropsType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (it) => {
      dispatch(ActionCreator.selectCard(it));
    },
  };
};

export {CardItem};
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
