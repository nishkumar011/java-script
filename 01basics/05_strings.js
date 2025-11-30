// const gameName = "Nishant"
const repoCount = 50

//console.log(gameName + repoCount + "Value");

//console.log(`hello my gameName is ${gameName} and my repo count is ${repoCount}`);

const gameName = new String(`hitesh-hc-com`)
console.log(gameName.__proto__);
console.log(gameName)

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`t`));


const newstring = gameName.substring(0,4) // we cannot give negative indexes in substring method.
console.log(newstring);

const anotherstring = gameName.slice(-8,4) // we can give negative indexes in substring method.
console.log(anotherstring);

const newstringone = "   hitesh   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://nishant.com/nishant%20kumar"

console.log(url.replace('%20' , '-'));

console.log(url.includes('nishant'));
console.log(url.includes('sundar'));
const Name = "Nishant-Preeti-Arvind-Nikita"
console.log(Name.split('-'));
console.log(gameName.split('-'));

