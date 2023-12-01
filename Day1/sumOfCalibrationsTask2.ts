import { textToNumber } from "./textToNumber";

export const sumOfCalibrationVals3 = (input: string) => {
  let sum = 0;
  input.split(/\r?\n/).forEach((line) => {
    sum += getCalibrationValueWithText(line);
  });
  return sum;
};

export const getCalibrationValueWithText = (line: string) => {
  // Find the first number
  const matchesFirst = line.match(
    /(\d+)|one|two|three|four|five|six|seven|eight|nine/
  );
  const first =
    textToNumber(matchesFirst?.[0] ?? "") ?? matchesFirst?.[0].slice(0, 1);

  // Find the last number
  const reversedLine = line.split("").reverse().join("");
  const reversedMatch = reversedLine.match(
    /(\d+)|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/
  );
  const last =
    textToNumber(reversedMatch?.[0].split("").reverse().join("") ?? "") ??
    reversedMatch?.[0].split("").reverse().join("").slice(-1);
  return Number(first + "" + last);
};
