# Gears of War Weapon Anagram Locator

You are a Gear scanning weapon crates for specific loadouts! Your squad needs to find all possible arrangements of weapons in a supply line.

## Mission Brief
An anagram is like finding the same weapon loadout in different positions - same weapons, different order. You are given:
- `weaponSupplyLine` (s) - The full weapon cache to scan through
- `targetLoadout` (p) - The specific loadout you're searching for

Find all starting positions where the target loadout appears as an anagram in the supply line.

## Examples

```javascript
findWeaponAnagrams("LancerGnasherRetroLancerBoomshot", "Lancer") ➞ [0, 18]
// Found loadouts at positions 0 and 18
// "Lance" + "r" and "Lanc" + "er" rearranged

findWeaponAnagrams("HammerburstBoltokSniperHammerburst", "Hammerburst") ➞ [0, 23]
// Complete weapon matches at crate positions 0 and 23

findWeaponAnagrams("GLGL", "GL") ➞ [0, 1, 2]
// Gnasher-Lancer pairs found at positions 0, 1, and 2
// Substrings: "GL", "LG", "GL"
```

## Weapon Codes
Common Gears weapons for testing:
- **Lancer** - Standard assault rifle
- **Gnasher** - Shotgun  
- **Hammerburst** - Burst rifle
- **Longshot** - Sniper rifle
- **Boomshot** - Explosive launcher
- **Retro** - Retro Lancer
- **Torque** - Torque Bow

## Mission Objectives
Write a function that returns an array of starting indices where anagrams of the target loadout are found in the weapon supply line.

**Stay frosty, Gear! 🔧⚙️**
