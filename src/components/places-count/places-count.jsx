import React from 'react';
import {connect} from 'react-redux';
import {cardItemsPropsType} from '../prop-types/prop-types-card';

const PlacesCount = (props) => {
  const {places} = props;
  const placesCount = places.length;
  const cityName =  places[0].name;
  return (
    <>
       <b className="places__found">{placesCount} places to stay in {cityName}</b>
    </>
  );
};

PlacesCount.defaultProps = {
  places: {},
};

PlacesCount.propTypes = {
  places: cardItemsPropsType,
};

const mapStateToProps = (state) => {
  return {
    places: state.offers
  };
};

export {PlacesCount}
export default connect(mapStateToProps, null)(PlacesCount);
