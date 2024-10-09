/* eslint-disable no-unused-vars */
/* eslint-disable */

const cleanset = (set, startString) => {
  const _parts = [];

  for (const elem of set.values()) {
    if (typeof  elem === 'string' && elem.startsWith(startString)) {
      const elemSubString = elem.substring(startString.length);
      if (elemSubString && elemSubString !== elem){
        _parts.push(elemSubString);
      }
    }
  }

  return _parts.join('-');
};

export default cleanset;