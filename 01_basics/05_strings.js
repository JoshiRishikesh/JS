// node 01_basics/05_strings.js
const name = "Rishi"
const repoCount = 50
// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Rishi-Hc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("H"));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotheString = gameName.slice(-7, 4)
console.log(anotheString);

const newStringOne = "     Rishi     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://rishi.com/rishi%20joshi"

console.log(url.replace('%20', '-'));
console.log(url.includes("rishi"));

console.log(gameName.split("-"));