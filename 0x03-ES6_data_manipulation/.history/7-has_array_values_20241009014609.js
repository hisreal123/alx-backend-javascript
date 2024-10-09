/* eslint-disable no-unused-vars */
/* eslint-disable */

const hasValuesFromArray = (set, array) => {
  array.map(element => {
    if (set.has(element)) {
      return true;
    } else {
      return false;
    }
  }) 
}