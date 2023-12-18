import { describe, test } from "node:test";
import assert from "node:assert";
import { compareCharacters } from "./compareCharacters";

describe("compareCharacters()", () => {
  for (const [input, expected] of [
    [["K", "K"], 0],
    [["K", "T"], 1],
    [["8", "Q"], -1],
  ] as [string[], number][])
    test(`should return ${expected} for the following comparison ${input} - no joker`, () => {
      assert.equal(
        compareCharacters(input[0] ?? "", input[1] ?? "", false),
        expected
      );
    });
  for (const [input, expected] of [
    [["K", "K"], 0],
    [["8", "J"], 1],
    [["J", "8"], -1],
  ] as [string[], number][])
    test(`should return ${expected} for the following comparison ${input} - with joker`, () => {
      assert.equal(
        compareCharacters(input[0] ?? "", input[1] ?? "", true),
        expected
      );
    });
});
