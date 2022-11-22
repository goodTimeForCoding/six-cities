import {ActionCreator} from "./action";
import {cities} from "../const";
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
      cities.map((item) => {
        item.items = [];
        res.forEach((it) => {
          if (item.city === it.city.name) {
            item.items.push(it);
          }
        });
      });
      dispatch(ActionCreator.loadData(cities));
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
    .then(({data}) => {dispatch(ActionCreator.getEmail(data.email))})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute('/')))
);


export {fetchCardsList, checkAuth, login};

