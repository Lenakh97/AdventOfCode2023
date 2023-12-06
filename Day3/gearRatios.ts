import { numberWithSymbol } from "./numberWithSymbol";

/*
This function finds the sum of the part numbers in the engine schematics
*/
export const gearRatios = (input: string): number => {
  let totalSum = 0;
  let inp = input.split(/\r?\n/);
  inp.forEach((line, index) => {
    const matches = line.match(/(\d+)/g);
    let numberIndex = -1;
    let prevMatchNumber = "1";
    matches?.forEach((match) => {
      numberIndex = line.indexOf(match, numberIndex + prevMatchNumber.length);
      const lines =
        (inp[index - 1] ?? "") + "\n" + inp[index] + "\n" + inp[index + 1];
      const hasSymbol = numberWithSymbol(
        Number(match),
        numberIndex,
        lines,
        index
      );
      hasSymbol ? (totalSum += Number(match)) : (totalSum += 0);
      prevMatchNumber = match;
    });
  });
  return totalSum;
};
