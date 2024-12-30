import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

const hasRepeatedPair = (s) => {
  for (let i = 0; i < s.length - 2; i++) {
    const letter = s[i];
    const nextLetter = s[i + 1];
    const pair = `${letter}${nextLetter}`;
    if (s.substring(i + 2).includes(pair)) return true;
  }
}

const hasDoubleLetter = (s) => {
  for (let i = 0; i < s.length - 2; i++) {
    const letter = s[i];
    const nextLetter = s[i + 1];
    const thirdLetter = s[i + 2];
    if (letter != nextLetter && letter === thirdLetter) return true;
  }
};

const isStringNice = (item) => hasRepeatedPair(item) && hasDoubleLetter(item);

const niceStrings = inputData
  .map((data) => {
    return isStringNice(data);
  })
  .filter((s) => s === true);

console.log('count is', niceStrings.length);
