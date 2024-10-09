/* eslint-disable no-unused-vars */
/* eslint-disable */

const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw new Error("Position outside range");
  }
  const buf = new DataView(new Arr)
  dataView.setInt8(position, value);
  return typedArray;
};
export default createInt8TypedArray;
