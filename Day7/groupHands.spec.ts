import { describe, test } from "node:test";
import assert from "node:assert";
import { groupHands } from "./groupHands";

describe("groupHands()", () => {
  for (const [input, expected] of [
    [["3", "2", "T", "3", "K"], 1],
    [["T", "5", "5", "J", "5"], 3],
    [["K", "K", "6", "7", "7"], 2],
    [["K", "T", "J", "J", "T"], 2],
    [["Q", "Q", "Q", "J", "A"], 3],
  ] as [string[], number][])
    test(`should group cards ${input} into points ${expected}`, () => {
      assert.equal(groupHands(input, false), expected);
    });
  for (const [input, expected] of [
    [["3", "2", "T", "3", "K"], 1],
    [["T", "5", "5", "J", "5"], 5],
    [["K", "K", "6", "7", "7"], 2],
    [["K", "T", "J", "J", "T"], 5],
    [["Q", "Q", "Q", "J", "A"], 5],
    [["8", "J", "9", "J", "J"], 5],
    [["J", "8", "J", "J", "J"], 6],
    [["7", "J", "7", "A", "A"], 4],
  ] as [string[], number][])
    test(`should group cards ${input} with joker into points ${expected}`, () => {
      assert.equal(groupHands(input, true), expected);
    });
});
