"""
You are given two strings:

weaponLoadout: A string containing only lowercase letters representing weapons
               (length 1 <= weaponLoadout.length <= 1000)
targetWeapon: A substring to search for (length 1 <= targetWeapon.length <= 100)

Your task is to implement a function `findTargetIndex(weaponLoadout, targetWeapon)` that returns:

- The starting index of the first occurrence of `targetWeapon` in `weaponLoadout`
- -1 if `targetWeapon` is not found in `weaponLoadout`

Examples (Weapons Edition):
findTargetIndex("lancergnasherboomshot", "gnasher")   # should return 6
findTargetIndex("torquebowretrohammerburst", "boltok") # should return -1
findTargetIndex("longshotscorcherboltok", "scorcher")  # should return 8
findTargetIndex("lancerboomshotmulcher", "mulcher")    # should return 12
"""

def findTargetIndex(weaponLoadout, targetWeapon):
    # Check if targetWeapon is empty

    # Use str.find() method to get the index of the first occurrence


# Test cases
test_cases = [
    ("lancergnasherboomshot", "gnasher"),
    ("torquebowretrohammerburst", "boltok"),
    ("longshotscorcherboltok", "scorcher"),
    ("lancerboomshotmulcher", "mulcher")
]

# Run each test case and print the result
for weaponLoadout, targetWeapon in test_cases:
    result = findTargetIndex(weaponLoadout, targetWeapon)
    print(f"Weapon Loadout: '{weaponLoadout}', Target Weapon: '{targetWeapon}' -> Index: {result}")
