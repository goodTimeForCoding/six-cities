import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteCard from './favorite-card/favorite-card';
import PropTypes from 'prop-types';
import {cardsPropsType} from '../prop-types/prop-types-card';
import Header from '../header/header';

const Favorites = (props) => {
  const {cards} = props;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {cards.map((card) => {
                return (
                  <li key={`${card.id}`} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to='#'>
                          <span>{card.city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {card.items.map((item) => {
                        return (
                          <FavoriteCard
                            item={item}
                            key={item.id}
                          />
                        );
                      })}
                    </div>
                  </li>);
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};


Favorites.propTypes = {
  cards: cardsPropsType,
};

export default Favorites;
