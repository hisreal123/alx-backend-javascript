/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error('Cannot proces');
  }
  map.forEach(([key, value]) => {
    if (value === 1){
      map.set(key, 100);
    }
  });
};
export default updateUniqueItems;