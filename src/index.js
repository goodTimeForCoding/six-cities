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


const api = createAPI();

//добавляем поддержку танков хранилищу, с аргумент сконфигурированного экземпляра `axios`, чтобы была возможность обратиться к нему из действия
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
));


/* <Provider/> - компонент высшего порядка обернув наше приложение, добавляем доп. функционал App - компоненту*/
ReactDom.render(
    <Provider store = {store}>
      <App cards = {cards} reviewers = {reviewers}/>
    </Provider>,
    document.querySelector(`#root`)
);
