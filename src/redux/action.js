export const ActionType = {
  SELECT_CITY: `DATA/SELECT_CITY`,
  SELECT_CARD: `DATA/SELECT_CARD`,
  SELECT_SORT: 'DATA/SELECT_SORT',
  LOAD_CARDS: 'DATA/LOAD_CARDS',
  REDIRECT_TO_ROUTE: `USER/REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: 'USER/REQUIRED_AUTHORIZATION',
  GET_EMAIL: 'USER/GET_EMAIL',
};

//задача ActionCreator-ров сгенерировать объект с определённым типом и payload(полезная нагрузка)
export const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city
  }),

  selectSort: (SortItem) => ({
    type: ActionType.SELECT_SORT,
    payload: SortItem
  }),

  loadData: (data) => ({
    type: ActionType.LOAD_CARDS,
    payload: data
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  selectCard: (card) => ({
    type: ActionType.SELECT_CARD,
    payload: card
  }),

  getEmail: (email) => ({
    type: ActionType.GET_EMAIL,
    payload: email,
  }),
}
