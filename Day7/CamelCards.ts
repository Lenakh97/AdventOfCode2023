import { groupHands } from "./groupHands";
import { compareArraysInGroup } from "./compareArraysInGroup";

export const CamelCards = (input: string, joker: boolean): number => {
  const allGroups: Record<string, Array<string[]>> = {};

  input.split(/\r?\n/).forEach((line) => {
    const lineBet = line.split(" ");
    const cards = lineBet[0]?.split("");
    const score = groupHands(cards ?? [], joker);
    if (allGroups[score]) {
      // Put cards into the correct groups in allGroups
      allGroups[score]?.push(lineBet);
    } else {
      allGroups[score] = [lineBet];
    }
  });

  const val = Object.values(allGroups);
  val.forEach((group) => {
    group.sort((a: string[], b: string[]) =>
      compareArraysInGroup([a[0], b[0]], joker)
    );
  });
  let resArr: Array<string[]> = [];
  for (const arrays of val) {
    resArr = resArr.concat(arrays);
  }
  let returnSum = 0;
  resArr.forEach((card: string[], index: number) => {
    returnSum += Number(card[1]) * (index + 1);
  });
  return returnSum;
};
