import React, { useState, useCallback } from 'react';
import CardsList from '../cards-list/cards-list';
import CitiesList from '../cities-list/cities-list';
import PlacesCount from '../places-count/places-count';
import Map from '../map/map';
import Sort from '../sort/sort';
import {connect} from 'react-redux';
import { cardItemsPropsType} from '../prop-types/prop-types-card';


const MainPage = (props) => {
  const { citiesData } = props;
  const [activeCard, setactiveCard] = useState(null);
  const handleMouseEnter = useCallback((item) => setactiveCard(item), []);
  const handleMouseLeave = useCallback(() => setactiveCard(null), []);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href={`#`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list" >
              <CitiesList />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
            <PlacesCount />
            <Sort />
            <div className="cities__places-list places__list tabs__content">
              <CardsList onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
            </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map cards={citiesData} activeCard={activeCard} />
            </section>
          </div>
        </div>
        </div>
      </main>
    </div >
  );
};

MainPage.propTypes = {
  citiesData: cardItemsPropsType,
};

const mapStateToProps = (state) => {
  return {
    citiesData: state.offers,
  };
};


export  {MainPage};
export default connect(mapStateToProps, null)(MainPage);
