/*

Alright, listen up, rookie—Hoffman here.

You’ve got **two arrays** and a damn **insertion index**.  
Your mission is simple, but I know how easily some of you grubs get confused,  
so pay attention:

You take the FIRST array—your *filling*.  
Then you take the SECOND array—your *buns*.  
You’re gonna insert that filling into the buns starting at position **n**.  
No explosions, no blood, no excuses.  
Just a clean splice.

And for the love of the COALITION,  
both input arrays better stay untouched when you’re done.  
If you damage the originals, you’ll be cleaning latrines until winter.

Examples
frankenSplice([1, 2, 3], [4, 5], 1)  
→ should return [4, 1, 2, 3, 5].  
// That’s how you insert a squad—clean and orderly.

frankenSplice([1, 2], ["a", "b"], 1)  
→ should return ["a", 1, 2, "b"].  
// Letters, numbers—don’t care. Just get it done.

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)  
→ should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].  
// If this starts looking like a damn Berserker, that’s on you.

frankenSplice([1, 2, 3], [], 1)  
→ should return [1, 2, 3]  
// An empty bun. Fine. Drop the filling in and move on.

All elements from the first array must stay in order.  
DO NOT scramble them unless you want me shouting in your ear.

frankenSplice([1, 2, 3, 4], [], 0)  
→ should return [1, 2, 3, 4].

Both arrays must remain intact afterward.  
Consider this a sandwich assembly drill. Or a zipper.  
The starting index is the final parameter.

Now get it done, soldier.

*/
