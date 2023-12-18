export const toFindDuplicates = (array: number[]): number[] =>
  array.filter((item, index) => array.indexOf(item) !== index);
