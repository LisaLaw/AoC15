So, day 1 is a long string of two types of characters.
Now, I could replace them all with `+1` / `-1`.
I could also count them all.
I could count all opening brackets and distract them from the total length,
but I think that would make it more complicated.
I like the replacing, I like working with regex. Let's give this a try.

Replacing worked, but now I can't turn it into a number easily:
`Number()` returns `NaN`.
Is there a way to turn the whole thing into a Maths expression?
Yes! `Eval()` it is.

Yayy, that worked. :)
I'm pretty proud of myself, even though the instructions said it was an easy riddle.

Of course, my solution doesn't do much good for the second part of day 1.
A part of me wishes they'd give out the whole instructions at once, but I guess that's
part of the fun.
So, let's get to it. I need to find the first position of the working result - the accumulator - 
turning negative.
My first instinct, as always, is to go to a forEach loop. I'm sure there is a better solution,
however.
So, what do I want to do? I want to go through the characters of a string, adding them add
as I go along. It's not enough to just find the first negative number with `indexOf`
because this will cause Santa to go down a level, but not necessarily to go to the basement.
So, I need to check each character. Ha! A quick internet search indeed goes to the loop.

I tried with `forEach` - but of course, that's reserved for arrays and I'm working on a string.
So a classic `for` loop it is (You can find the initial code at the bottom of the entry). However, I'm getting `Illegal return statement`.
I haven't run across that one yet.
Wrapping the loop in a function seems to get rid of the error - but I'm not getting a result just yet.
When I try to debug it, it seems that the loop only runs one time... aha, I found a mistake.
I was trying to get `indexOf(char)` instead of `indexOf(i)`. That of course doesn't make
any sense as I was defining `char` in the same line:
instead of `char = inputData.indexOf(char);` of course I need `char = inputData.indexOf(i);`.
And as I'm writing this I'm also noticing that I haven't set a keyword before `char`.

But neither fix is helping. It would be easier if the VDI was giving me hints, it isn't
doing that currently... Funny how we learn to rely on these things.

A more thorough inspection of my code shows I have the for loop wrong from memory.
I need to set a `let` in front of the `i`, and I've also mixed up the order:
So instead of `for (i = 0; i++; inputData.length)` what I need is:
`for (let i = 0; inputData.length; i++)`.
However, this is running through aaaall of the characters. Clearly I forgot a return
statement... or something? Hmmm.... It's taking forever to finish and not returning me an
index quickly. I'll see if it spits out a number in the end but somehow I doubt that 
it'll be correct.
I think I found the next mistake: `let char = inputData.indexOf(i);` This line doesn't
make a lot of sense... What I really want is: `let char = inputData[i];` Does that work for strings?
Huh, for testing purposes I just set the max loop iterations to 5. But I'm getting 100s of
console.logs - and really strange results for i. Clearly there are a few things wrong...
=> `indexOf` is an array function. `inputData[i]` seems to work. Doesn't make a lot of sense
to me currently, but we'll roll with it.
What I'm baffled by is that the first value I get for `i` is 1458. What the heck?
Also, removing a console log changes the value of `i`. Freaky.
I'm thinking it might be easier to turn the string into an array...
But looking at some old code of mine, I've just found another error in the `for loop` line.
And now suddenly it's spitting out more reasonable results.
=> `for (let i = 0; inputData.length; i++)` is wrong because I never compared i to the breakout length. So instead, I need: `for (let i = 0; i < inputData.length; i++)`

I get back an index now... and it's the same I got back a few minutes and steps ago. :D Lol.
It's also not the right answer, as AoC is happy to inform me.
It looks like my code is returning the first negative number... so exactly what I didn't want.
I doesn't seem to affect my var `result` the way I want it to...
That's not right. Printing out result in the function does show that the code only breaks out
of the loop when the result is negative. But I'm seeing I still got the wrong `indexOf` function there...

Yayy, I solved it! I just want to return `i + 1`. :) High five, Day 1 done!



(Initial code:
```
let result = 0;

for (let i; i ++ ; inputData.length) {
  char = inputData.indexOf(char)
  if (char === '(') result++;
  if (char === ')') result--;

  if (result < 0) return console.log('here', inputData.indexOf(char)); 
}
```
)