const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
}

const sortItem = {
  POPULAR: `Popular`,
  ASC_PRICE: 'Price: low to high',
  DESC_PRICE: 'Price: high to low',
  TOP: 'Top rated first',
}

const sortItems = Object.values(sortItem);


export {AuthorizationStatus, sortItem, sortItems};
