import { describe, test } from "node:test";
import assert from "node:assert";
import * as fs from "fs";

const exInput = fs.readFileSync("./Day5/exampleInput.txt", "utf-8");
const realInput = fs.readFileSync("./Day5/input.txt", "utf-8");

describe("SeedFertilizer()", () => {
  test("", () => {
    assert.equal(getMaps(exInput), 0);
  });
  test("", () => {
    assert.equal(smartMainfunction(exInput), 0);
  });
  const seedToSoilMap = [
    [50, 98, 2],
    [52, 50, 48],
  ];
  for (const [seed, soil] of [
    [79, 81],
    [14, 14],
    [55, 57],
    [13, 13],
  ] as [number, number][]) {
    test(`Seed ${seed} should have soil ${soil}`, () => {
      assert.equal(seedToSoil(seed, seedToSoilMap), soil);
    });
  }
  const soilToFertiliserMap = [
    [0, 15, 37],
    [37, 52, 2],
    [39, 0, 15],
  ];
  for (const [soil, fertilizer] of [
    [81, 81],
    [14, 53],
    [57, 57],
    [13, 52],
  ] as [number, number][]) {
    test(`Soil ${soil} should have fertilizer ${fertilizer}`, () => {
      assert.equal(seedToSoil(soil, soilToFertiliserMap), fertilizer);
    });
  }
  const fertilizerToWaterMap = [
    [49, 53, 8],
    [0, 11, 42],
    [42, 0, 7],
    [57, 7, 4],
  ];
  for (const [fertilizer, water] of [
    [81, 81],
    [53, 49],
    [57, 53],
    [52, 41],
  ] as [number, number][]) {
    test(`Fertilizer ${fertilizer} should have water ${water}`, () => {
      assert.equal(seedToSoil(fertilizer, fertilizerToWaterMap), water);
    });
  }
  const waterToLightMap = [
    [88, 18, 7],
    [18, 25, 70],
  ];
  for (const [water, light] of [
    [81, 74],
    [49, 42],
    [53, 46],
    [41, 34],
  ] as [number, number][]) {
    test(`Water ${water} should have light ${light}`, () => {
      assert.equal(seedToSoil(water, waterToLightMap), light);
    });
  }
  const lightToTempMap = [
    [45, 77, 23],
    [81, 45, 19],
    [68, 64, 13],
  ];
  for (const [light, temp] of [
    [74, 78],
    [42, 42],
    [46, 82],
    [34, 34],
  ] as [number, number][]) {
    test(`Light ${light} should have temperature ${temp}`, () => {
      assert.equal(seedToSoil(light, lightToTempMap), temp);
    });
  }
  const tempToHumidityMap = [
    [0, 69, 1],
    [1, 0, 69],
  ];
  for (const [temp, humidity] of [
    [78, 78],
    [42, 43],
    [82, 82],
    [34, 35],
  ] as [number, number][]) {
    test(`Temperature ${temp} should have humidity ${humidity}`, () => {
      assert.equal(seedToSoil(temp, tempToHumidityMap), humidity);
    });
  }
  const humidityToLocation = [
    [60, 56, 37],
    [56, 93, 4],
  ];
  for (const [humidity, location] of [
    [78, 82],
    [43, 43],
    [82, 86],
    [35, 35],
  ] as [number, number][]) {
    test(`Humidity ${humidity} should have location ${location}`, () => {
      assert.equal(seedToSoil(humidity, humidityToLocation), location);
    });
  }
});

const names = [
  "seed-to-soil",
  "soil-to-fertilizer",
  "fertilizer-to-water",
  "water-to-light",
  "light-to-temperature",
  "temperature-to-humidity",
  "humidity-to-location",
];

export type Seeds = Record<number, number>;
export const seedToSoil = (seed: number, seedToSoilMap: number[][]): number => {
  const seeds: Seeds = {};

  seedToSoilMap.forEach((map) => {
    const dest = map[0];
    const source = map[1];
    const range = map[2];
    /*let additionValue = 0;
    for (let step = map[1]; step < map[1] + map[2]; step++) {
      seeds[step as keyof Seeds] = map[0] + additionValue;
      additionValue += 1;
    }*/
    let line = 0;
    if (seed === source) {
      return dest;
    } else if (seed > source && seed < source + range) {
      let result = seed - source + dest;
      return result;
    } else {
      if (line + 1 >= map.length) {
        return seed;
      } else {
        return seedToSoil(line + 1, seed, "soil");
      }
    }
  });
  return seeds[seed] ?? seed;
};
export const getMaps = (input: string) => {
  const allInformation: Record<string, string[][] | string[]> = {};
  //const seeds = [];
  let currentName = "";
  input.split(/\r?\n/).forEach((line) => {
    const newLine = line.split(/:/);
    if (newLine.includes("seeds")) {
      const seedLine = newLine[1]?.split(" ").splice(1);
      allInformation["seeds"] = seedLine;
    }
    let bool = true;
    names.forEach((name) => {
      if (line.includes(name)) {
        currentName = name;
        bool = false;
        return;
      }
    });
    if (!bool) {
      return;
    }
    if (line.length > 1) {
      const valueToPush = newLine[0]?.split(" ");
      if (allInformation[`${currentName}`]) {
        allInformation[`${currentName}`]?.push(valueToPush);
      } else {
        allInformation[`${currentName}`] = [valueToPush];
      }
    }
  });
  return allInformation;
};

const smartMainfunction = (input: string) => {
  const maps = getMaps(input);
  const seeds = maps["seeds"]?.map((str) => parseInt(str));
  let prevVal = seeds;
  names.forEach((name) => {
    const nameMap = maps[`${name}`];
    nameMap?.forEach((arr, index) => {
      const newArr = arr.map((str: string) => parseInt(str));
      nameMap[index] = newArr;
    });
    const values: number[] = [];
    prevVal?.forEach((val) => {
      values.push(seedToSoil(val, nameMap));
    });
    prevVal = values;
    console.log(name, values);
  });
  return 1;
};
