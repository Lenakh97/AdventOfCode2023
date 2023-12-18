import { toFindDuplicates } from "./toFindDuplicates";

export const groupHands = (input: string[], joker: boolean) => {
  const counts: Record<string, number> = {};
  let numberOfJokers = 0;
  input.forEach((x: string) => {
    if (x === "J" && joker === true) {
      numberOfJokers += 1;
    } else {
      counts[x] = (counts[x] || 0) + 1;
    }
  });
  let values = Object.values(counts);
  if (numberOfJokers > 0) {
    values[values.indexOf(Math.max(...values))] =
      Math.max(...values) + numberOfJokers;
  }
  if (values.length === 0) {
    values = [5];
  }
  if (values.includes(5)) {
    return 6;
  } else if (values.includes(4)) {
    return 5;
  } else if (values.includes(3) && values.includes(2)) {
    return 4;
  } else if (values.includes(3)) {
    return 3;
  } else if (values.includes(2) && toFindDuplicates(values).includes(2)) {
    return 2;
  } else if (values.includes(2)) {
    return 1;
  } else {
    return 0;
  }
};
