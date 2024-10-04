#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */ 
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName: firstName,
      lastName: lastName,
    });
  });
}
