/* eslint-disable no-unused-vars */
/* eslint-disable */

const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw new Error("Position outside range");
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length)
  buf.setInt8(position, value);
  return bug;
};
export default createInt8TypedArray;
