var myString = "  Hoc JS JS JS JS JS tai F8!  ";

// 1. length
// console.log(myString.length);

// 2. indexOf, lastIndexOf, search
// 2.1. Search forwards: fromIndex -> array.length - 1
// console.log(myString.indexOf("JS")); // > 6
// console.log(myString.indexOf("JS", 5)); // > 6
// console.log(myString.indexOf("JS", 6)); // > 6
// console.log(myString.indexOf("JS", 7)); // > 9
// console.log(myString.indexOf("ABC")); // > -1

// 2.2. Search backwards: fromIndex -> 0
// console.log(myString.lastIndexOf("JS")); // > 18

// 2.2.1. Not found if search backwards from 5 -> 0
// console.log(myString.lastIndexOf("JS", 5)); // > -1

// 2.2.2. Hitting "J" is enough to find "JS".
// console.log(myString[6]); // > J
// console.log(myString.lastIndexOf("JS", 6)); // > 6
// console.log(myString.lastIndexOf("JS", 7)); // > 6
// console.log(myString.lastIndexOf("ABC")); // > -1

// 2.3. Search using regular expression
// console.log(myString.search("JS")); // > 6
// console.log(myString.search(/JS/)); // > 6
// console.log(myString.search(/JS/i)); // > 6
// console.log(myString.search(/JS/g)); // > 6
// console.log(myString.search(/JS/m)); // > 6

// Note 1: https://javascript.plainenglish.io/most-surprising-behavior-of-javascript-regular-expression-you-have-ever-seen-1ddb84539163
// Note 2: Regular Expression Modifiers: https://www.w3schools.com/js/js_regexp.asp

// 3. slice
// console.log(myString.slice()); // > "  Hoc JS JS JS JS JS tai F8!  "
// console.log(myString.slice(4)); // > "c JS JS JS JS JS tai F8!  "
// console.log(myString.slice(4, 8)); // > "c JS"
// console.log(myString.slice(-3)); // > "!  " (2 spaces)
// console.log(myString.slice(-3, -1)); // > "! " (1 space)

// 4. replace
// console.log(myString.replace("JS", "JavaScript"));
// console.log(myString.replace(/JS/, "JavaScript"));
// console.log(myString.replace(/JS/g, "JavaScript"));

// 5. toUpperCase
// console.log(myString.toUpperCase());

// 6. toLowerCase
// console.log(myString.toLowerCase());

// 7. trim
// console.log(myString.trim());

// 8. split
// var language = "JavaScript";
// console.log(language.split(""));
// var languages = "JavaScript, PHP, Ruby";
// console.log(languages.split(", "));

// 9. charAt
// console.log(myString[100]); // > undefined
// console.log(myString.charAt(100)); // > ""
