/* eslint-disable no-unused-vars */
/* eslint-disable */

const cleanset = (set, startString) => {
  const _parts = [];

  for (const elem of set) {
    if (typeof  elem === 'string' && elem.startsWith(startString)) {
      elemSubString = elem
    }
  }
};

export default cleanset;
