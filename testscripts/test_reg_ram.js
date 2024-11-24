import { RegRam } from "../lib/regRam.js";

let reg = new RegRam(8);

console.log(reg.output);
reg.updateInput([1, 1, 1, 1, 1, 1, 1, 1]);
console.log(reg.output);
reg.updateSet(1);
reg.updateEnable(1);
console.log(reg.output);
reg.updateAddrA(1);
console.log(reg.output);
reg.updateAddrB(1);
console.log(reg.output);
reg.updateSet(0);
reg.updateReset(1);
reg.updateInput([0, 1, 0, 1, 0, 1, 0, 1]);
console.log(reg.output);
