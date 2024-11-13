const fs = require('node:fs/promises')

let callSite = async () => {
  let res = await fetch("https://display.safespace.io/value/live/6d60eb03")
  res = await res.json();

  await fs.appendFile("data.txt", `\n${Date.now()}`, () => {});
  await fs.appendFile("data.txt", `\t${res}`, () => {});
}

setInterval(function() {
  callSite();
 }, 1000*60*15);
 
 