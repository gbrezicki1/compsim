import { MemCell8Bit } from "../lib/memCell8Bit.js";

let cell = new MemCell8Bit();
// console.log(cell.input);
// console.log(cell.set);
// console.log(cell.output);

cell.updateSet();
console.log(cell.output);
cell.updateInput(0);
console.log(cell.output);
cell.updateSet();
cell.updateInput(1);
console.log(cell.output);
cell.updateSet();
cell.updateInput(2);
console.log(cell.output);