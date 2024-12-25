Day 3 - two dimensional work. I'm scared. Lol.
I don't fully get how to work two dimensionality...
I think for this one I might sneak on a reddit or something to get an idea.

Ok so there is a thing called `two dimensional arrays` in JS.
I gather that I have to think about the houses as a0, a1, b2, c3 etc.
I can iterate over the numbers without a problem with an increment.
Maybe it's even easier to think of the houses as 00, 01, 22, 33 etc.
And then each digit would have to be treated separately... So perhaps they are strings... ?
Not sure.

If the starting house is 00, and Santa moves right (>), then we'd be a 01.
What happens btw if he tries to move out of the grid?
Ok, the grid is infinite. So that means we can negative numbers. That's fine,
in the end we just need to test them for uniqueness.

So again I need to look at each letter, so a `for loop` it is again.
I bet that after the 50 riddles I won't write them wrong again ever. :D

I guess the hardest part here is moving correctly - right now I'm converting strings to numbers and vice versa. Doesn't feel very elegant.

So far, I've managed to make Santa jump 2 at a time and 11 at a time:
- `${position[0]}${Number(position[1] + 1)}` leads to 011 with starting position 00
- `${position[0]}${Number(position[1]) + 1}` leads to 02 with starting position 00.
Baffling. If I get rid of the `+1`, then Santa doesn't move at all.
So that means that `Number(position[1])` does indeed return 0 for starting position 00.

Ah. Well that was a dumb mistake I made. I actually had the character twice in the test set.
So in this case, Santa was moving correctly - I just didn't have the console log each time.
But I've found out that instead of template strings I could probably also use `toString()`.

The idea is good and works - but I'm getting a problem with negative numbers and the absolute length of the position string. If the position is `-10`, then `position[1]` evaluates to `1` and not `0` which is what I would want.
The same will be a problem with bigger numbers...
I guess I can check the string length first - but I also have to know if the first character is `-` or not. Unless I start with `+00` as starting position.... Hmmm, I don't know if the conversions are clever enough. Let's see.
Nope, that seems to lead to odd problems I don't want to get into.

So checking string length and first character I guess.
I wonder if there is a way to split strings exactly in half...
Actually, I'm going to start again and use the position as two separate vars.
I think that will be easier.
And with a little bit of a cheat I guess I can have both positions start as two digits... (or even three). Actually, I'm thinking I'm going to run into more problems there. But I'll go step by step.
Ok, two digits to start confuse me. :D Back to one digit.
I'm getting back funny looking results (such as `1-1`) - but I don't think that matters a lot.
Maybe that's exactly what I wanted? Anyways, it doesn't need to look pretty, I just need to see if it's a unique position or not.
Aha, and since I've split the position, it's also not necessary to access it via index - I can just take the whole string and work on it. And perhaps I can even save myself all the back and forth conversions.

So, I think Santa is now moving fine. Now I need to create a list of already visited houses.
Hm, I'm getting `2` as the total number of visited houses. I doubt that's correct. :D
I'm guessing it's because I assigned the new positions only once and not within the loop.
- Whoops, moving it inside the for loop resulted in `1` visited house. Poor children.

Hm, removing the return statements got a result, but it's too high. Guess I need to debug.
Aha. I've made a mistake when renaming the vars.
Yayy, success!

Guess the twodimensional grid wasn't that scary after all.