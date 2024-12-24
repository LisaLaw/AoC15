import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

// console.log(inputData);

let result = 0;

const getBow = (dimensions) => {
  return dimensions[0] * dimensions[1] * dimensions[2];
};

const getRibbon = (dimensions) => {
  const bow = getBow(dimensions);

  const biggestNumber = Math.max(...dimensions);
  dimensions.splice(dimensions.indexOf(biggestNumber.toString()), 1);
  const ribbonLength = dimensions[0] * 2 + dimensions[1] * 2;
  return bow + ribbonLength;
};

const getTotalRibbon = () => {
  let presentDimensions;
  let ribbon;
  for (let i = 0; i < inputData.length; i++) {
    presentDimensions = inputData[i].split('x');
    ribbon = getRibbon(presentDimensions);

    result = result + ribbon;
  }

  console.log('result', result);

  return result;
};

getTotalRibbon();
