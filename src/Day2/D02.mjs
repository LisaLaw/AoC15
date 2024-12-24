import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

// console.log(inputData);

const getNeededPaper = (dimensions) => {
  const area =
    dimensions[0] * dimensions[1] * 2 +
    dimensions[1] * dimensions[2] * 2 +
    dimensions[0] * dimensions[2] * 2;
  return area;
};

const getSparePaper = (dimensions) => {
  const biggestNumber = Math.max(...dimensions);
  dimensions.splice(dimensions.indexOf(biggestNumber.toString()), 1);
  const additionalArea = dimensions[0] * dimensions[1];
  return additionalArea;
};

let result = 0;

const getPaper = () => {
  let presentDimensions;
  let needed;
  let spare;
  for (let i = 0; i < inputData.length; i++) {
    presentDimensions = inputData[i].split('x');
    needed = getNeededPaper(presentDimensions);
    spare = getSparePaper(presentDimensions);

    result = result + needed + spare;
  }

  return result;
};

getPaper();
