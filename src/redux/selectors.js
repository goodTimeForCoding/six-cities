import {sortItem} from '.././const';

const getFilterOffers = (state) => {
  switch (state.selectedSort) {
    case sortItem.ASC_PRICE: {
      return state.offers.slice().sort(
        function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        }
      );
    }

    case sortItem.DESC_PRICE: {
      return state.offers.slice().sort(
        function (a, b) {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
        }
      );
    }

    case sortItem.TOP: {
      return state.offers.slice().sort(
        function (a, b) {
          if (a.rating < b.rating) {
            return 1;
          }
          if (a.rating > b.rating) {
            return -1;
          }
          return 0;
        }
      );
    }

    default: {
      return state.offers;
    }
  }
};

export {getFilterOffers}
