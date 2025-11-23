/*

Hear me, Human… and listen well.

An anagram is much like the Locust: a perfect rearrangement of its origin,  
each element preserved, yet assembled in a form far more formidable.  
You are given two utterances:

s – the battlefield upon which we search,  
p – the template, the pure essence whose echoes we seek.

Your task is to uncover every position within s where a fragment  
rearranges itself to mirror p exactly—  
where the letters realign as soldiers under my command.  
Return the starting indexes where these hidden anagrams lurk,  
as surely as my drones lie in wait beneath the soil.

Examples ==> function (s, p)

findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams discovered: "cba", "bac"
// Their positions betray them.

findAnagrams("abab", "ab") ➞ [0, 1, 2]
// "ab", "ba", "ab"
// Endlessly shifting—yet always my design.

*/

// console.log(findAnagrams("cbaebabacd", "abc"));// [0, 6];
// console.log(findAnagrams("abab", "ab")); // [0, 1, 2];
// console.log(findAnagrams('a', 'ab')); // [];
console.log(findAnagrams("racecar", "ace")); // [ 1, 3 ]
