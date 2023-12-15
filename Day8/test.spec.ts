import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";

const exInput = fs.readFileSync("./Day8/exampleInput.txt", "utf-8");
const exInput2 = fs.readFileSync("./Day8/exampleInput2.txt", "utf-8");
const realInput = fs.readFileSync("./Day8/Input.txt", "utf-8");

describe("HauntedWasteland()", () => {
  test("Should solve the example", () => {
    assert.equal(HauntedWasteland(exInput).part1, 2);
  });
  test("Should solve the real case", () => {
    assert.equal(HauntedWasteland(realInput).part1, 18157);
  });
  test("Should solve the example", () => {
    //assert.equal(HauntedWasteland(exInput2).part2, 1);
  });
  test("Should solve the real case", () => {
    assert.equal(HauntedWasteland(realInput).part2, 14299763833181);
  });
});

export const HauntedWasteland = (input: string) => {
  let instructions = "";
  let nodes: Record<string, [string, string]> = {};
  input.split(/\r?\n/).forEach((line, index) => {
    index === 0 ? (instructions = line) : null;
    index > 1
      ? (nodes[line.slice(0, 3)] = line.slice(7, -1).split(", "))
      : null;
  });
  let counter = -1;
  let steps = 0;
  let node: string = "AAA";

  while (node != "ZZZ") {
    if (counter >= instructions.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    instructions[counter] === "L"
      ? (node = nodes[node][0])
      : (node = nodes[node][1]);
    steps++;
  }
  const endNodesA = Object.keys(nodes).filter((key) => key.endsWith("A"));
  let nodeSteps: number[] = [];
  let stepsPart2 = 0;
  endNodesA.forEach((node) => {
    console.log(node);

    counter = -1;
    stepsPart2 = 0;
    while (node[node.length - 1] != "Z") {
      if (counter >= instructions.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
      instructions[counter] === "L"
        ? (node = nodes[node][0])
        : (node = nodes[node][1]);
      stepsPart2++;
    }
    nodeSteps.push(stepsPart2);
  });
  const lcm = findLCM(nodeSteps);
  return { part1: steps, part2: lcm };
};

const GCD = (a: number, b: number): number => (b === 0 ? a : GCD(b, a % b));
const LCMofTwo = (a: number, b: number): number => (a * b) / GCD(a, b);
const findLCM = (numbers: number[]) => {
  let lcm = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    lcm = LCMofTwo(lcm, numbers[i]);
  }
  return lcm;
};
