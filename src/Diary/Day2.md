Day 2 also looks doable - just a lot of Maths.
I have an array of strings for each present.
For each string, I want to get the different numbers.
I could do that by indexing - but it's not a given that all the numbers have the same length.

Instead, I can split the string by `x` - however that leaves me with another array.
I'm not sure right now if that will be a problem or not. I'm gonna roll with it for now.
Basically, I need to multiply all numbers with each other and then add them up.
It doesn't matter which number is the height or length or width.

For the spare paper, I need to find and exclude the max number.
Finding the max number is easy via `Math.max()`. But I'm not sure how to exclude it...
There must be a `toSpliced()` or something helpful. I can use `indexOf()` again to know the position. 
`toSpliced` apparently isn't a function. Huh. Ah, I'm missing the count, I think.
That was one issue; the other issue was the the `max()` function returns a Number, and
the array is made of strings. So I had to convert that via `toString()`.
But still, it's returning that `toSpliced()` is not a function...
Actually, I think I made a mistake here. mdn web docs tells me that the first number should
indeed be a number, not a string. So the `indexOf` function should return the right type.

Huh, this one's got me baffled. If I feed the data to an online terminal, it works.
I don't see why it wouldn't work in my case here... Curious...

I can use `splice()`. But it mutates the original array. I'm not liking that very much.

I've decided to go with `splice()` for now. I can't find a reason why `toSpliced` isn't working
and I'm running short of time today.

I think I've got the functions for the needed and the extra paper now. Now I just need to wrap
it in a function and run it on each present's dimensions, similar to day 1.

Unfortunately, I didn't get the right result. :(

Ah, I wasn't truly iterating over the input data,
but instead had used my test data and always did the
calculations for the first input.

Unfortunately, my next result is also wrong - this time too low. The first one was too high. Hehe, but I'm getting somewhere. I think.

I've tried to extract the vars from the for loop, but it doesn't seem to make a difference.

Huh, the testing data return funny results with my code. It seems the very first calculation is off. Aha, and I know why!
I've forgot to duplicate the dimensions.
And that has fixed the problem! Yayyy, way to go.

A sneak peak of part 2 makes my head spin... :D There is a lot of Maths in there.

Yayy, part 2 was easy - a lot of reusable code from part 1. :) Done!