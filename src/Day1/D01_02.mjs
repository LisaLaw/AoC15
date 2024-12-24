import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim();

// console.log(inputData);

let result = 0;

const getIndex = () => {
  for (let i = 0; i < inputData.length; i++) {
    let char = inputData[i];
    if (char === '(') result++;
    if (char === ')') result--;

    if (result < 0) {
      return console.log('solution', i + 1);
    }
  }
};

getIndex();
