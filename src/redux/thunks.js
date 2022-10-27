import {ActionCreator} from "./action";
import {CitiesList} from "../mocks/mock";
import {adaptToClient} from "../redux/utils";
// import {AuthorizationStatus} from "../const";

const fetchCardsList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({data}) => {
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

export {fetchCardsList};

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(`/login`)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(`/login`, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );
