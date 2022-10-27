const adaptToClient = (item) => {
  const adaptedItem = Object.assign(
    {},
    item,
    {
      src: item.preview_image,
      isPremium: item.is_premium,
      isFavorite: item.is_favorite,
      placeType: item.type,
      name: item.city.name,
    }
  );

  delete adaptedItem.preview_image;
  delete adaptedItem.is_premium;
  delete adaptedItem.is_favorite;
  delete adaptedItem.type;

  return adaptedItem
}


export {adaptToClient}
