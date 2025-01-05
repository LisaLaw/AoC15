let line = '1113222113';

const countSameCharacters = (chars) => {
  let typeCount = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) typeCount++;
    if (chars[i] !== chars[i + 1]) return typeCount;
  }
  return typeCount;
};

const play = () => {
  let newLine = '';
  if (line.length === 1) return (line = '1' + line);

  for (let i = 0; i < line.length; i++) {
    let char = line[i];
    let nextChar = line[i + 1];

    if (char !== nextChar) {
      newLine = newLine + '1' + char;
    }

    if (char === nextChar) {
      let charCount = countSameCharacters(line.slice(i));
      newLine = newLine + charCount + char;
      i = i + charCount - 1;
    }
  }

  line = newLine;
};

for (let i = 0; i < 40; i++) {
  play();
}

console.log('line', line.length);