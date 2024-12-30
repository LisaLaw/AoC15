import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

// console.log(inputData);

let strCount = 0;
let allChars = 0;

const countStrChars = () => {
  inputData.forEach((line) => {
    allChars = allChars + line.length;
    const chars = line.slice(1, -1);

    console.log('chars', chars);

    for (let i = 0; i < chars.length; i++) {
      let char = chars[i];
      let nextChar = chars[i + 1];
      strCount++;

      if (char === `\\` && nextChar === `\\`) {
        console.log('slash');
        i++;
      }
      if (char === `\\` && nextChar === `"`) {
        console.log('"')
        i++;
      }
      else if (char === '\\' && nextChar === 'x') {
        console.log('hexa')
        i = i + 3;
      }
    }
  });
};

countStrChars();

console.log(allChars - strCount);

