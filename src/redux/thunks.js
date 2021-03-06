import {ActionCreator} from "./action";
// import {AuthorizationStatus} from "../const";

const fetchCardsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(ActionCreator.loadData(data))
    })
);

export  {fetchCardsList};

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(`/login`)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(`/login`, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );
