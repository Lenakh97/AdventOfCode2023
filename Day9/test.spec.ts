import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";

const exInput = fs.readFileSync("./Day9/exampleInput.txt", "utf-8");
const realInput = fs.readFileSync("./Day9/Input.txt", "utf-8");

describe("MirageMaintenance()", () => {
  test("Should solve the example input - part 1", () => {
    assert.equal(MirageMaintenance(exInput, 1), 114);
  });
  test("Should solve the example input - part 2", () => {
    assert.equal(MirageMaintenance(exInput, 2), 2);
  });
  test("Should solve the real input - part 1", () => {
    assert.equal(MirageMaintenance(realInput, 1), 2175229206);
  });
  test("Should solve the real input - part 2", () => {
    assert.equal(MirageMaintenance(realInput, 2), 942);
  });
});

export const MirageMaintenance = (input: string, part: number): number => {
  let totalSum = 0;
  input.split(/\r?\n/).forEach((line) => {
    const lineArray = line.split(" ").map((x: string | number) => +x);
    const fullResArray = [lineArray];
    let prevArray: number[] = [];
    lineArray.forEach((number, index) => {
      if (index < lineArray.length - 1) {
        let diff = lineArray[index + 1] - number;
        prevArray.push(diff);
      }
    });
    fullResArray.push(prevArray);
    let value: boolean = true;
    while (value === true) {
      if (prevArray.every((val) => val === 0)) {
        value = false;
        break;
      }
      const tempArr = prevArray;
      prevArray = [];
      tempArr.forEach((number, index) => {
        if (index < tempArr.length - 1) {
          let diff = tempArr[index + 1] - number;
          prevArray.push(diff);
        }
      });
      fullResArray.push(prevArray);
    }
    let sum = 0;
    if (part === 1) {
      for (const array of fullResArray) {
        sum += array[array.length - 1] ?? 0;
      }
    }
    if (part === 2) {
      sum = calculateBackwards(fullResArray);
    }

    totalSum += sum;
  });
  return totalSum;
};

export const calculateBackwards = (fullResArray: number[][]): number => {
  const ar: number[] = [];
  for (const array of fullResArray) {
    ar.push(array[0]);
  }
  ar.reverse();
  const newAr: number[] = [];
  let prevVal = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    let diff = ar[i + 1] - prevVal;
    prevVal = diff;
    newAr.push(diff);
  }
  return newAr[newAr.length - 1] ?? 0;
};
