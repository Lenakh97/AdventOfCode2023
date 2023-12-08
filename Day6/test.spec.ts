import { describe, test } from "node:test";
import assert from "node:assert";
import { boatRace } from "./boatRace";

describe("boatRace()", () => {
  const races: Array<[number, number]> = [
    [7, 9],
    [15, 40],
    [30, 200],
  ];
  test("Should count number of ways to beat record, and multiply the results for each race", () => {
    assert.equal(boatRace(races), 288);
  });
  const realRaces: Array<[number, number]> = [
    [55, 246],
    [82, 1441],
    [64, 1012],
    [90, 1111],
  ];
  test("Should count number of ways to beat record, and multiply the results for each race", () => {
    assert.equal(boatRace(realRaces), 608902);
  });
  const realRace2: Array<[number, number]> = [[55826490, 246144110121111]];

  test("Should count number of ways to beat record, and multiply the results for each race", () => {
    assert.equal(boatRace(realRace2), 46173809);
  });
});
