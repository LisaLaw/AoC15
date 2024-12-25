import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim();

// console.log(inputData);

let positionX = 0;
let positionY = 0;
let visitedHouses = ['00'];

const moveSanta = () => {
  let position;
  for (let i = 0; i < inputData.length; i++) {
    let char = inputData[i];

    if (char === '>') (positionX = positionX + 1);
    if (char === '<') (positionX = positionX - 1);
    if (char === '^') (positionY = positionY - 1);
    if (char === 'v') (positionY = positionY + 1);

    position = `${positionX}${positionY}`;

    if (!visitedHouses.includes(position))
      visitedHouses = [...visitedHouses, position];
  }
};

moveSanta();
console.log('total is', visitedHouses.length);