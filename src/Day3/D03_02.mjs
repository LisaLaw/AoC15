import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim();

let positionXSanta = 0;
let positionYSanta = 0;
let positionXRobo = 0;
let positionYRobo = 0;
let visitedHouses = ['0,0'];
let positionSanta = '0,0';
let positionRobo = '0,0';

const moveSanta = () => {
  for (let i = 0; i < inputData.length; i++) {
    let char = inputData[i];
    let isSanta = i % 2 === 0;

    if (isSanta) {
      if (char === '>') positionXSanta = positionXSanta + 1;
      if (char === '<') positionXSanta = positionXSanta - 1;
      if (char === '^') positionYSanta = positionYSanta - 1;
      if (char === 'v') positionYSanta = positionYSanta + 1;

      positionSanta = `${positionXSanta},${positionYSanta}`;

      if (!visitedHouses.includes(positionSanta))
        visitedHouses = [...visitedHouses, positionSanta];
    } else {
      if (char === '>') positionXRobo = positionXRobo + 1;
      if (char === '<') positionXRobo = positionXRobo - 1;
      if (char === '^') positionYRobo = positionYRobo - 1;
      if (char === 'v') positionYRobo = positionYRobo + 1;
      
      positionRobo = `${positionXRobo},${positionYRobo}`;

      if (!visitedHouses.includes(positionRobo))
        visitedHouses = [...visitedHouses, positionRobo];
    }
  }
};

moveSanta();
console.log('total is', visitedHouses.length);
