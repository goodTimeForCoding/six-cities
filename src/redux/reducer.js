import {ActionType} from './action';
import {cards} from '../mocks/mock';


const initialState = {
  offers: cards[0].items,
  cities: cards,
  selectedCity: {
    id: cards[0].id
  }
};

// в зависимости от ActionType мы меняем reducer; Для reducer initialState в замыкании
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return {
        ...state, //на основе предыдущего состояни формируем полный объект состояния, получаем снимки состояний, для того чтобы работала кнопка вперёд назад
        offers: action.payload.items,
      };

    default:
      return state;
  }
};


export {reducer};
