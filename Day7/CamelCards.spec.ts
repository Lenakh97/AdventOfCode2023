import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";
import { CamelCards } from "./CamelCards";

const exInput = fs.readFileSync("./Day7/exampleInput.txt", "utf-8");
const realInput = fs.readFileSync("./Day7/Input.txt", "utf-8");

/*
Five of a kind: 6
Four of a kind: 5 
Full house: 4 
Three of a kind: 3 
Two pair: 2 
One pair: 1 
High card: 0 

Order: A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, 2
*/

describe("CamelCards()", () => {
  test("Should get the total winnings for the example data", () => {
    assert.equal(CamelCards(exInput, false), 6440);
  });
  test("Should get the total winnings for the example data with joker", () => {
    assert.equal(CamelCards(exInput, true), 5905);
  });
  test("Should get the total winnings for the real data", () => {
    assert.equal(CamelCards(realInput, false), 252295678);
  });
  test("Should get the total winnings for the real data with Joker", () => {
    assert.equal(CamelCards(realInput, true), 250577259);
  });
});
