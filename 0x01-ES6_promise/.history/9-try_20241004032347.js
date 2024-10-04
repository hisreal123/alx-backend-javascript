#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(`${e.name}: ${e.message}`);
  }
  queue.push("Guardrail was processed");
  return queue;
}
