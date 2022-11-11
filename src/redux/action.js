export const ActionType = {
  SELECT_CITY: `DATA/SELECT_CITY`,
  SELECT_SORT: 'DATA/SELECT_SORT',
  LOAD_CARDS: 'DATA/LOAD_CARDS',
  REQUIRED_AUTHORIZATION: 'USER/REQUIRED_AUTHORIZATION',
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
  })
}
