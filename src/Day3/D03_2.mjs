import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim();

let positionXSanta = 0;
let positionYSanta = 0;
let positionXRobo = 0;
let positionYRobo = 0;
let visitedHouses = ['00'];
let positionSanta = '00';
let positionRobo = '00';

const moveSanta = () => {
  for (let i = 0; i < inputData.length; i++) {
    let char = inputData[i];
    let isSanta = i % 2 === 0;

    if (isSanta) {
      if (char === '>') positionXSanta = positionXSanta + 1;
      if (char === '<') positionXSanta = positionXSanta - 1;
      if (char === '^') positionYSanta = positionYSanta - 1;
      if (char === 'v') positionYSanta = positionYSanta + 1;
    } else {
      if (char === '>') positionXRobo = positionXRobo + 1;
      if (char === '<') positionXRobo = positionXRobo - 1;
      if (char === '^') positionYRobo = positionYRobo - 1;
      if (char === 'v') positionYRobo = positionYRobo + 1;
    }

    positionSanta = `${positionXSanta}${positionYSanta}`;

    if (!visitedHouses.includes(positionSanta))
      visitedHouses = [...visitedHouses, positionSanta];

    positionRobo = `${positionXRobo}${positionYRobo}`;

    if (!visitedHouses.includes(positionRobo))
      visitedHouses = [...visitedHouses, positionRobo];
  }
};

moveSanta();
console.log('total is', visitedHouses.length);

// wrong answers:
// 2320
// 2339

// correct: 2639
