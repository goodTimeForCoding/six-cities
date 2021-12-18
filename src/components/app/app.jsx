import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main/main';
import ErrorPage from '../error/error';
import FavoritesPage from '../favorites/favorites';
import LoginPage from '../login/login';
import RoomPage from '../room/room';
import PropTypes from 'prop-types';

const App = (props) => {
  const {dataCards} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage dataCards = {dataCards}/>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <RoomPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  dataCards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        href: PropTypes.string,
        src: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        placeType: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired
      })
  ).isRequired
};

export default App;
