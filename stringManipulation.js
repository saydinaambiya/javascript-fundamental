let stringNormal = " Josh Esyeden ";
let stringExtra = "Josh Josh Esyeden"

console.log("String:", stringNormal);
console.log("Length:", stringNormal.length); // get length of letter

let stringSlice = stringNormal.slice(0,2); // slice the letter from start index to end
console.log("Slice:", stringSlice);

let stringSub = stringNormal.substring(0,2);
console.log("Sub String:",stringSub);

let stringReplace = stringExtra.replace("Jo","Esyeden");
console.log("Replace:",stringReplace);

let stringReplaceAll = stringExtra.replaceAll("Jo", "Esyeden");
console.log("Replace All:", stringReplaceAll);

let stringConcat = stringNormal.concat("Enigma");
console.log("Concat:",stringConcat);

let stringTrim = stringNormal.trim();
console.log("Trim:",stringTrim.length);

let stringTrimStart = stringNormal.trimStart();
console.log("Trim Start:",stringTrimStart.length);

let stringTrimEnd = stringNormal.trimEnd();
console.log("Trim End:",stringTrimEnd.length);

let stringPad = "5";
let stringPadStart= stringPad.padStart(4, "0");
let stringPadEnd = stringPad.padEnd(4,"0");
console.log("Normal:",stringPad);
console.log("Pad Start:", stringPadStart);
console.log("Pad End:", stringPadEnd);

let stringUpperCase = stringNormal.toUpperCase();
console.log("Upper Case:", stringUpperCase);

let stringLowerCase = stringNormal.toLowerCase();
console.log("Lower Case:", stringLowerCase);

let stringChartAt = stringNormal.charAt(2);
console.log("Chart At:", stringChartAt);

let stringCharCodeAt = stringNormal.charCodeAt(10);
console.log("Chart Code At:", stringCharCodeAt);

let stringSplit = stringNormal.split(" ", 3);
console.log("Split:", stringSplit);