import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

// console.log(inputData);

let codeCharCount = 0;
let allChars = 0;

const countStrChars = () => {
  inputData.forEach((line) => {
    allChars = allChars + line.length;

    for (let i = 0; i < line.length; i++) {
      let char = line[i];
      let nextChar = line[i + 1];

      if (char === '"') {
        codeCharCount += 3;
      } else if (char === '\\' && nextChar === 'x') {
        codeCharCount += 3;
        i++;
      } else if (char === '\\') {
        codeCharCount += 4;
        i++;
      } else codeCharCount++;
    }
  });
};

countStrChars();
console.log(codeCharCount - allChars);
