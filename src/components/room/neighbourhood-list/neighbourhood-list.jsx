import React from 'react';
import CardsList from '../cards-list/cards-list';
import {cardsPropsType} from '../prop-types/prop-types-card';

const NeighbourhoodList = (props) => {
  return (
    <CardsList/>
  );

};

NeighbourhoodList.propTypes = {
  cards: cardsPropsType,
};


export default NeighbourhoodList;
