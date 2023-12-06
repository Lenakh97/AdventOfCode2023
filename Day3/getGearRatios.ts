/* 
This function takes a Record with coordinates of stars and corresponding
numbers. When two numbers are adjacent to one star, the numbers are 
multiplied with each other and added to the sum variable.
*/

export const getGearRatios = (
  matchNumberWithStars: Record<string, number[]>
): number => {
  let sum = 0;
  Object.values(matchNumberWithStars).forEach((val) => {
    const valueToSum =
      val.length > 1 ? val.reduce((a: number, b: number) => a * b, 1) : 0;
    sum += valueToSum;
  });
  return sum;
};
