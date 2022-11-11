import {ActionType} from "./action";
import {AuthorizationStatus, SortItem, sortItems} from '.././const';

const initialState = {
  offers: [],
  cities: [],
  selectedCity: null,
  sortItems: sortItems,
  selectedSort: SortItem.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  hotels: []
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

    case ActionType.LOAD_CARDS: {
      return {
        ...state,
        cities: action.payload,
        offers: action.payload[0].items,
        selectedCity: action.payload[0].id,
        isDataLoaded: true,
      };
    }

    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export {reducer};
