/* eslint-disable no-unused-vars */
/* eslint-disable */

const createInt8TypedArray = (length, position, value) => {
  const  typedArray = new ArrayBuffer(8);
  const dataView = new DataView(typedArray);
  dataView.setInt8(position, value);
};
export default createInt8TypedArray;