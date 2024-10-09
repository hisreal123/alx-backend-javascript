/* eslint-disable no-unused-vars */
/* eslint-disable */

const cleanset = (set, startString) => {
  const _parts = [];

  for (const elem of set) {
    if (typeof  elem === 'string' && elem.startsWith(startString)) {
      elemSubString = elem.substring(startString.length);
      _parts.push(elemSubString);
    }
  }

  return _parts.join()
};

export default cleanset;
