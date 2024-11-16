import { MemCell8Bit } from "../lib/memCell8Bit.js";

let cell = new MemCell8Bit();
// console.log(cell.input);
// console.log(cell.set);
// console.log(cell.output);

cell.updateSet(1);
console.log(cell.output);
cell.updateInput([1, 0, 0, 0, 0, 0, 0, 0]);
console.log(cell.output);
cell.updateSet(0);
cell.updateInput([1, 1, 0, 0, 0, 0, 0, 0]);
console.log(cell.output);
cell.updateSet(1);
cell.updateInput([1, 1, 1, 0, 0, 0, 0, 0]);
console.log(cell.output);