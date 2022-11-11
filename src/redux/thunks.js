import {ActionCreator} from "./action";
import {CitiesList} from "../mocks/mock";
import {adaptToClient} from "../redux/utils";
import {AuthorizationStatus} from ".././const";

/*Здесь описываем те же экшены только асинхронные, которые не объекты а функции и этим функциям будет доступен диспатч благодаря Middleware, 
и мы сможем после того как запрос к серверу зарезолвиться уже синхронно вызвать диспатч и сообщить стору данные*/

//получение данных с сервера (эта функция асинхронный action), api это api axios, который передаём через параметры,
//после асинхронного action(когда промис зарезолвиться) будет вызван обычный синхронный action
const fetchCardsList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`)
    .then(({data}) => {
      const res = data.map((item) => adaptToClient(item));
      CitiesList.map((item) => {
        item.items = [];
        res.forEach((it) => {
          if (item.city === it.city.name) {
            item.items.push(it);
          }
        });
      });
      dispatch(ActionCreator.loadData(CitiesList));
    });

//провера наличия авторизации
const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

//отправки данных для прохождения аутентификации
const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);


export {fetchCardsList, checkAuth, login};

