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