import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";
import { gearRatios } from "./gearRatios";
import { getGearRatios } from "./getGearRatios";
import { numberWithSymbol } from "./numberWithSymbol";

const exInput = fs.readFileSync("./Day3/exampleInput.txt", "utf-8");
const realInput = fs.readFileSync("./Day3/input.txt", "utf-8");

describe("gearRatios()", () => {
  test("Should return the sum of the part numbers in the engine schematic", () => {
    assert.equal(gearRatios(exInput), 4361);
  });
  test("Should return the sum of the part numbers in the engine schematic for the real data", () => {
    assert.equal(gearRatios(realInput), 522726);
  });

  test("Should accept duplicate numbers in the same line", () => {
    const inp =
      "467..114..\n" + "...*......\n" + "..35..35..\n" + "......#...\n";
    assert.equal(gearRatios(inp), 537);
  });
  for (const [number, index, lines, lineIndex, expected] of [
    [35, 2, "...*......\n" + "..35..633.\n" + "......#...\n", 2, true],
    [633, 6, "...*......\n" + "..35..633.\n" + "......#...\n", 2, true],
    [467, 0, "467..114..\n" + "...*......\n", 2, true],
    [114, 5, "467..114..\n" + "...*......\n", 2, false],
    [114, 5, ".......755\n" + "...$..*...\n", 2, true],
  ] as [number, number, string, number, boolean][]) {
    test("Should check if the number is next to a symbol, diagonal is accepted.", () => {
      assert.equal(numberWithSymbol(number, index, lines, lineIndex), expected);
    });
  }

  test("should multiply gear numbers", () => {
    const matchedNumberWithStars = {
      "3, 1": [467, 35],
      "3, 4": [617],
      "5, 8": [755, 598],
    };
    assert.equal(getGearRatios(matchedNumberWithStars), 467835);
  });
});
