import React from 'react';
import PropTypes from 'prop-types';
import CardItem from '../card/card';
import {connect} from 'react-redux';
import {cardItemsPropsType} from '../prop-types/prop-types-card';
import {getFilterOffers} from '../../redux/selectors'

const CardsList = (props) => {
  const {offersData, onMouseEnter, onMouseLeave} = props;

  return (
    <>
      {
        offersData.map((item)=> {
          return (
            <CardItem
              item={item}
              key={item.id}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          );
        })
      }
    </>
  );
};

CardsList.defaultProps = {
  offersData: {},
  onMouseEnter: () => undefined,
  onMouseLeave: () => undefined,
};

CardsList.propTypes = {
  offersData: cardItemsPropsType,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    offersData: getFilterOffers(state)
  };
};

export {CardsList}
export default connect(mapStateToProps, null)(CardsList);
