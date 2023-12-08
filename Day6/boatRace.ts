export const boatRace = (races: Array<[number, number]>) => {
  const numberOfPossibleWins = [];
  for (const [time, distance] of races) {
    let count = 0;
    for (let i = 0; i <= time; i++) {
      const possTime = i * (time - i);
      if (possTime > distance) {
        count += 1;
      }
    }
    numberOfPossibleWins.push(count);
  }
  return numberOfPossibleWins.reduce((a: number, b: number) => a * b, 1);
};
