Day 5 seems pretty straight forward.
I've created the skeleton - iterating over each string in the data set and running it through 3 functions:
`hasThreeVowels()`, `hasDoubleLetter()`, `hasNaughtySub()`.

Now on to creating each of these.
`hasThreeVowels()` can be done by a regex. Can I have OR conditions in regex or do I need to check for each vowel separately? It looks like that's a yes. That's easy then. :)

The range doesn't account for the same vowel double. So I'm using the proper OR in the regex.
Nope, that runs into the same problem.

Hm, not sure what was wrong. I redid it, using the range regex (and fixed the boolean - I had `> 3`), but the rest seems to be the same as before.
Well, sometimes retracing helps I guess.

On to `hasDoubleLetter()`. Here I need to check each letter with the next letter. So a `for loop` it is again.
Seems to work, check.

Now on to the last `hasNaughtySub()`. I'm going to try to check with an `includes()`. Aha, but it's an array of naughty subs... So another loop. Even though with just 4 naughties I guess I *could* do it manually. 

This isn't working quite right yet. I'm getting one true which should be false and one undefined.
The undefined is not really a problem, I should think. I will filter for true values or strings with length in the end anyways.

The problematic string is `haegwjzuvuyypxyu` - it returns true even though it has a naughty sub. So I'm going to test just this one in depth. 
It returns true for the last naught sub (`xy`) - that's what I want.
Then I'm checking in `inStringNice()` for `!hasNaughtySub()`. Does that not return false when it's true?
So, this line:
```const isStringNice = (item) => !hasNaughtySub(item);```
returns true, even when `hasNaughtySub()` returns true. That's not what I expected.
If I delete the negation, it gets even more funky:
```const isStringNice = (item) => hasNaughtySub(item);```
returns undefined for all items...

Alright, extracting another `isNaughty` var in the `hasNaughtySub()` function gives the desired results for the test data.

Using the real input, I get a TypeError for .length. I'm adding a question mark to the regex function. And voilà, a count. And it's correct, yayy!

Aaaand of course part 2 picks up on the double letter problematic. Let's see. The first rule seems more doable than the second, on first glance.
So, rule 1: string has a repeated pair of letters, not overlapping. It doesn't have to be the same letter.
Rule 2: a repeated letter with another in between. Perhaps that's actually easier, as I can reuse the `hasDoubleLetter()` function with a slight modification.

Yup, rule 2 done.

So onto rule 1. It's tricky. Basically, I have to check for the first and second letter; the second and third letter; the third and fourth letter and so forth and see if each pair has a second like it in the rest of the string.
Ok the tricky part here was just getting the right substring.
Test data is working well.
Aaaaaand success! Yayyy.