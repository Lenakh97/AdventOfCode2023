export const sumOfCalibrationVals = (input: string) => {
  let sum = 0;
  input.split(/\r?\n/).forEach((line) => {
    sum += getCalibrationValue(line);
  });
  return sum;
};

export const getCalibrationValue = (line: string) => {
  const matches = line.match(/(\d+)/g);
  const firstNumber = matches?.[0].slice(0, 1);
  const lastNumber = matches?.[matches.length - 1]?.slice(-1);
  return Number(firstNumber + "" + lastNumber);
};
