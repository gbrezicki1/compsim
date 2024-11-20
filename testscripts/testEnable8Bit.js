import { Enable8Bit } from "../lib/enableMultiBit.js";

let enable8Bit = new Enable8Bit();

console.log(`output = ${enable8Bit.output}`);
enable8Bit.updateInput([1,1,1,1,1,1,1,1]);
console.log(`output = ${enable8Bit.output}`);
enable8Bit.updateEnable(1);
console.log(`output = ${enable8Bit.output}`);
enable8Bit.updateEnable(0);
console.log(`output = ${enable8Bit.output}`);
