/* eslint-disable no-unused-vars */
/* eslint-disable */

const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw new Error("Position outside range");
  }
  const 
  dataView.setInt8(position, value);
  return typedArray;
};
export default createInt8TypedArray;
