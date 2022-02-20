export const ActionType = {
  SELECT_CITY: `CITIES/SELECT_CITY`,
  SELECT_SORT: 'SORT/SELECT_SORT',
  LOAD_CARDS: 'DATA/LOAD_CARDS',
  };

//задача ActionCreator-ров сгенерировать объект с определённым типом и payload-ом
export const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city
  }),

  selectSort: (sortItem) => ({
    type: ActionType.SELECT_SORT,
    payload: sortItem
  }),

  loadData: (data) => ({
    type: ActionType.LOAD_CARDS,
    payload: data
  }),

  // requireAuthorization: (status) => ({
  //   type: ActionType.REQUIRED_AUTHORIZATION,
  //   payload: status,
  // })
}
