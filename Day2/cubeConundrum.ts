import type { CubeObject } from "./test.spec";

const possibleColors = ["red", "green", "blue"];

/*
  This function takes in one input from a txt file with results of different game rounds
  and bagContaining which is a condition to be used to check which games would have
  been possible.
 */
export const codeConundrum = (
  exInput: string,
  bagContaining: CubeObject
): number => {
  let countGame = 0;
  exInput.split(/\r?\n/).forEach((line) => {
    const game = line.match(/(\d+)/);
    const newline = line.split(": ").pop() as string;
    const lineRes: Boolean[] = [];
    newline.split(/;|:/).forEach((example) => {
      if (example.includes("Game")) {
        return;
      }
      const thisObject = toObject(example);
      lineRes.push(compareObjects(bagContaining, thisObject));
    });
    if (lineRes.includes(false)) {
      return;
    }
    countGame += Number(game?.[0]);
  });
  return countGame;
};

/*
This function compares two objects to see if the cubes in bagObjects
are higher/equal to the ones from the game rounds. This is to check if
the game is possible.
 */
export const compareObjects = (bagObjects: CubeObject, obj2: CubeObject) => {
  let values = 0;
  for (const color of possibleColors) {
    if (
      bagObjects[color as keyof CubeObject] >= obj2[color as keyof CubeObject]
    ) {
      values += 1;
    }
  }
  return values === 3 ? true : false;
};

export const toObject = (text: string) => {
  const obj: CubeObject = { red: 0, blue: 0, green: 0 };
  text.split(/, /).forEach((color) => {
    let colorSplitted: string[] = color.split(" ");
    if (colorSplitted.length === 3) {
      let actualColor = colorSplitted[2];
      if (actualColor !== undefined) {
        obj[actualColor as keyof CubeObject] = Number(colorSplitted[1]);
      }
    }
    if (colorSplitted.length === 2) {
      let actualColor = colorSplitted[1];
      if (actualColor !== undefined) {
        obj[actualColor as keyof CubeObject] = Number(colorSplitted[0]);
      }
    }
  });
  return obj;
};

// Part 2
export const findBiggestNumberForEachColor = (input: CubeObject[]) => {
  let exampleOutput: CubeObject = { red: 0, blue: 0, green: 0 };
  for (const line of input) {
    for (const color of possibleColors) {
      if (
        line[color as keyof CubeObject] >=
        exampleOutput[color as keyof CubeObject]
      ) {
        exampleOutput[color as keyof CubeObject] =
          line[color as keyof CubeObject];
      }
    }
  }
  return exampleOutput;
};

export const fewestNumbersObject = (gameString: string) => {
  const listOfObjects: CubeObject[] = [];
  gameString.split(/;|:/).forEach((example) => {
    if (example.includes("Game")) {
      return;
    }
    listOfObjects.push(toObject(example));
  });
  return findBiggestNumberForEachColor(listOfObjects);
};

export const fewestNumber = (exInput: string) => {
  let finalSum = 0;
  exInput.split(/\r?\n/).forEach((line) => {
    const newline = line.split(": ").pop() as string;
    const resPerLine = fewestNumbersObject(newline);
    const values: number[] = Object.values(resPerLine);
    const multiplication = values.reduce((a: number, b: number) => a * b, 1);
    finalSum += multiplication;
  });
  return finalSum;
};
