import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {dataCards} from './mock-data';


ReactDOM.render(
    <App dataCards = {dataCards}/>,
    document.querySelector(`#root`)
);
