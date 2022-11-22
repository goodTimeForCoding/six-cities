import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';//Router as BrowserRouter для использования своей сконфигурированной history
import MainPage from '../main/main';
import ErrorPage from '../error/error';
import FavoritesPage from '../favorites/favorites';
import LoginPage from '../login/login';
import RoomPage from '../room/room';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {cardsPropsType, reviewersPropsType} from '../prop-types/prop-types-card';

const App = (props) => {
  const {cards} = props;
  const {reviewers} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/"
          render={({history}) => {
            return (
              <MainPage
                onCardClick={(id) => history.push(`/offer/:${id}`)}
              />
            );
          }}
        />
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute exact path="/favorites"
          render={() => <FavoritesPage cards={cards} />}>
        </PrivateRoute>
        <Route exact path="/offer/:id">
          <RoomPage
            neighbourhoodList={cards[0].items.slice(0, 3)}
            reviewers={reviewers} />
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
