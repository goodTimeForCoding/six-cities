import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import CitiesList from '../cities-list/cities-list';
import PlacesCount from '../places-count/places-count';
import Map from '../map/map';
import Sort from '../sort/sort';
import Spinner from '../spinner/spinner';
import Header from '../header/header';
import {fetchCardsList} from '../../redux/thunks';
import {connect} from 'react-redux';
import {cardItemsPropsType} from '../prop-types/prop-types-card';



const MainPage = (props) => {
  const {citiesData, isDataLoaded, onLoadData, onCardClick} = props;
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

  return (
    <div className="page page--gray page--main">
      <Header />
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
                <CardsList onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onCardClick={onCardClick} />
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
  onCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    citiesData: state.offers,
    isDataLoaded: state.isDataLoaded,
    hotels: state.hotels,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData () {
    dispatch(fetchCardsList());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
