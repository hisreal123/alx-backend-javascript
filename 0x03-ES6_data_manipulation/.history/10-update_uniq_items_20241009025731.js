/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateUniqueItems = (map) => {
  return map.forEach(([key, value]) => {
    if (!(map instanceof Map)) {
      throw new Error('Input must be a Map');
    }
    if (value === 1){
      map.set(key, 100);
    }
  });
};
export default updateUniqueItems;