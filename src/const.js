const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
}

const SortItem = {
  POPULAR: `Popular`,
  ASC_PRICE: 'Price: low to high',
  DESC_PRICE: 'Price: high to low',
  TOP: 'Top rated first',
}

const cities = [
  {
    id: 111,
    city: `Paris`,
  },
  {
    id: 222,
    city: `Cologne`,
  },
  {
    id: 333,
    city: `Brussels`,
  },
  {
    id: 444,
    city: `Amsterdam`,
  },
  {
    id: 555,
    city: `Hamburg`,
  },
  {
    id: 666,
    city: `Dusseldorf`,
  },
];

const sortItems = Object.values(SortItem);


export {AuthorizationStatus, SortItem, sortItems, cities};
