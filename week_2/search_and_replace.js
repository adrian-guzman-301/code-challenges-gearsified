/*
Perform a search and replace on the sentence using the arguments provided
and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the weapon you will be replacing (before).
Third argument is the weapon you will be replacing it with (after).

Note:
Preserve the case of the first character in the original weapon name.
For example, replacing "Lancer" with "gnasher" should result in "Gnasher".

Examples (Gears of War Weapons Edition)
myReplace("Grab the Lancer and move out", "Lancer", "gnasher")
  should return "Grab the Gnasher and move out."

myReplace("He switched from the Boomshot to the Longshot", "Boomshot", "torque bow")
  should return "He switched from the Torque bow to the Longshot."

myReplace("Pick up the gnasher over there", "gnasher", "Boltok")
  should return "Pick up the Boltok over there."

myReplace("We need to repair this mulcher ASAP", "mulcher", "Scorcher")
  should return "We need to repair this Scorcher ASAP."

myReplace("His weapon of choice is the Snub", "Snub", "retro lancer")
  should return "His weapon of choice is the Retro lancer."

myReplace("Return to more Hammerburst training", "Hammerburst", "markza")
  should return "Return to more Markza training."
*/

console.log(myReplace("Grab the Lancer and move out", "Lancer", "gnasher")); 
console.log(myReplace("He switched from the Boomshot to the Longshot", "Boomshot", "torque bow"));
console.log(myReplace("Pick up the gnasher over there", "gnasher", "Boltok"));
console.log(myReplace("We need to repair this mulcher ASAP", "mulcher", "Scorcher"));
console.log(myReplace("His weapon of choice is the Snub", "Snub", "retro lancer"));
console.log(
  myReplace("Return to more Hammerburst training", "Hammerburst", "markza")
);
