export const ActionType = {
  SELECT_CITY: `CITIES/SELECT_CITY`,
};

//задача ActionCreator-ров сгенерировать объект с определённым типом и payload-ом
export const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.SELECT_CITY,
    payload: city
  }),
}
