import PropTypes from 'prop-types';

const cardItemPropsType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  placeType: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  name: PropTypes.string.isRequired,
});



const cardItemsPropsType = PropTypes.arrayOf(cardItemPropsType).isRequired;

const cityItemPropsType = PropTypes.shape({
  city: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  items: cardItemsPropsType,
})

const cardsPropsType = PropTypes.arrayOf(cityItemPropsType).isRequired;

const reviewersPropsType = PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape(
          {
            avatarUrl: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isPro: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
          }
      )
    })
);


export {cardItemsPropsType, cardsPropsType, cardItemPropsType, reviewersPropsType, cityItemPropsType};
