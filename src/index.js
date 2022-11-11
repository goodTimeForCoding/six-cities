import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from './components/app/app';
import {cards, reviewers} from './mocks/mock';
import {reducer} from './redux/reducer';
import {createAPI} from "./services/api";
import {ActionCreator} from "./redux/action";
import {checkAuth} from "./redux/thunks";
import {AuthorizationStatus} from "./const";


/*Внутри колбэк который вызываем в случае неавторизованности в api.js*/
const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

//composeWithDevTools - подружит store c DevTools в браузере
//добавляем поддержку танков хранилищу, с аргументом сконфигурированного экземпляра `axios`, чтобы была возможность обратиться к api из асинхронных действий
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api)),
));

//проверка на авторизованность
store.dispatch(checkAuth());

/* <Provider/> - компонент высшего порядка обернув наше приложение, добавляем доп. функционал App - компоненту(нашему приложению)*/
ReactDom.render(
  <Provider store={store}>
    <App cards={cards} reviewers={reviewers} />
  </Provider>,
  document.querySelector(`#root`)
);
