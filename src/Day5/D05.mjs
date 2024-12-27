import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

const hasThreeVowels = (s) => s.match(/[aeiou]/g)?.length > 2;

const hasDoubleLetter = (s) => {
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const nextLetter = s[i + 1];
    if (letter === nextLetter) return true;
  }
};

const naughtySubs = ['ab', 'cd', 'pq', 'xy'];

const hasNaughtySub = (s) => {
  let isNaughty = false;
  naughtySubs.forEach((naughty) => {
    if (s.includes(naughty)) isNaughty = true;
  });
  return isNaughty;
};

const isStringNice = (item) =>
  hasThreeVowels(item) && hasDoubleLetter(item) && !hasNaughtySub(item);

const niceStrings = inputData
  .map((data) => {
    return isStringNice(data);
  })
  .filter((s) => s === true);

console.log('count is', niceStrings.length);
