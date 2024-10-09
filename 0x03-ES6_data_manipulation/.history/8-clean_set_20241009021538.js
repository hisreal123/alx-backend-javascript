/* eslint-disable no-unused-vars */
/* eslint-disable */

const cleanset = (set, startString) => {
  const _parts = [];

  for (const elem of set) {
    if (set.elem.has(startString)) {
      _parts.push(elem);
    }
  }
};

export default cleanset;
