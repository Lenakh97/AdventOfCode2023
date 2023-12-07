export const addNumbersToScratchcard = (
  filteredArray: string[],
  scratchCards: number[],
  cardIndex: number,
  index: number
): void => {
  filteredArray.forEach(() => {
    scratchCards.push(cardIndex);
    cardIndex += 1;
  });
  cardIndex = index + 2;
};
