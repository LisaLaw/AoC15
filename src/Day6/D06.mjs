import fs from 'fs';
const inputData = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

// console.log(inputData);

let turnedOnLights = [];

const turnLightOn = (light) => {
  if (!turnedOnLights.includes(light)) turnedOnLights = [...turnedOnLights, light];
};

const turnLightOff = (light) => {
  if (turnedOnLights.includes(light)) turnedOnLights = turnedOnLights.filter((l) => l !== light);
};

const toggleLight = (light, state) => {
  if (turnedOnLights.includes(light)) turnedOnLights = turnedOnLights.filter((l) => l !== light);
  if (!turnedOnLights.includes(light)) turnedOnLights = [...turnedOnLights, light];
};

const extractLights = (instruction) => {
  let xAxisLightsRange = [];
  let yAxisLightsRange = [];
  let xAxisLights = [];
  let yAxisLights = [];

  instruction.match(/\d{1,3},\d{1,3}/g)?.map((light) => {
    const xAxisEndpoint = Number(light.split(',')[0]);
    const yAxisEndpoint = Number(light.split(',')[1]);
    xAxisLightsRange = [...xAxisLightsRange, xAxisEndpoint];
    yAxisLightsRange = [...yAxisLightsRange, yAxisEndpoint];
  });

  for (let i = xAxisLightsRange[0]; i < xAxisLightsRange[1] + 1; i++) {
    xAxisLights = [...xAxisLights, i];
  }
  for (let i = yAxisLightsRange[0]; i < yAxisLightsRange[1] + 1; i++) {
    yAxisLights = [...yAxisLights, i];
  }

  return {xAxisLights, yAxisLights};
};

const readInstructions = () => {
  for (let i = 0; i < inputData.length; i++) {
    const instruction = inputData[i]
    let {xAxisLights, yAxisLights} = extractLights(instruction);

    if (instruction[1] === 'o') {
      xAxisLights.forEach(light => toggleLight(light));
      yAxisLights.forEach(light => toggleLight(light));
    }
    else if (instruction[6] === 'n') {
      xAxisLights.forEach(light => turnLightOn(light));
      yAxisLights.forEach(light => turnLightOff(light));
    }
    else {
      xAxisLights.forEach(light => turnLightOff(light));
      yAxisLights.forEach(light => turnLightOff(light));
    }
  }
};

readInstructions();

console.log('turned on', turnedOnLights?.length);

// false: 196 (too low)