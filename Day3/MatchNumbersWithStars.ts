export const matchNumberWithStars: Record<string, number[]> = {};

/*
This function matches stars with adjacent numbers, and puts it in
a record<coordinates, [adjacent numbers]> for further calculations. 
*/
export const MatchNumbersWithStars = (
  matches: RegExpMatchArray | null,
  line: string,
  numberIndex: number,
  index: number,
  number: number
): void => {
  if (matches?.includes("*")) {
    if (
      matchNumberWithStars[
        `${line.indexOf(matches[0], numberIndex - 1)}, ${index}`
      ]
    ) {
      matchNumberWithStars[
        `${line.indexOf(matches[0], numberIndex - 1)}, ${index}`
      ]?.push(number);
    } else {
      matchNumberWithStars[
        `${line.indexOf(matches[0], numberIndex - 1)}, ${index}`
      ] = [number];
    }
  }
};
