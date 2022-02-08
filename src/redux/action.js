export const ActionType = {
  SELECT_CITY: `CITIES/SELECT_CITY`,
  SELECT_SORT: 'SORT/SELECT_SORT',
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
  })
}
