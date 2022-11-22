import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../card/card';
import {connect} from 'react-redux';
import {cardItemsPropsType} from '../prop-types/prop-types-card';
import {getFilterOffers} from '../../redux/selectors'

const CardsList = (props) => {
  const {offersData, onMouseEnter, onMouseLeave, onCardClick} = props;

  return (
    <>
      {
        offersData.map((item) => {
          return (
            <CardItem
              item={item}
              key={item.id}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onCardClick={onCardClick}
            />
          );
        })
      }
    </>
  );
};

CardsList.propTypes = {
  offersData: cardItemsPropsType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    offersData: getFilterOffers(state)
  };
};

export {CardsList}
export default connect(mapStateToProps, null)(CardsList);
