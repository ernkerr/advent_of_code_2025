// The puzzle input contains a sequence of rotations, one per line
// It starts with an L or R to indicate direction, L to lower numbers R to higher numbers
// The dial is a circle so turning it left from 0 one click makes it point at 0
// turning the dial right from 99 one click makes it point at 0

// The dial starts by pointing at 50

// The password is the number of times the dial is left pointing at 0 after any rotation in the sequence

// L68
// L30
// R48
// L5
// R60
// L55
// L1
// L99
// R14
// L82
// Following these rotations would cause the dial to move as follows:

// The dial starts by pointing at 50.
// The dial is rotated L68 to point at 82.
// The dial is rotated L30 to point at 52.
// The dial is rotated R48 to point at 0.
// The dial is rotated L5 to point at 95.
// The dial is rotated R60 to point at 55.
// The dial is rotated L55 to point at 0.
// The dial is rotated L1 to point at 99.
// The dial is rotated L99 to point at 0.
// The dial is rotated R14 to point at 14.
// The dial is rotated L82 to point at 32.
// Because the dial points at 0 a total of three times during this process, the password in this example is 3.

import { input } from "./day_1_input.js";

// Step 1: get list of input
const turns = input.trim().split("\n");
// console.log(turns); // output is an array !

// Step 2: set up "dial" & counter
let dial = 50;
let answer = 0;

// Step 3: set up a function that can carry out each of the turns
// 3.2 handle wrapping numbers within the 0-99 range / normalize values to a specific range
turns.forEach((turn) => {
  // 3.1 determine the direction
  // for each turn we want to get the first char
  const direction = turn[0]; // R OR L
  //   console.log(direction);

  // 3.2 determine the number of clicks
  const distance = Number(turn.slice(1, turn.length + 1));
  //   console.log(distance);

  // 3.3 move the dial
  if (direction == "R") {
    dial += distance;
  } else {
    dial -= distance;
  }

  if (wrapDial(dial) === 0) {
    answer++;
  }
});

function wrapDial(n) {
  return ((n % 100) + 100) % 100;
}

console.log(answer);
