import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main/main';
import ErrorPage from '../error/error';
import FavoritesPage from '../favorites/favorites';
import LoginPage from '../login/login';
import RoomPage from '../room/room';
import PropTypes from 'prop-types';
import {cardsPropsType, reviewersPropsType} from '../prop-types/prop-types-card';

const App = (props) => {
  const {cards} = props;
  const {reviewers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites" >
          <FavoritesPage cards = {cards}/>
        </Route>
        <Route exact path="/offer/:id">
          <RoomPage neighbourhoodList = {cards[0].items.slice(0, 3)} reviewers = {reviewers}/>
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: cardsPropsType,
  reviewers: reviewersPropsType,
};

export default App;
