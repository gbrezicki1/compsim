import { Ram16 } from "../lib/ram16.js";

let ram = new Ram16(8);
ram.addr = [1,0,0,0,0,0,0,0];
ram.write = 1;
ram.read = 1;
ram.addrSet = 1;
ram.input = [1,1,1,1,1,1,1,1];
ram.update();
console.log(ram.output);
console.log();