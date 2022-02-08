import { ActionType } from "./action";
import { cards, sortItem, sortItems } from "../mocks/mock";

const initialState = {
  offers: cards[0].items,
  cities: cards,
  selectedCity: cards[0].id,
  sortItems: sortItems,
  selectedSort: sortItem.POPULAR,
};

// в зависимости от ActionType мы меняем reducer; Для reducer initialState в замыкании
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY: {
      return {
        ...state, //на основе предыдущего состояни формируем полный объект состояния, получаем снимки состояний, для того чтобы работала кнопка вперёд назад
        offers: action.payload.items,
        selectedCity: action.payload.id,
      };
    }

    case ActionType.SELECT_SORT: {
      return {
        ...state,
        selectedSort: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
