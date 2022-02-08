import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';// для связи изолированного redux с react
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {cards, reviewers} from './mocks/mock';
import {reducer} from './redux/reducer';

const store = createStore(reducer, composeWithDevTools()
);
/* <Provider/> - компонент высшего порядка обернув наше приложение, добавляем доп. функционал App - компоненту*/
ReactDOM.render(
    <Provider store = {store}>
      <App cards = {cards} reviewers = {reviewers}/>
    </Provider>,
    document.querySelector(`#root`)
);
