/* eslint-disable no-unused-vars */
/* eslint-disable */

const hasValuesFromArray = (set, array) => {
  array.forEach(element => {
    set.has(element) ? true : false;
  });
}

export default hasValuesFromArray;