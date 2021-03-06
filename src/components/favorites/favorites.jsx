import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteCard from './favorite-card/favorite-card';
import PropTypes from 'prop-types';
import {cardsPropsType} from '../prop-types/prop-types-card';

const Favorites = (props) => {
  const {cards} = props;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
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
                        <Link className="locations__item-link" to = '#'>
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
