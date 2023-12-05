import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";
import {
  compareObjects,
  fewestNumber,
  fewestNumbersObject,
  findBiggestNumberForEachColor,
  codeConundrum,
  toObject,
} from "./cubeConundrum";

export type CubeObject = {
  red: number;
  blue: number;
  green: number;
};

const exInput = fs.readFileSync("./Day2/exampleInput.txt", "utf-8");
const realInput = fs.readFileSync("./Day2/input.txt", "utf-8");

describe("cubeConundrum()", () => {
  // Part 1
  const bagContaining = {
    red: 12,
    green: 13,
    blue: 14,
  };
  test("should get the sum of the ID's of the possible games with the example input", () => {
    assert.equal(codeConundrum(exInput, bagContaining), 8);
  });
  for (const [textString, expected] of [
    [
      "12 blue, 15 red, 2 green",
      {
        red: 15,
        blue: 12,
        green: 2,
      },
    ],
    [
      "1 red, 2 green, 6 blue",
      {
        red: 1,
        blue: 6,
        green: 2,
      },
    ],
    [
      "3 blue, 4 red",
      {
        red: 4,
        blue: 3,
        green: 0,
      },
    ],
  ] as [string, { red: number; blue: number; green: number }][])
    test("should turn a text string into a CubeObject", () => {
      assert.deepStrictEqual(toObject(textString), expected);
    });
  for (const [obj1, obj2, expected] of [
    [
      {
        red: 12,
        green: 13,
        blue: 14,
      },
      {
        red: 15,
        blue: 12,
        green: 2,
      },
      false,
    ],
    [
      {
        red: 12,
        green: 13,
        blue: 14,
      },
      {
        red: 12,
        green: 13,
        blue: 14,
      },
      true,
    ],
  ] as [CubeObject, CubeObject, boolean][])
    test("Should compare the game results with the number of cubes in bag to see if the game is possible", () => {
      assert.deepStrictEqual(compareObjects(obj1, obj2), expected);
    });
  test("should get the sum of the ID's of the possible games with the real input", () => {
    assert.equal(codeConundrum(realInput, bagContaining), 2716);
  });

  //Part 2

  test("should find the fewest number of cubes for each color and sum up", () => {
    assert.equal(fewestNumber(exInput), 2286);
  });
  test("should find the fewest number of cubes for each color and sum up in the real case", () => {
    assert.equal(fewestNumber(realInput), 72227);
  });
  for (const [input, expected] of [
    [
      "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      { red: 4, green: 2, blue: 6 },
    ],
    [
      "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      { red: 1, green: 3, blue: 4 },
    ],
    [
      "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      { red: 20, green: 13, blue: 6 },
    ],
  ] as [string, CubeObject][])
    test("should find the fewest number for each Game", () => {
      assert.deepStrictEqual(fewestNumbersObject(input), expected);
    });
  for (const [input, expected] of [
    [
      [
        { red: 4, blue: 3, green: 0 },
        { red: 1, blue: 6, green: 2 },
        { red: 0, blue: 0, green: 2 },
      ],
      { red: 4, green: 2, blue: 6 },
    ],
    [
      [
        { red: 0, blue: 1, green: 2 },
        { red: 1, blue: 4, green: 3 },
        { red: 0, blue: 1, green: 1 },
      ],
      { red: 1, green: 3, blue: 4 },
    ],
    [
      [
        { red: 20, blue: 6, green: 8 },
        { red: 4, blue: 5, green: 13 },
        { red: 1, blue: 0, green: 5 },
      ],
      { red: 20, green: 13, blue: 6 },
    ],
  ] as [CubeObject[], CubeObject][])
    test("should find the biggest numbers for each color", () => {
      assert.deepStrictEqual(findBiggestNumberForEachColor(input), expected);
    });
});
