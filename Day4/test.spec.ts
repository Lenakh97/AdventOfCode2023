import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";
import { ScratchCards } from "./ScratchCards";

const exInput = fs.readFileSync("./Day4/exampleInput.txt", "utf-8");
const realInput = fs.readFileSync("./Day4/input.txt", "utf-8");

describe("ScratchCards()", () => {
  test("should return the points from the scratchcards - real input", () => {
    assert.equal(ScratchCards(realInput).part1, 28750);
  });
  test("should return the total number of scratchcards - real input", () => {
    assert.equal(ScratchCards(realInput).part2, 10212704);
  });
  test("should return the points from the scratchcards - example input", () => {
    assert.equal(ScratchCards(exInput).part1, 13);
  });
  test("should return the total number of scratchcards - example input", () => {
    assert.equal(ScratchCards(exInput).part2, 30);
  });
});
