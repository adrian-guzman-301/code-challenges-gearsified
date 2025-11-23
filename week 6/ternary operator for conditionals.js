# 🔫 Gears of War 1 Multiplayer — Compare Player Stats

/*
Write a JavaScript function that takes two player stat entries as input and returns
the player with the higher number of kills. Use the ternary operator 
(condition ? valueIfTrue : valueIfFalse) for this task.

Example Player Stats to Track:
- killCount
- deathCount
- headshots
- gnasherKills
- explosiveKills
- activeReloadCount
- spawnLocation (1-4)
- enemyExecutions
*/

function findLargerNumber(player1, player2) {}

// Example player stat entries
const playerA = { name: "Drone", killCount: 5, deathCount: 1, headshots: 2, gnasherKills: 1, explosiveKills: 0, activeReloadCount: 3, spawnLocation: 1, enemyExecutions: 1 };
const playerB = { name: "Raam", killCount: 7, deathCount: 2, headshots: 3, gnasherKills: 2, explosiveKills: 1, activeReloadCount: 2, spawnLocation: 2, enemyExecutions: 0 };

// Compare which player has more kills
console.log(findLargerNumber(playerA, playerB));
console.log(findLargerNumber(playerB, playerA));

/*
Gameplay Mechanic Lens:
- The ternary operator decides which player had more kills in a segment of the match.
- Useful for quick comparisons in PvP stats, e.g., determining MVP or who dominates a control point.
- Tracks activeReloadCount for additional performance context.
*/
