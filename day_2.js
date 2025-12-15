// identify the invalid IDs

// puzzle input: product ID range
// single line, seperated by commas
// each range gives its first ID and last ID seperated by a dash
// ex: 446443-446449,38593856-38593862,565653-565659

// identify invalid IDs include sequences of digits repeated twice
// that don't have a leading zero (0101 isn't, 101 is a valid ID)
// ex: 55, 6464, 123123

// Your job is to find all of the invalid IDs that appear in the given ranges. In the above example:
// 11-22 has two invalid IDs, 11 and 22.
// 95-115 has one invalid ID, 99.
// 998-1012 has one invalid ID, 1010.
// 1188511880-1188511890 has one invalid ID, 1188511885.
// 222220-222224 has one invalid ID, 222222.
// 1698522-1698528 contains no invalid IDs.
// 446443-446449 has one invalid ID, 446446.
// 38593856-38593862 has one invalid ID, 38593859.
// The rest of the ranges contain no invalid IDs.
// Adding up all the invalid IDs in this example produces 1227775554.

// Step 1: load in the puzzle input (single long string)
import { input } from "./day_2_input.js";

// Step 2: Split input into range strings like "11-22"
const rangeStrings = input.split(",");

// Step 3: Convert each range string into start/end numbers
const ranges = rangeStrings.map((range) => {
  const parts = range.split("-");
  const start = Number(parts[0]);
  const end = Number(parts[1]);
  return { start, end };
});

// Step 4: Function to check if an ID is invalid
// An ID is invalid if it is made of some digit sequence repeated twice
function isInvalidId(number) {
  const s = number.toString();
  return /^(\d+)\1$/.test(s);
}

// Step 5: Loop through all ranges and sum invalid IDs
let sum = 0;

for (const range of ranges) {
  for (let id = range.start; id <= range.end; id++) {
    if (isInvalidId(id)) {
      sum += id;
    }
  }
}

// Step 6: Output the answer
console.log(sum);
