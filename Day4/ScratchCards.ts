import { addNumbersToScratchcard } from "./addNumbersToScratchcard";

export const ScratchCards = (
  input: string
): { part1: number; part2: number } => {
  let linePoints = 0;
  let scratchCards: number[] = [];
  input.split(/\r?\n/).forEach((line, index) => {
    const splittedLine = line.split(/:|[|]/);
    const winningNumbers = splittedLine[1]?.split(" ");
    const scratchCardNumbers = splittedLine[2]?.split(" ");
    const filteredArray = winningNumbers?.filter(
      (value) => scratchCardNumbers?.includes(value) && value !== ""
    );
    if (filteredArray !== undefined) {
      const numbersOfWinningNumbers = filteredArray?.length;
      const points =
        numbersOfWinningNumbers === 0 ? 0 : 2 ** (numbersOfWinningNumbers - 1);
      linePoints += points;
      let cardIndex = index + 2;
      addNumbersToScratchcard(filteredArray, scratchCards, cardIndex, index);
      scratchCards.forEach((number) => {
        if (number === index + 1) {
          addNumbersToScratchcard(
            filteredArray,
            scratchCards,
            cardIndex,
            index
          );
        }
      });
    }
    scratchCards.push(index + 1);
  });
  return { part1: linePoints, part2: scratchCards.length };
};
