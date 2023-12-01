import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";
import {
  getCalibrationValueWithText,
  sumOfCalibrationVals3,
} from "./sumOfCalibrationsTask2";

const exInput = fs.readFileSync("./Day1/exampleInput2.txt", "utf-8");
const realInput = fs.readFileSync("./Day1/input1.txt", "utf-8");

describe("sumOfCalibrationVals() - Part 2", () => {
  for (const [input, expected] of [
    ["two1nine", 29],
    ["eightwothree", 83],
    ["abcone2threexyz", 13],
    ["xtwone3four", 24],
    ["4nineeightseven2", 42],
    ["zoneight234", 14],
    ["7pqrstsixteen", 76],
  ] as [string, number][]) {
    test(`should get ${expected} from the corresponding text line ${input}`, () => {
      assert.equal(getCalibrationValueWithText(input), expected);
    });
  }
  for (const [input, expected] of [
    ["62xvvkpbhhbthreetwooneeightwozr", 62],
    ["5ninesevensrzxkzpmgz8kcjxsbdftwoner", 51],
  ] as [string, number][]) {
    test(`should work with overlapping numbers: ${input} => ${expected}`, () => {
      assert.equal(getCalibrationValueWithText(input), expected);
    });
  }

  test("should get the sum of calibration values in the test case", () => {
    assert.equal(sumOfCalibrationVals3(exInput), 552);
  });
  test("should get the sum of calibration values in the real case", () => {
    assert.equal(sumOfCalibrationVals3(realInput), 54770);
  });
});
