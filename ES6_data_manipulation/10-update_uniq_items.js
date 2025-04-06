const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((value, item) => {
    if (value === 1) {
      map.set(item, 100);
    }
  });
};

export default updateUniqueItems;
