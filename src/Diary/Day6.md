Day 6 feels complex.
Do I start with parsing the different types of instructions or do I start with the data type, i.e. saving one light when it's off and when it's on? I think I'll start with that; then I can build on that once I know how the object is going to be structured.

Okay, I did the opposite. Apparently my mind wants to start with functions. So I created three basic functions; this is what each light should be able to do:
```
const turnLightOn = (light) => {
  light = true;
}

const turnLightOff = (light) => {
  light = false;
}

const toggleLight = (light) => {
  light = !light;
}
```

Let's see if that works for a coordinate "light", like so:
`turnLightOn({'0,0', state})` - I see I need maybe an initial state... going to ammend the functions.
Alternatively, I could maybe introduce a third number to it, for on / off... The state feels complex already.
Then again...

Hm, I'm undecided.

The instructions also have lights as strings, so perhaps it'd be easier to keep it that way.

Now I need to check what the instructions does, and then I need to extract the lights from them that should be affected.
The internet suggests using a regex. I'm fond of that. I can even do that with the comma in the middle.
Extracting the start and finish lights worked well - but of course I need to get the range in between those numbers, not just the first and last light.