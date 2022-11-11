import React, {useState, useCallback, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import CitiesList from '../cities-list/cities-list';
import PlacesCount from '../places-count/places-count';
import Map from '../map/map';
import Sort from '../sort/sort';
import Spinner from '../spinner/spinner';
import {fetchCardsList} from '../../redux/thunks';
import {connect} from 'react-redux';
import {cardItemsPropsType} from '../prop-types/prop-types-card';
import {AuthorizationStatus} from '../../const';


const MainPage = (props) => {
  const {citiesData, isDataLoaded, onLoadData, authorizationStatus} = props;
  const [activeCard, setactiveCard] = useState(null); //создаём State и храним данные null по дэфолту
  const handleMouseEnter = useCallback((item) => setactiveCard(item), []); //все локальные колбэки(которые находятся внутри текущего компонента) начинаются с handle все которые передаём дальше начинаются с on
  const handleMouseLeave = useCallback(() => setactiveCard(null), []);

  //хук useEffect - позволяет сделать что-то на старте рендера нашего компонента и потом при следующих рендерах если массив зависимостей не изменяется то эти колбэки не вызываются
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <Spinner />
    );
  }

  const changeAuthLogo = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Link to='/' className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
      </Link>
    }
    return <Link to='/login' className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">Sign In</span>
    </Link>
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to='/' className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {changeAuthLogo()}
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
  isDataLoaded: PropTypes.bool.isRequired,
  loadData: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    citiesData: state.offers,
    isDataLoaded: state.isDataLoaded,
    hotels: state.hotels,
    authorizationStatus: state.authorizationStatus
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData () {
    dispatch(fetchCardsList());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
