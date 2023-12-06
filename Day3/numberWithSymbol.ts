import { MatchNumbersWithStars } from "./MatchNumbersWithStars";

/*
This function checks if a number is adjacent to a symbol. It also
runs the MatchNumbersWithStars function while going through the text. 
It returns true/false.
*/

export const numberWithSymbol = (
  number: number,
  numberIndex: number,
  lines: string,
  lineIndex: number
): Boolean => {
  const length = number.toString().length;
  const specialChars = /[^\d\.]/g;
  const booleanArray: Boolean[] = [];
  let index = lineIndex - 1;
  lines.split(/\r?\n/).forEach((line) => {
    const newLine = line.slice(
      numberIndex >= 1 ? numberIndex - 1 : 0,
      numberIndex + length + 1
    );
    const matches = newLine.match(specialChars);
    MatchNumbersWithStars(matches, line, numberIndex, index, number); //part 2
    booleanArray.push(matches === null ? false : true);
    index += 1;
  });

  return booleanArray.includes(true) ? true : false;
};
