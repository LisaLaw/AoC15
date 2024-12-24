import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim();

// console.log(inputData);

const positive = inputData.replaceAll(`\(`, '+1');
const negative =  positive.replaceAll('\)', '-1');

console.log(eval(negative));