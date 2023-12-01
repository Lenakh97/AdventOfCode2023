import { describe, test } from "node:test";
import assert from "node:assert";
import {
  getCalibrationValue,
  sumOfCalibrationVals,
} from "./sumOfCalibrationsTask1";
import * as fs from "fs";

const exInput = fs.readFileSync("./Day1/exampleInput.txt", "utf-8");

const realInput = fs.readFileSync("./Day1/input1.txt", "utf-8");
describe("sumOfCalibrationVals() - Part 1", () => {
  for (const [input, expected] of [
    ["1abc2", 12],
    ["pqr3stu8vwx", 38],
    ["a1b2c3d4e5f", 15],
    ["treb7uchet", 77],
  ] as [string, number][]) {
    test(`should get ${expected} from the corresponding text line ${input}`, () => {
      assert.equal(getCalibrationValue(input), expected);
    });
  }

  test("should get the sum of valibration values in the test case 1", () => {
    assert.equal(sumOfCalibrationVals(exInput), 142);
  });

  test("should get the sum of valibration values in the real case 1", () => {
    assert.equal(sumOfCalibrationVals(realInput), 54630);
  });
});
