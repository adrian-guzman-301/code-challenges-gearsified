/*
Perform a search and replace on the sentence using the arguments provided
and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the weapon name you will be replacing (before).
Third argument is the weapon name you will be replacing it with (after).

Note:
Preserve the case of the first character in the original weapon name
when you are replacing it.

Examples (Gears of War Weapons Edition)
myReplace("Grab the Lancer and move out", "Lancer", "gnasher")
  should return "Grab the Gnasher and move out."

myReplace("He is reloading the Boomshot", "Boomshot", "torque bow")
  should return "He is reloading the Torque bow."

myReplace("Check the ammo for the longshot", "longshot", "Boltok")
  should return "Check the ammo for the boltok."

myReplace("We found a broken scorcher unit", "scorcher", "mulcher")
  should return "We found a broken mulcher unit."

myReplace("They handed him the Hammerburst", "Hammerburst", "retro lancer")
  should return "They handed him the Retro lancer."

myReplace("Switch from the Gnasher to the Snub", "Gnasher", "boltok")
  should return "Switch from the Boltok to the Snub."
*/

console.log(myReplace("Grab the Lancer and move out", "Lancer", "gnasher"));
console.log(myReplace("He is reloading the Boomshot", "Boomshot", "torque bow"));
console.log(myReplace("Check the ammo for the longshot", "longshot", "Boltok"));
console.log(myReplace("We found a broken scorcher unit", "scorcher", "mulcher"));
console.log(myReplace("They handed him the Hammerburst", "Hammerburst", "retro lancer"));
console.log(
  myReplace("Switch from the Gnasher to the Snub", "Gnasher", "boltok")
);
