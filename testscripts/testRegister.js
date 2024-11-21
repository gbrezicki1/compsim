import { RegMultiBit } from "../lib/regMultiBit.js";

let reg = new RegMultiBit(8);
console.log(`mem cell ouput: ${reg.memCellMultiBit.output}`);
console.log(`output: ${reg.output}`);
reg.updateSet(1);
console.log();
console.log(`mem cell ouput: ${reg.memCellMultiBit.output}`);
console.log(`output: ${reg.output}`);
reg.updateInput([1,1,1,1,1,1,1,1]);
console.log();
console.log(`mem cell ouput: ${reg.memCellMultiBit.output}`);
console.log(`output: ${reg.output}`);
reg.updateEnable(1);
console.log();
console.log(`mem cell ouput: ${reg.memCellMultiBit.output}`);
console.log(`output: ${reg.output}`);
