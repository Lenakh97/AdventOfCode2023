import { compareCharacters } from "./compareCharacters";

export const compareArraysInGroup = (
  arraysInGroup: any,
  joker: boolean
): number => {
  const charsA = arraysInGroup[0].split("");
  const charsB = arraysInGroup[1].split("");
  for (let i = 0; i < Math.min(charsA.length, charsB.length); i++) {
    const charComparison = compareCharacters(charsA[i], charsB[i], joker);
    if (charComparison !== 0) {
      return charComparison;
    }
  }
  return charsA.length - charsB.length;
};

